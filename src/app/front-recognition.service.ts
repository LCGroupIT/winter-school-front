import { Injectable } from "@angular/core";
import { fromEvent, Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { NgOpenCVService, OpenCVLoadResult } from "ng-open-cv";
import { Passport } from "./passport";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { MessageService } from "./message.service";
import { Recognize } from "./recognize";

interface ICoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Injectable({
  providedIn: "root"
})
export class FrontRecognitionService implements Recognize {
  openCVLoadResult: Observable<OpenCVLoadResult>;
  passportImage: Blob;
  canvasInput = document.createElement("canvas");

  literalData: string[];
  numberData: string[];
  aboutDocData: string[];

  constructor(
    private ngOpenCVService: NgOpenCVService,
    private ngxService: NgxUiLoaderService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.openCVLoadResult = this.ngOpenCVService.isReady$;
  }

  async recognize(passportImage) {
    this.passportImage = passportImage;
    const p = this.loadImage(passportImage);

    try {
      await p;
    } catch {
      return;
    }

    const passport = this.getPassportData();

    return passport;
  }

  private loadImage(image: Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const load$ = fromEvent(reader, "load");
      load$
        .pipe(
          switchMap(() =>
            this.ngOpenCVService.loadImageToHTMLCanvas(
              `${reader.result}`,
              this.canvasInput
            )
          ),
          tap(async () => {
            try {
              this.prepareImage();
              await this.getData();
              this.rotateImage();
              await this.getAboutDocData();
              resolve();
            } catch (err) {
              reject(err);
            }
          })
        )
        .subscribe();
      reader.readAsDataURL(image);
    });
  }

  private prepareImage() {
    this.toGrayscale();
    this.increaseContrast();
  }

  private toGrayscale = () => {
    const canvas = this.canvasInput;
    const src = cv.imread(canvas);
    let dst = new cv.Mat();

    cv.cvtColor(src, dst, 10, 0);
    cv.imshow(canvas, dst);
    src.delete();
    dst.delete();
  };

  private increaseContrast = () => {
    const canvas = this.canvasInput;
    const src = cv.imread(canvas);
    let dst = new cv.Mat();

    cv.threshold(src, dst, 130, 240, cv.THRESH_BINARY);
    cv.imshow(canvas, dst);
    src.delete();
    dst.delete();
  };

  private rotateImage = () => {
    const canvas = this.canvasInput;
    const src = cv.imread(canvas);
    let dst = new cv.Mat();
    let dsize = new cv.Size(src.cols, src.rows);
    let center = new cv.Point(src.cols / 2, src.rows / 2);
    let M = cv.getRotationMatrix2D(center, 90, 1);

    cv.warpAffine(
      src,
      dst,
      M,
      dsize,
      cv.INTER_LINEAR,
      cv.BORDER_CONSTANT,
      new cv.Scalar()
    );
    cv.imshow(canvas, dst);

    src.delete();
    dst.delete();
    M.delete();
  };

  private async getData() {
    const canvas = this.canvasInput;
    const src = cv.imread(canvas);
    const literalFieldsCoordinates = this.getLiteralCoordinates(
      canvas.width,
      canvas.height
    );
    const numberFieldsCoordinates = this.getNumberCoordinates(
      canvas.width,
      canvas.height
    );
    const dirtyLiteralData: string[] = await this.getDataFromCoordinates(
      literalFieldsCoordinates,
      src
    );
    const dirtyNumberData: string[] = await this.getDataFromCoordinates(
      numberFieldsCoordinates,
      src
    );

    this.literalData = this.cleanLiteralData(dirtyLiteralData);
    this.numberData = this.cleanNumberData(dirtyNumberData);

    src.delete();
  }

  private async getAboutDocData() {
    const canvas = this.canvasInput;
    const src = cv.imread(canvas);
    const aboutDocFieldsCoordinates = this.getAboutDocCoordinates(
      canvas.width,
      canvas.height
    );

    const dirtyAboutDocData: string[] = await this.getDataFromCoordinates(
      aboutDocFieldsCoordinates,
      src
    );

    this.aboutDocData = this.cleanNumberData(dirtyAboutDocData);

    src.delete();
  }

  private getPassportData(): Passport {
    const docData = this.aboutDocData;
    const literalData = this.literalData;
    const numberData = this.numberData;

    const passport: Passport = {
      series: docData[0],
      number: docData[1],
      placeIssue: `${literalData[0]} ${literalData[1]}`,
      dateIssue: numberData[0],
      departmentCode: numberData[1],
      lastName: literalData[2],
      firstName: literalData[3],
      secondName: literalData[4],
      sex: literalData[5],
      birthDate: numberData[2],
      birthPlace: `${literalData[6]} ${literalData[7]} ${literalData[8]}`
    };

    return passport;
  }

  private getLiteralCoordinates = (
    width: number,
    height: number
  ): ICoordinates[] => {
    const onePW = width / 100;
    const onePH = height / 100;

    return [
      {
        x: onePW * 25,
        y: onePH * 8,
        width: onePW * 74,
        height: onePH * 4
      },
      {
        x: onePW * 2,
        y: onePH * 12.5,
        width: onePW * 90,
        height: onePH * 7.5
      },

      {
        x: onePW * 41.5,
        y: onePH * 57,
        width: onePW * 44,
        height: onePH * 4
      },
      {
        x: onePW * 40,
        y: onePH * 64,
        width: onePW * 53,
        height: onePH * 4
      },
      {
        x: onePW * 41,
        y: onePH * 68,
        width: onePW * 53,
        height: onePH * 4
      },
      {
        x: onePW * 38,
        y: onePH * 71,
        width: onePW * 11,
        height: onePH * 5
      },

      {
        x: onePW * 42,
        y: onePH * 75.5,
        width: onePW * 49,
        height: onePH * 4
      },
      {
        x: onePW * 34,
        y: onePH * 79,
        width: onePW * 58,
        height: onePH * 5
      },
      {
        x: onePW * 34,
        y: onePH * 84,
        width: onePW * 58,
        height: onePH * 5
      }
    ];
  };

  private getNumberCoordinates = (
    width: number,
    height: number
  ): ICoordinates[] => {
    const onePW = width / 100;
    const onePH = height / 100;

    return [
      {
        x: onePW * 19,
        y: onePH * 19,
        width: onePW * 21.5,
        height: onePH * 5
      },
      {
        x: onePW * 55,
        y: onePH * 20,
        width: onePW * 38,
        height: onePH * 5
      },
      {
        x: onePW * 57,
        y: onePH * 71,
        width: onePW * 30,
        height: onePH * 5
      }
    ];
  };

  private getAboutDocCoordinates = (
    width: number,
    height: number
  ): ICoordinates[] => {
    const onePW = width / 100;
    const onePH = height / 100;

    return [
      {
        x: onePW * 0,
        y: onePH * 15,
        width: onePW * 16,
        height: onePH * 5
      },
      {
        x: onePW * 16,
        y: onePH * 15,
        width: onePW * 18,
        height: onePH * 5
      }
    ];
  };

  private getDataFromCoordinates = async (
    coords: ICoordinates[],
    src
  ): Promise<string[]> => {
    const outputArray = [];

    for await (const cord of coords) {
      const field = this.getImagePart(src, cord);
      const text = await this.getText(field);
      outputArray.push(text);
    }

    return outputArray;
  };

  private getImagePart(src, cords: ICoordinates) {
    const { x, y, width, height } = cords;
    const outputCanvas = document.createElement("canvas");
    let dst = new cv.Mat();
    let rect = new cv.Rect(x, y, width, height);

    dst = src.roi(rect);
    cv.imshow(outputCanvas, dst);

    dst.delete();
    return outputCanvas;
  }

  private async getText(canvas) {
    let text;
    await Tesseract.recognize(canvas, {
      lang: "rus"
    }).then(result => (text = result.text));

    return text;
  }

  private cleanLiteralData = (dirtyData: string[]) => {
    const cleanData = [];

    dirtyData.forEach((dirtyStr: string) => {
      const cleanStr = dirtyStr
        .replace(/[^a-zA-ZА-Яа-яЁё\s- ]/gi, "")
        .replace(/\n/g, "");
      cleanData.push(cleanStr);
    });

    return cleanData;
  };

  private cleanNumberData = (dirtyData: string[]) => {
    const cleanData = [];

    dirtyData.forEach((dirtyStr: string) => {
      const cleanStr = dirtyStr.replace(/[^\d-]/gi, "");
      cleanData.push(cleanStr);
    });

    return cleanData;
  };
}
