import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { PassportFileService } from "../passport-file.service";
import { Subscription } from "rxjs";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-cam",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.scss"]
})
export class CameraComponent implements OnInit, AfterViewInit {
  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  @ViewChild("test-canvas")
  public testCanvas: ElementRef;

  @ViewChild("photoCanvas")
  public photoCanvas: ElementRef;

  public captures: Array<any>;

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  pictureWidth = 640;
  pictureHeight = 460;
  stream = null;
  cameraIdNumber = 0;
  maxCameraIds = 1;
  isMirror = false;
  currentRectCoords = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };

  public constructor(
    private passportFileService: PassportFileService,
    private route: ActivatedRoute,
    private router: Router,
    private ngxService: NgxUiLoaderService
  ) {
    this.captures = [];
    this.routeSubscription = route.params.subscribe(params => {
      this.startCam();
    });
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      // this.startCam();
    });
  }
  public ngOnInit() {}

  searchForRearCamera() {
    return new Promise((resolve, reject) => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        resolve(null);
      }

      navigator.mediaDevices
        .enumerateDevices()
        .then(devices => {
          const rearCameraIds = devices
            .filter(device => {
              return device.kind === "videoinput";
            })
            .map(device => {
              return device.deviceId;
            });
          rearCameraIds.reverse();

          if (rearCameraIds.length) {
            this.maxCameraIds = rearCameraIds.length;
            resolve(rearCameraIds[this.cameraIdNumber]);
          } else {
            resolve(null);
          }
        })
        .catch(function(err) {
          console.log(err.name + ": " + err.message);
        });
    });
  }

  setupVideo(rearCameraId) {
    console.log(rearCameraId);
    return new Promise((resolve, reject) => {
      const videoSettings = {
        video: {
          optional: [
            {
              width: { min: this.pictureWidth }
            },
            {
              height: { min: this.pictureHeight }
            }
          ]
        }
      };
      if (rearCameraId) {
        videoSettings.video.optional.push(<any>{
          sourceId: rearCameraId
        });
      }

      navigator.mediaDevices
        .getUserMedia(<any>videoSettings)
        .then(_stream => {
          // Setup the video stream
          this.stream = _stream;
          this.video.nativeElement.srcObject = this.stream;

          this.video.nativeElement.addEventListener("loadedmetadata", e => {
            // get video width and height as it might be different than we requested
            this.pictureWidth = e.target.videoWidth;
            this.pictureHeight = e.target.videoHeight;
            resolve();
          });
        })
        .catch(function() {
          reject("There is no access to your camera, have you denied it?");
        });
    });
  }

  startCam() {
    this.searchForRearCamera().then(id => {
      this.setupVideo(id).then(() => {
        console.log("ok");
      });
    });
  }

  public ngAfterViewInit() {
    const ctx = this.canvas.nativeElement.getContext("2d");

    this.video.nativeElement.addEventListener("loadedmetadata", e => {
      this.canvas.nativeElement.width = e.target.videoWidth;
      this.canvas.nativeElement.height = e.target.videoHeight;
    });

    const closeBtn = document.querySelector("#ico_close");
    closeBtn.addEventListener(
      "backKeyDown",
      function(e) {
        alert("you hit the back key!");
        if (this.stream == null) {
          return;
        }
        this.stream.getTracks().forEach(t => {
          t.stop();
        });
      },
      false
    );

    this.video.nativeElement.addEventListener("play", Draw.bind(this), 0);



    function Draw(event) {
      const $this = this.video.nativeElement;
      const rootThis = this;

      (function loop() {
        if (!$this.paused && !$this.ended) {
          if (rootThis.isMirror) {
            ctx.scale(-1, 1);
            ctx.translate(-ctx.canvas.width, 0);
          }
          // ctx.scale(-1, 1);
          // ctx.translate($this.width, 0);

          ctx.drawImage($this, 0, 0);
          if (rootThis.isMirror) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
          }
          let heightIndent,
            pasportHeight,
            pasportWidth,
            widthIndent,
            pasportMiddle,
            pasportPhotoWidth,
            pasportPhotoHeight;
          if (ctx.canvas.offsetWidth > ctx.canvas.offsetHeight) {
            heightIndent = (50 * 100) / ctx.canvas.height;
            pasportHeight = ctx.canvas.height - 2 * heightIndent;
            pasportWidth = (10 * pasportHeight) / 14;
            widthIndent = (ctx.canvas.width - pasportWidth) / 2;
            pasportMiddle = heightIndent + pasportHeight / 2;
            pasportPhotoWidth = pasportWidth * 0.28;
            pasportPhotoHeight = pasportWidth * 0.357;
          } else {
            widthIndent = (100 * 100) / ctx.canvas.width;
            pasportWidth = ctx.canvas.width - 2 * widthIndent;
            pasportHeight = pasportWidth * 1.4;
            heightIndent = (ctx.canvas.height - pasportHeight) / 2;
            pasportMiddle = heightIndent + pasportHeight / 2;
            pasportPhotoWidth = pasportWidth * 0.28;
            pasportPhotoHeight = pasportWidth * 0.357;
          }
          ctx.fillStyle = "rgba(0,0,0,0.8)";
          ctx.fillRect(0, 0, ctx.canvas.width, heightIndent - 2);
          ctx.fillRect(
            0,
            heightIndent - 2.3,
            widthIndent,
            2 + pasportHeight + 2.6
          );
          ctx.fillRect(
            widthIndent + pasportWidth + 2,
            heightIndent - 2.3,
            widthIndent - 2,
            2 + pasportHeight + 2.6
          );
          ctx.fillRect(
            0,
            heightIndent + pasportHeight + 2,
            ctx.canvas.width,
            heightIndent - 2
          );
          ctx.setLineDash([0, 0]);
          ctx.lineWidth = 5;
          ctx.strokeStyle = "yellow";
          ctx.strokeRect(
            widthIndent,
            heightIndent,
            pasportWidth,
            pasportHeight
          );
          ctx.lineWidth = 2;
          ctx.setLineDash([10, 10]);
          ctx.strokeRect(widthIndent, pasportMiddle, pasportWidth, 0);
          ctx.setLineDash([0, 0]);
          ctx.strokeStyle = "red";
          rootThis.currentRectCoords.x = widthIndent;
          rootThis.currentRectCoords.y = heightIndent;
          rootThis.currentRectCoords.width = pasportWidth;
          rootThis.currentRectCoords.height = pasportHeight;
          ctx.strokeRect(
            widthIndent + pasportWidth * 0.05,
            pasportMiddle + pasportWidth * 0.129,
            pasportPhotoWidth,
            pasportPhotoHeight
          );
          ctx.canvas.toBlob(blob => {
            console.log('Video: ' + blob.size);
          });
          setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
      })();
    }
  }

  public capture() {
    this.video.nativeElement.pause();
    const ctx = this.canvas.nativeElement.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.photoCanvas.nativeElement.toBlob((blob: Blob) => {
      console.log('Pre final:' + blob.size);
    }, "image/png");
    this.photoCanvas.nativeElement.width = this.currentRectCoords.width;
    this.photoCanvas.nativeElement.height = this.currentRectCoords.height;

    this.photoCanvas.nativeElement
      .getContext("2d")
      .drawImage(
        this.video.nativeElement,
        this.currentRectCoords.x,
        this.currentRectCoords.y,
        this.currentRectCoords.width,
        this.currentRectCoords.height,
        0,
        0,
        this.currentRectCoords.width,
        this.currentRectCoords.height
      );
    this.ngxService.start();
    this.photoCanvas.nativeElement.toBlob((blob: Blob) => {
      console.log('Final:' + blob.size);
      this.passportFileService.setPassportFile(blob);
      this.stop();
    }, "image/png");
  }

  public flip() {
    if (this.stream == null) {
      return;
    }
    this.stream.getTracks().forEach(t => {
      t.stop();
    });
    if (this.cameraIdNumber < this.maxCameraIds - 1) {
      this.cameraIdNumber++;
    } else {
      this.cameraIdNumber = 0;
    }
    this.startCam();
  }

  public mirror() {
    if (this.stream == null) {
      return;
    }
    this.stream.getTracks().forEach(t => {
      t.stop();
    });
    this.isMirror = !this.isMirror;
    this.startCam();
  }

  public stop() {
    // this.ngxService.start();
    if (this.stream == null) {
      return;
    }
    this.stream.getTracks().forEach(t => {
      t.stop();
    });
  this.router.navigate([""]);

  }
}
