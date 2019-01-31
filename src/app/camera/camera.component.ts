import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {PassportFileService} from '../passport-file.service';

@Component({
  selector: 'app-cam',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
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


  public constructor(private passportFileService: PassportFileService) {
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
            this.maxCameraIds = rearCameraIds.length;
            console.log(rearCameraIds);
            resolve(rearCameraIds[this.cameraIdNumber]);
          } else {
            resolve(null);
          }
        })
        .catch(function(err) {
          console.log(err.name + ': ' + err.message);
        });
    });
  }


  setupVideo(rearCameraId) {
    console.log(rearCameraId);
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
        .then((_stream) => {
          //Setup the video stream
          this.stream = _stream;
          this.video.nativeElement.srcObject = this.stream;

          this.video.nativeElement.addEventListener('loadedmetadata', (e) => {
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





  startCam(){
    this.showCam = true;
    this.searchForRearCamera().then(id => {
      this.setupVideo(id).then(() => {
        console.log('ok');
      });
    });
  }





  public ngAfterViewInit() {

    const ctx = this.canvas.nativeElement.getContext('2d');


    this.video.nativeElement.addEventListener('loadedmetadata', (e) => {
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

    const closeBtn = document.querySelector('#ico_close');
    closeBtn.addEventListener('backKeyDown', function(e) {
      alert('you hit the back key!');
      this.showCam = false;
      if ( this.stream == null ) { return; }
      this.stream.getTracks().forEach(t => {
        t.stop();
      });
    }, false);

    this.video.nativeElement.addEventListener('play', Draw.bind(this), 0);
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
    
    // this.searchForRearCamera().then(id => {
    //   this.setupVideo(id).then(() => {
    //     console.log('ok');
    //   });
    // });

    function Draw(event) {
      const $this = this.video.nativeElement;
      const $mir = this.isMirror;
      const rootThis = this;

      (function loop() {
        if (!$this.paused && !$this.ended) {


          // if($mir){
          //   ctx.translate($this.width, 0);
          //   ctx.scale(-1, 1);
          // }

          ctx.drawImage($this, 0, 0);

          if (ctx.canvas.offsetWidth > ctx.canvas.offsetHeight) {
            const pasportWidth = ctx.canvas.width / 2;
            const pasportHeight = pasportWidth * 1.347;
            const pasportMiddle = 20 + (pasportHeight / 2);
            const pasportPhotoWidth = pasportWidth * 0.28;
            const pasportPhotoHeight = pasportWidth * 0.357;
            ctx.fillStyle = 'rgba(0,0,0,0.8)';
            ctx.fillRect(0, 0, ctx.canvas.width, 18);
            ctx.fillRect(0, 18, (ctx.canvas.width / 4) - 2, 2 + pasportHeight + 2);
            ctx.fillRect(ctx.canvas.width / 4 + pasportWidth + 2, 18, ctx.canvas.width, 2 + pasportHeight + 2);
            ctx.fillRect(0, 20 + pasportHeight + 2, ctx.canvas.width, ctx.canvas.height);
            ctx.setLineDash([0, 0]);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'yellow';
            ctx.strokeRect(ctx.canvas.width / 4, 20, pasportWidth, pasportHeight);
            ctx.lineWidth = 2;
            ctx.setLineDash([10, 10]);
            ctx.strokeRect(ctx.canvas.width / 4 , pasportMiddle, pasportWidth, 0);
            ctx.setLineDash([0, 0]);
            ctx.strokeStyle = 'blue';
            rootThis.currentRectCoords.x = ctx.canvas.width / 4;
            rootThis.currentRectCoords.y = 20;
            rootThis.currentRectCoords.width = pasportWidth;
            rootThis.currentRectCoords.height = pasportHeight;
            ctx.strokeRect(ctx.canvas.width / 4 + pasportWidth * 0.05, pasportMiddle + pasportWidth * 0.129,
              pasportPhotoWidth, pasportPhotoHeight);
          } else {
            let heightIndent = 20;
            let pasportWidth = 10000;
            let pasportHeight = ctx.canvas.height;
            while (pasportWidth > ctx.canvas.width) {
              pasportHeight = ctx.canvas.height - heightIndent * 2;
              pasportWidth = pasportHeight * 1000 / 1347;
              heightIndent += 10;
            }
            const widthIndent = (ctx.canvas.width - pasportWidth)/ 2;
            const pasportMiddle = heightIndent + (pasportHeight / 2);
            const pasportPhotoWidth = pasportWidth * 0.28;
            const pasportPhotoHeight = pasportWidth * 0.357;

            ctx.fillStyle = 'rgba(0,0,0,0.8)';
            ctx.fillRect(0, 0, ctx.canvas.width, heightIndent - 2);
            ctx.fillRect(0, heightIndent - 2, widthIndent - 2, 2 + pasportHeight + 2);
            ctx.fillRect(widthIndent + pasportWidth + 2, heightIndent - 2, ctx.canvas.width, 2 + pasportHeight + 2);
            ctx.fillRect(0, 20 + pasportHeight + 2, ctx.canvas.width, ctx.canvas.height);
            ctx.setLineDash([0, 0]);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'yellow';
            ctx.strokeRect(widthIndent, heightIndent, pasportWidth, pasportHeight);
            ctx.lineWidth = 2;
            ctx.setLineDash([10, 10]);
            ctx.strokeRect(widthIndent, pasportMiddle, pasportWidth, 0);
            ctx.setLineDash([0, 0]);
            ctx.strokeStyle = 'green';
            rootThis.currentRectCoords.x = widthIndent;
            rootThis.currentRectCoords.y = heightIndent;
            rootThis.currentRectCoords.width = pasportWidth;
            rootThis.currentRectCoords.height = pasportHeight;
            ctx.strokeRect(widthIndent + pasportWidth * 0.05, pasportMiddle + pasportWidth * 0.129,
              pasportPhotoWidth, pasportPhotoHeight);
          }
          // if($mir)
          //   ctx.setTransform(1,0,0,1,0,0);
          setTimeout(loop, 1000 / 30); // drawing at 30fps

        }
      })();
    }

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

  }

  public capture() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    this.photoCanvas.nativeElement.width = this.currentRectCoords.width;
    this.photoCanvas.nativeElement.height = this.currentRectCoords.height;
   /* const pctx = this.photoCanvas.nativeElement.getContext('2d');
    pctx.translate(pctx.canvas.width,0);
    pctx.scale(-1,1);*/
   /* if (ctx.canvas.offsetWidth > ctx.canvas.offsetHeight)
      this.photoCanvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, ctx.canvas.width / 4,20,ctx.canvas.width/2,(ctx.canvas.width/2)*1.347, 0, 0, ctx.canvas.width/2, (ctx.canvas.width/2)*1.347);
    else{
      let heightIndent = 20;
      let pasportWidth = 10000;
      let pasportHeight = ctx.canvas.height;
      while(pasportWidth>ctx.canvas.width){
        pasportHeight = ctx.canvas.height-heightIndent*2;
        pasportWidth = pasportHeight*1000/1347;
        heightIndent+=10;
      }
      const widthIndent = (ctx.canvas.width-pasportWidth)/2;
      this.photoCanvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, widthIndent,heightIndent,pasportWidth,pasportHeight, 0, 0, pasportWidth, pasportHeight);
    }*/

    this.photoCanvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, this.currentRectCoords.x, this.currentRectCoords.y, this.currentRectCoords.width, this.currentRectCoords.height, 0, 0, this.currentRectCoords.width, this.currentRectCoords.height);
    this.photoCanvas.nativeElement.toBlob(function(blob) {
      this.passportFileService.setPassportFile(blob);
    }, 'image/png');
    this.captures.push(this.photoCanvas.nativeElement.toDataURL('image/png'));
  }

  public flip() {
    if ( this.stream == null ) { return; }
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
    if ( this.stream == null ) { return; }
    this.stream.getTracks().forEach(t => {
      t.stop();
    });
    this.isMirror = !this.isMirror;
    this.startCam();
  }
}
