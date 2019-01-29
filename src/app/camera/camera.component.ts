import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: "app-cam",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.scss"]
})
export class CameraComponent implements OnInit, AfterViewInit {
  showCam = false;

  @ViewChild('video')
  public video: ElementRef;

  @ViewChild('canvas')
  public canvas: ElementRef;

  @ViewChild('test-canvas')
  public testCanvas: ElementRef;

  @ViewChild('photoCanvas')
  public photoCanvas: ElementRef;

  public captures: Array<any>;


  pictureWidth = 640;
  pictureHeight = 460;

  public constructor() {
    this.captures = [];
  }

  public ngOnInit() { }


  searchForRearCamera() {
    return new Promise((resolve, reject) => {
      //MediaStreamTrack.getSources seams to be supported only by Chrome
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        resolve(null);
      }

      navigator.mediaDevices.enumerateDevices()
        .then((devices) => {

          const rearCameraIds = devices.filter((device) => {
            return (device.kind === 'videoinput');
          }).map((device) => {
            return device.deviceId;
          });

          if (rearCameraIds.length) {
            resolve(rearCameraIds[0]);
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
    return new Promise(((resolve, reject) => {
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

      //if rear camera is available - use it
      if (rearCameraId) {
        videoSettings.video.optional.push(<any>{
          sourceId: rearCameraId
        });
      }


      navigator.mediaDevices.getUserMedia(<any>videoSettings)
        .then((stream) => {
          //Setup the video stream
          this.video.nativeElement.srcObject = stream;

          this.video.nativeElement.addEventListener("loadedmetadata", (e) => {
            //get video width and height as it might be different than we requested
            this.pictureWidth = e.target.videoWidth;
            this.pictureHeight = e.target.videoHeight;
            resolve();
            /*
                          if (!pictureWidth && !pictureHeight) {
                            //firefox fails to deliver info about video size on time (issue #926753), we have to wait
                            const waitingForSize = setInterval(() => {
                              if (this.video.nativeElement.videoWidth && this.video.nativeElement.videoHeight) {
                                pictureWidth = this.video.nativeElement.videoWidth;
                                pictureHeight = this.video.nativeElement.videoHeight;

                                clearInterval(waitingForSize);
                                resolve();
                              }
                            }, 100);
                          } else {
                            resolve();
                          }
                        }, false);
                        */
          });
        }).catch(function () {
        reject('There is no access to your camera, have you denied it?');
      });
    }));
  }


  public ngAfterViewInit() {
    /*
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'user'} })
        .then(s => {
        this.video.nativeElement.srcObject = s;
        this.video.nativeElement.play();
      }).catch(function(err) {
        console.log(err);
      });
    }
    */


    this.searchForRearCamera().then(id => {
      this.setupVideo(id).then(() => {
        console.log('ok');
      });
    });





    /*
    // camera stream video element
    let videoElm = document.querySelector('#camera-stream');
// flip button element
    let flipBtn = document.querySelector('#flip-btn');

// default user media options
    let defaultsOpts = { audio: false, video: true }
    let shouldFaceUser = true;

// check whether we can use facingMode
    let supports = navigator.mediaDevices.getSupportedConstraints();
    if( supports['facingMode'] === true ) {
      (<any>flipBtn).disabled = false;
    }

    let stream = null;

    function capture() {
      (<any>defaultsOpts).video = { facingMode: shouldFaceUser ? 'user' : 'environment' }
      navigator.mediaDevices.getUserMedia(defaultsOpts)
        .then(function(_stream) {
          stream  = _stream;
          videoElm.srcObject = stream;
          videoElm.play();
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    flipBtn.addEventListener('click', function(){
      if( stream == null ) return
      // we need to flip, stop everything
      stream.getTracks().forEach(t => {
        t.stop();
      });
      // toggle / flip
      shouldFaceUser = !shouldFaceUser;
      capture();
    });

*/
    const ctx = this.canvas.nativeElement.getContext('2d');



    this.video.nativeElement.addEventListener("loadedmetadata", (e) => {

      this.canvas.nativeElement.width = e.target.videoWidth;
      this.canvas.nativeElement.height = e.target.videoHeight;


      /*
            if (!pictureWidth && !pictureHeight) {
                //firefox fails to deliver info about video size on time (issue #926753), we have to wait
                var waitingForSize = setInterval(function () {
                  if (video.videoWidth && video.videoHeight) {
                    pictureWidth = video.videoWidth;
                    pictureHeight = video.videoHeight;

                    clearInterval(waitingForSize);
                  }
                }, 100);
              }
              */
    });



    this.video.nativeElement.addEventListener('play', function() {
      const $this = this;

      (function loop() {
        if (!$this.paused && !$this.ended) {
          ctx.translate($this.width,0);
          ctx.scale(-1,1);
          ctx.drawImage($this, 0, 0);
          ctx.setLineDash([0, 0]);
          ctx.lineWidth =5;
          ctx.strokeStyle = "yellow";
          ctx.strokeRect(ctx.canvas.width/4, 20, ctx.canvas.width/2,ctx.canvas.height-90);
          ctx.lineWidth =2;
          ctx.setLineDash([10, 5]);
          ctx.strokeRect(ctx.canvas.width/4, ctx.canvas.height/2-20, ctx.canvas.width/2,0);
          ctx.setLineDash([0, 0]);
          ctx.strokeStyle = "red";
          ctx.strokeRect((ctx.canvas.width/4)*2+50, ctx.canvas.height/2+10, 80,100);
          ctx.setTransform(1,0,0,1,0,0);
          setTimeout(loop, 1000 / 30); // drawing at 30fps

        }
      })();
    }, 0);
  }

  public capture() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    this.photoCanvas.nativeElement.width = ctx.canvas.width/2;
    this.photoCanvas.nativeElement.height = ctx.canvas.height-90;

    const pctx = this.photoCanvas.nativeElement.getContext('2d');
    pctx.translate(pctx.canvas.width,0);
    pctx.scale(-1,1);
    this.photoCanvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement,ctx.canvas.width/4,20,ctx.canvas.width/2,ctx.canvas.height-90, 0, 0, ctx.canvas.width/2, ctx.canvas.height-90);
    this.captures.push(this.photoCanvas.nativeElement.toDataURL('image/png'));
  }

}
