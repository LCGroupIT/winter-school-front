import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { fromEvent, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { NgOpenCVService, OpenCVLoadResult } from "ng-open-cv";
import { PassportFileService } from "../passport-file.service";
import { PassportService } from "../passport.service";
import { Passport } from "../passport";

interface ICoordinates {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Component({
  selector: "app-front-recognition",
  templateUrl: "./front-recognition.component.html",
  styleUrls: ["./front-recognition.component.scss"]
})
export class FrontRecognitionComponent implements OnInit {
  openCVLoadResult: Observable<OpenCVLoadResult>;

  passportImage: Blob;

  @ViewChild("canvasInput")
  canvasInput: ElementRef;
  @ViewChild("canvasOutput")
  canvasOutput: ElementRef;

  literalData: string[];
  numberData: string[];
  aboutDocData: string[];

  constructor(private ngOpenCVService: NgOpenCVService) {}

  ngOnInit() {
    this.openCVLoadResult = this.ngOpenCVService.isReady$;
    PassportFileService.getPassportFile().subscribe(passportImage => {
      if (passportImage) {
        this.passportImage = passportImage;
        this.loadImage(passportImage);
      }
    });
  }

  loadImage(image: Blob) {
    const reader = new FileReader();
    const load$ = fromEvent(reader, "load");
    load$
      .pipe(
        switchMap(() =>
          this.ngOpenCVService.loadImageToHTMLCanvas(
            `${reader.result}`,
            this.canvasInput.nativeElement
          )
        )
      )
      .subscribe(
        async () => {
          this.prepareImage();
          await this.getData();
          this.rotateImage();
          await this.getAboutDocData();
          this.sendDataToForm();
        },
        err => console.log("Error loading image", err)
      );
    reader.readAsDataURL(image);
  }

  prepareImage() {
    this.toGrayscale();
    this.increaseContrast();
  }

  toGrayscale = () => {
    const canvas = this.canvasInput.nativeElement;
    const src = cv.imread(canvas.id);
    let dst = new cv.Mat();

    cv.cvtColor(src, dst, 10, 0);
    cv.imshow(canvas.id, dst);
    src.delete();
    dst.delete();
  };

  increaseContrast = () => {
    const canvas = this.canvasInput.nativeElement;
    const src = cv.imread(canvas.id);
    let dst = new cv.Mat();

    cv.threshold(src, dst, 130, 240, cv.THRESH_BINARY);
    cv.imshow(canvas.id, dst);
    src.delete();
    dst.delete();
  };

  rotateImage = () => {
    const canvas = this.canvasInput.nativeElement;
    const src = cv.imread(canvas.id);
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
    cv.imshow(canvas.id, dst);

    src.delete();
    dst.delete();
    M.delete();
  };

  async getData() {
    const canvas = this.canvasInput.nativeElement;
    const src = cv.imread(canvas.id);
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

  async getAboutDocData() {
    const canvas = this.canvasInput.nativeElement;
    const src = cv.imread(canvas.id);
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

  sendDataToForm() {
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

    PassportService.setPassport(passport);
  }

  getLiteralCoordinates = (width: number, height: number): ICoordinates[] => {
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

  getNumberCoordinates = (width: number, height: number): ICoordinates[] => {
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

  getAboutDocCoordinates = (width: number, height: number): ICoordinates[] => {
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

  getDataFromCoordinates = async (
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

  getImagePart(src, cords: ICoordinates) {
    const { x, y, width, height } = cords;
    const outputCanvas = document.createElement("canvas");
    let dst = new cv.Mat();
    let rect = new cv.Rect(x, y, width, height);

    dst = src.roi(rect);
    cv.imshow(outputCanvas, dst);

    dst.delete();
    return outputCanvas;
  }

  async getText(canvas) {
    let text;
    await Tesseract.recognize(canvas, {
      lang: "rus"
    }).then(result => (text = result.text));

    return text;
  }

  cleanLiteralData = (dirtyData: string[]) => {
    const cleanData = [];

    dirtyData.forEach((dirtyStr: string) => {
      const cleanStr = dirtyStr
        .replace(/[^a-zA-ZА-Яа-яЁё\s]/gi, "")
        .replace(/\n/g, "");
      cleanData.push(cleanStr);
    });

    return cleanData;
  };

  cleanNumberData = (dirtyData: string[]) => {
    const cleanData = [];

    dirtyData.forEach((dirtyStr: string) => {
      const cleanStr = dirtyStr.replace(/[^\d]/gi, "");
      cleanData.push(cleanStr);
    });

    return cleanData;
  };
}

// series
// let x = onePW * 0;
// let y = onePH * 15;
// let width = onePW * 16;
// let height = onePH * 5;

// number
// let x = onePW * 16;
// let y = onePH * 15;
// let width = onePW * 18;
// let height = onePH * 5;

// placeIssue part 1
// let x = onePW * 25;
// let y = onePH * 8;
// let width = onePW * 74;
// let height = onePH * 4;

// placeIssue part 2
// let x = onePW * 2;
// let y = onePH * 12.5;
// let width = onePW * 90;
// let height = onePH * 7.5;

// dateIssue
// let x = onePW * 19;
// let y = onePH * 19;
// let width = onePW * 21.5;
// let height = onePH * 5;

// departmentCode
// let x = onePW * 55;
// let y = onePH * 20;
// let width = onePW * 38;
// let height = onePH * 5;

// lastName
// let x = onePW * 41.5;
// let y = onePH * 57;
// let width = onePW * 44;
// let height = onePH * 4;

// firstName
// let x = onePW * 40;
// let y = onePH * 64;
// let width = onePW * 53;
// let height = onePH * 4;

// secondName
// let x = onePW * 41;
// let y = onePH * 68;
// let width = onePW * 53;
// let height = onePH * 4;

// sex
// let x = onePW * 38;
// let y = onePH * 71;
// let width = onePW * 11;
// let height = onePH * 5;

// birthDate
// let x = onePW * 57;
// let y = onePH * 71;
// let width = onePW * 30;
// let height = onePH * 5;

// birthPlace part 1
// let x = onePW * 42;
// let y = onePH * 75.5;
// let width = onePW * 49;
// let height = onePH * 4;

// birthPlace part 2
// let x = onePW * 34;
// let y = onePH * 79;
// let width = onePW * 58;
// let height = onePH * 5;

// birthPlace part 3
// let x = onePW * 34;
// let y = onePH * 84;
// let width = onePW * 58;
// let height = onePH * 5;

// async getData() {
//   const canvas = this.canvasInput.nativeElement;
//   const outputCanvas = this.canvasOutput.nativeElement;
//   const img = { Width: canvas.width, Height: canvas.height };

//   const src = cv.imread(canvas.id);
//   let dst = new cv.Mat();
//   const onePW = img.Width / 100;
//   const onePH = img.Height / 100;

//   let x = onePW * 41.5;
//   let y = onePH * 57;
//   let width = onePW * 44;
//   let height = onePH * 4;

//   let rect = new cv.Rect(x, y, width, height);
//   dst = src.roi(rect);

//   cv.imshow(outputCanvas.id, dst);

//   const text = await this.getText(outputCanvas);
//   console.log(text);
//   src.delete();
//   dst.delete();
// }
