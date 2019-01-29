(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { initialNavigation: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\r\n  <h1 class=\"app__title\">Введите данные паспотра</h1>\r\n  <div class=\"app__buttons-wrapper\">\r\n    <div class=\"app__button\"><app-file-load-button></app-file-load-button></div>\r\n  </div>\r\n  <app-cam></app-cam>\r\n  <app-form></app-form>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  margin: 0 auto;\n  max-width: 700px; }\n\n.app__title {\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center; }\n\n@media screen and (max-width: 460px) {\n    .app__title {\n      font-size: 20px; } }\n\n@media screen and (min-width: 461px) and (max-width: 640px) {\n    .app__title {\n      font-size: 25px; } }\n\n.app__buttons-wrapper {\n  display: flex;\n  justify-content: space-around; }\n\n@media screen and (max-width: 400px) {\n    .app__buttons-wrapper {\n      display: block;\n      text-align: center; }\n      .app__buttons-wrapper .app__button {\n        width: 100%;\n        margin: 10px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxHaXRodWJcXHdpbnRlci1zY2hvb2wtZnJvbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx5Q0FBeUM7RUFDekMsa0JBQWtCLEVBQUE7O0FBQ2xCO0lBSEY7TUFJSSxlQUFlLEVBQUEsRUFLbEI7O0FBSEM7SUFORjtNQU9JLGVBQWUsRUFBQSxFQUVsQjs7QUFFRDtFQUNFLGFBQWE7RUFDYiw2QkFBNkIsRUFBQTs7QUFFN0I7SUFKRjtNQUtJLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtNQU50QjtRQVFNLFdBQVc7UUFDWCxjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbn1cclxuXHJcbi5hcHBfX3RpdGxlIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDYxcHgpIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFwcF9fYnV0dG9ucy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAmIC5hcHBfX2J1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'winter-school-front';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_image_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-image-upload */ "./node_modules/angular2-image-upload/fesm5/angular2-image-upload.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./camera/camera.component */ "./src/app/camera/camera.component.ts");
/* harmony import */ var _file_load_button_file_load_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-load-button/file-load-button.component */ "./src/app/file-load-button/file-load-button.component.ts");
/* harmony import */ var _file_load_dialog_file_load_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./file-load-dialog/file-load-dialog.component */ "./src/app/file-load-dialog/file-load-dialog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_7__["FormComponent"],
                _camera_camera_component__WEBPACK_IMPORTED_MODULE_8__["CameraComponent"],
                _file_load_button_file_load_button_component__WEBPACK_IMPORTED_MODULE_9__["FileLoadButtonComponent"],
                _file_load_dialog_file_load_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FileLoadDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular2_image_upload__WEBPACK_IMPORTED_MODULE_4__["ImageUploadModule"].forRoot()
            ],
            entryComponents: [_file_load_dialog_file_load_dialog_component__WEBPACK_IMPORTED_MODULE_10__["FileLoadDialogComponent"]],
            providers: [{ provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MAT_DATE_LOCALE"], useValue: "ru-RU" }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/camera/camera.component.html":
/*!**********************************************!*\
  !*** ./src/app/camera/camera.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <div>\r\n    <!--<video id=\"camera-stream\"></video>-->\r\n    <div id=\"photo\" [hidden]=\"!showCam\">\r\n      <canvas id=\"test-canvas\" #canvas [hidden]=\"!showCam\"></canvas>\r\n      <canvas id=\"photo-canvas\" #photoCanvas [hidden]=\"true\"></canvas>\r\n      <div id=\"buttonBar\">\r\n        <img id=\"ico_flip\" src=\"../assets/logo/flip-ico.png\" [hidden]=\"!showCam\"/>\r\n        <!--<button disabled id=\"flip-btn\" [hidden]=\"!showCam\">\r\n          Flip Camera\r\n        </button>-->\r\n        <img id=\"ico_photo\" src=\"../assets/logo/photo-ico2.png\" (click)=\"capture()\" [hidden]=\"!showCam\">\r\n        <img id=\"ico_close\" src=\"../assets/logo/close-ico2.png\" (click)=\"showCam=false\" [hidden]=\"!showCam\"/>\r\n        <!-- <button id =\"camClose-btn\" (click)=\"showCam=false\" [hidden]=\"!showCam\">\r\n           Close Camera\r\n         </button>-->\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <button id =\"camOpen-btn\" (click)=\"showCam=true\" [hidden]=\"!!showCam\">\r\n      Open Camera\r\n    </button>\r\n\r\n\r\n\r\n  </div>\r\n  <div id=\"app\">\r\n    <div><video #video id=\"video\" width=\"640\" height=\"480\" autoplay [hidden]=true></video></div>\r\n    <!--<div><button  id=\"snap\" (click)=\"capture()\" [hidden]=\"!showCam\">Snap Photo</button></div>-->\r\n    <!--<canvas #canvas id=\"canvas\" width=\"640\" height=\"480\"></canvas>-->\r\n    <ul>\r\n      <li *ngFor=\"let c of captures\">\r\n        <img src=\"{{ c }}\" height=\"500\" />\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/camera/camera.component.scss":
/*!**********************************************!*\
  !*** ./src/app/camera/camera.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #F0F0F0; }\n\n#app {\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px; }\n\n#video {\n  background-color: #000000; }\n\n#canvas {\n  height: 300px; }\n\n#test-canvas {\n  max-width: 100%;\n  bottom: 0; }\n\n#ico_photo {\n  width: 7%;\n  margin-right: 3%; }\n\n#ico_close {\n  width: 5%; }\n\n#ico_flip {\n  width: 5%;\n  margin-right: 3%; }\n\n#photo {\n  position: relative; }\n\n#buttonBar {\n  position: absolute;\n  max-width: 100%;\n  width: 47.5%;\n  bottom: 0;\n  left: 26.3%;\n  background-color: black;\n  opacity: 0.96; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtZXJhL0Q6XFxQcm9qZWN0c1xcR2l0aHViXFx3aW50ZXItc2Nob29sLWZyb250L3NyY1xcYXBwXFxjYW1lcmFcXGNhbWVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0UsYUFBYSxFQUFBOztBQUlmO0VBQ0UsZUFBZTtFQUNmLFNBQVEsRUFBQTs7QUFHVjtFQUNFLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxTQUFTLEVBQUE7O0FBRVg7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUTtFQUNSLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FtZXJhL2NhbWVyYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbn1cclxuI2FwcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuI3ZpZGVvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbiNjYW52YXMge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcblxyXG4jdGVzdC1jYW52YXN7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTowO1xyXG5cclxufVxyXG4jaWNvX3Bob3Rve1xyXG4gIHdpZHRoOiA3JTtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG59XHJcbiNpY29fY2xvc2V7XHJcbiAgd2lkdGg6IDUlO1xyXG59XHJcbiNpY29fZmxpcHtcclxuICB3aWR0aDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG4jcGhvdG97XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNidXR0b25CYXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB3aWR0aDogNDcuNSU7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGVmdDogMjYuMyU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3BhY2l0eTogMC45NjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/camera/camera.component.ts":
/*!********************************************!*\
  !*** ./src/app/camera/camera.component.ts ***!
  \********************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CameraComponent = /** @class */ (function () {
    function CameraComponent() {
        this.showCam = false;
        this.pictureWidth = 640;
        this.pictureHeight = 460;
        this.captures = [];
    }
    CameraComponent.prototype.ngOnInit = function () { };
    CameraComponent.prototype.searchForRearCamera = function () {
        return new Promise(function (resolve, reject) {
            //MediaStreamTrack.getSources seams to be supported only by Chrome
            if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
                resolve(null);
            }
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                var rearCameraIds = devices.filter(function (device) {
                    return (device.kind === 'videoinput');
                }).map(function (device) {
                    return device.deviceId;
                });
                if (rearCameraIds.length) {
                    resolve(rearCameraIds[0]);
                }
                else {
                    resolve(null);
                }
            })
                .catch(function (err) {
                console.log(err.name + ": " + err.message);
            });
        });
    };
    CameraComponent.prototype.setupVideo = function (rearCameraId) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            var videoSettings = {
                video: {
                    optional: [
                        {
                            width: { min: _this.pictureWidth }
                        },
                        {
                            height: { min: _this.pictureHeight }
                        }
                    ]
                }
            };
            //if rear camera is available - use it
            if (rearCameraId) {
                videoSettings.video.optional.push({
                    sourceId: rearCameraId
                });
            }
            navigator.mediaDevices.getUserMedia(videoSettings)
                .then(function (stream) {
                //Setup the video stream
                _this.video.nativeElement.srcObject = stream;
                _this.video.nativeElement.addEventListener("loadedmetadata", function (e) {
                    //get video width and height as it might be different than we requested
                    _this.pictureWidth = e.target.videoWidth;
                    _this.pictureHeight = e.target.videoHeight;
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
    };
    CameraComponent.prototype.ngAfterViewInit = function () {
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
        var _this = this;
        this.searchForRearCamera().then(function (id) {
            _this.setupVideo(id).then(function () {
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
        var ctx = this.canvas.nativeElement.getContext('2d');
        this.video.nativeElement.addEventListener("loadedmetadata", function (e) {
            _this.canvas.nativeElement.width = e.target.videoWidth;
            _this.canvas.nativeElement.height = e.target.videoHeight;
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
        this.video.nativeElement.addEventListener('play', function () {
            var $this = this;
            (function loop() {
                if (!$this.paused && !$this.ended) {
                    ctx.translate($this.width, 0);
                    ctx.scale(-1, 1);
                    ctx.drawImage($this, 0, 0);
                    ctx.setLineDash([0, 0]);
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = "yellow";
                    ctx.strokeRect(ctx.canvas.width / 4, 20, ctx.canvas.width / 2, ctx.canvas.height - 90);
                    ctx.lineWidth = 2;
                    ctx.setLineDash([10, 5]);
                    ctx.strokeRect(ctx.canvas.width / 4, ctx.canvas.height / 2 - 20, ctx.canvas.width / 2, 0);
                    ctx.setLineDash([0, 0]);
                    ctx.strokeStyle = "red";
                    ctx.strokeRect((ctx.canvas.width / 4) * 2 + 50, ctx.canvas.height / 2 + 10, 80, 100);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    setTimeout(loop, 1000 / 30); // drawing at 30fps
                }
            })();
        }, 0);
    };
    CameraComponent.prototype.capture = function () {
        var ctx = this.canvas.nativeElement.getContext('2d');
        this.photoCanvas.nativeElement.width = ctx.canvas.width / 2;
        this.photoCanvas.nativeElement.height = ctx.canvas.height - 90;
        var pctx = this.photoCanvas.nativeElement.getContext('2d');
        pctx.translate(pctx.canvas.width, 0);
        pctx.scale(-1, 1);
        this.photoCanvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, ctx.canvas.width / 4, 20, ctx.canvas.width / 2, ctx.canvas.height - 90, 0, 0, ctx.canvas.width / 2, ctx.canvas.height - 90);
        this.captures.push(this.photoCanvas.nativeElement.toDataURL('image/png'));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('video'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CameraComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CameraComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('test-canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CameraComponent.prototype, "testCanvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('photoCanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CameraComponent.prototype, "photoCanvas", void 0);
    CameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cam",
            template: __webpack_require__(/*! ./camera.component.html */ "./src/app/camera/camera.component.html"),
            styles: [__webpack_require__(/*! ./camera.component.scss */ "./src/app/camera/camera.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CameraComponent);
    return CameraComponent;
}());



/***/ }),

/***/ "./src/app/file-load-button/file-load-button.component.html":
/*!******************************************************************!*\
  !*** ./src/app/file-load-button/file-load-button.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"accent\" (click)=\"openDialog()\">\r\n  Загрузить фотографию\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/file-load-button/file-load-button.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/file-load-button/file-load-button.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtbG9hZC1idXR0b24vZmlsZS1sb2FkLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/file-load-button/file-load-button.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/file-load-button/file-load-button.component.ts ***!
  \****************************************************************/
/*! exports provided: FileLoadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoadButtonComponent", function() { return FileLoadButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _file_load_dialog_file_load_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-load-dialog/file-load-dialog.component */ "./src/app/file-load-dialog/file-load-dialog.component.ts");




var FileLoadButtonComponent = /** @class */ (function () {
    function FileLoadButtonComponent(dialog) {
        this.dialog = dialog;
    }
    FileLoadButtonComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_file_load_dialog_file_load_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FileLoadDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("The dialog was closed");
        });
    };
    FileLoadButtonComponent.prototype.ngOnInit = function () { };
    FileLoadButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-file-load-button",
            template: __webpack_require__(/*! ./file-load-button.component.html */ "./src/app/file-load-button/file-load-button.component.html"),
            styles: [__webpack_require__(/*! ./file-load-button.component.scss */ "./src/app/file-load-button/file-load-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], FileLoadButtonComponent);
    return FileLoadButtonComponent;
}());



/***/ }),

/***/ "./src/app/file-load-dialog/file-load-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/file-load-dialog/file-load-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <image-upload\r\n    buttonCaption=\"Выбрать фотогафию\"\r\n    dropBoxMessage=\"Или закиньте сюда\"\r\n    clearButtonCaption=\"Отчистить\"\r\n    [max]=\"1\"\r\n    (uploadStateChanged)=\"onUploadStateChanged($event)\"\r\n    (uploadFinished)=\"onUploadFinished($event)\"\r\n  >\r\n  </image-upload>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/file-load-dialog/file-load-dialog.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/file-load-dialog/file-load-dialog.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-area {\n  border: 2px dashed #ccc;\n  border-radius: 20px;\n  width: 480px;\n  font-family: sans-serif;\n  margin: 100px auto;\n  padding: 20px; }\n  .drop-area.highlight {\n    border-color: purple; }\n  p {\n  margin-top: 0; }\n  .my-form {\n  margin-bottom: 10px; }\n  #gallery {\n  margin-top: 10px; }\n  #gallery img {\n    width: 150px;\n    margin-bottom: 10px;\n    margin-right: 10px;\n    vertical-align: middle; }\n  .button {\n  display: inline-block;\n  padding: 10px;\n  background: #ccc;\n  cursor: pointer;\n  border-radius: 5px;\n  border: 1px solid #ccc; }\n  .button:hover {\n    background: #ddd; }\n  #fileElem {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1sb2FkLWRpYWxvZy9EOlxcUHJvamVjdHNcXEdpdGh1Ylxcd2ludGVyLXNjaG9vbC1mcm9udC9zcmNcXGFwcFxcZmlsZS1sb2FkLWRpYWxvZ1xcZmlsZS1sb2FkLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0VBTmY7SUFTSSxvQkFBb0IsRUFBQTtFQUl4QjtFQUNFLGFBQWEsRUFBQTtFQUdmO0VBQ0UsbUJBQW1CLEVBQUE7RUFFckI7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUdJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQTtFQU54QjtJQVNJLGdCQUFnQixFQUFBO0VBR3BCO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmlsZS1sb2FkLWRpYWxvZy9maWxlLWxvYWQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3AtYXJlYSB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDogNDgwcHg7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICYuaGlnaGxpZ2h0IHtcclxuICAgIGJvcmRlci1jb2xvcjogcHVycGxlO1xyXG4gIH1cclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLm15LWZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2dhbGxlcnkge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgJiBpbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgfVxyXG59XHJcbiNmaWxlRWxlbSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/file-load-dialog/file-load-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/file-load-dialog/file-load-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: FileLoadDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoadDialogComponent", function() { return FileLoadDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var FileLoadDialogComponent = /** @class */ (function () {
    function FileLoadDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    FileLoadDialogComponent.prototype.ngOnInit = function () { };
    FileLoadDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    FileLoadDialogComponent.prototype.ngAfterViewInit = function () { };
    FileLoadDialogComponent.prototype.onUploadStateChanged = function (e) {
        console.log("onUploadStateChanged", e);
    };
    FileLoadDialogComponent.prototype.onUploadFinished = function (e) {
        console.log("onUploadFinished", e);
    };
    FileLoadDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-file-load-dialog",
            template: __webpack_require__(/*! ./file-load-dialog.component.html */ "./src/app/file-load-dialog/file-load-dialog.component.html"),
            styles: [__webpack_require__(/*! ./file-load-dialog.component.scss */ "./src/app/file-load-dialog/file-load-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], FileLoadDialogComponent);
    return FileLoadDialogComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n  <div class=\"form__wrapper\">\r\n    <mat-form-field class=\"form__field\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Серия\"\r\n        name=\"series\"\r\n        [(ngModel)]=\"passport.series\"\r\n      />\r\n    </mat-form-field>\r\n    <mat-form-field class=\"form__field\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Номер\"\r\n        name=\"number\"\r\n        [(ngModel)]=\"passport.number\"\r\n      />\r\n    </mat-form-field>\r\n  </div>\r\n  <mat-form-field class=\"form__input_full-width\">\r\n    <textarea\r\n      matInput\r\n      placeholder=\"Паспорт выдан\"\r\n      name=\"placeIssue\"\r\n      [(ngModel)]=\"passport.placeIssue\"\r\n    ></textarea>\r\n  </mat-form-field>\r\n  <div class=\"form__wrapper\">\r\n    <mat-form-field class=\"form__field\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Дата выдачи\"\r\n        name=\"dateIssue\"\r\n        [(ngModel)]=\"passport.dateIssue\"\r\n      />\r\n      <!-- <input matInput [matDatepicker]=\"dateIssue\" placeholder=\"Дата выдачи\" />\r\n      <mat-datepicker-toggle\r\n        matSuffix\r\n        [for]=\"dateIssue\"\r\n      ></mat-datepicker-toggle>\r\n      <mat-datepicker #dateIssue></mat-datepicker> -->\r\n    </mat-form-field>\r\n    <mat-form-field class=\"form__field\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Код подразделения\"\r\n        name=\"departmentCode\"\r\n        [(ngModel)]=\"passport.departmentCode\"\r\n      />\r\n    </mat-form-field>\r\n  </div>\r\n  <mat-form-field class=\"form__input_full-width\">\r\n    <input\r\n      matInput\r\n      placeholder=\"Фамилия\"\r\n      name=\"lastName\"\r\n      [(ngModel)]=\"passport.lastName\"\r\n    />\r\n  </mat-form-field>\r\n  <mat-form-field class=\"form__input_full-width\">\r\n    <input\r\n      matInput\r\n      placeholder=\"Имя\"\r\n      name=\"firstName\"\r\n      [(ngModel)]=\"passport.firstName\"\r\n    />\r\n  </mat-form-field>\r\n  <mat-form-field class=\"form__input_full-width\">\r\n    <input\r\n      matInput\r\n      placeholder=\"Отчество\"\r\n      name=\"secondName\"\r\n      [(ngModel)]=\"passport.secondName\"\r\n    />\r\n  </mat-form-field>\r\n  <div class=\"form__wrapper\">\r\n    <mat-form-field class=\"form__field\">\r\n      <input matInput placeholder=\"Пол\" name=\"sex\" [(ngModel)]=\"passport.sex\" />\r\n\r\n      <!-- <mat-select placeholder=\"Пол\">\r\n        <mat-option [value]=\"0\">ЖЕН.</mat-option>\r\n        <mat-option [value]=\"1\">МУЖ</mat-option>\r\n      </mat-select> -->\r\n    </mat-form-field>\r\n    <mat-form-field class=\"form__field\">\r\n      <input\r\n        matInput\r\n        placeholder=\"Дата рождения\"\r\n        name=\"birthDate\"\r\n        [(ngModel)]=\"passport.birthDate\"\r\n      />\r\n      <!-- <input matInput [matDatepicker]=\"birthDate\" placeholder=\"Дата рождения\" />\r\n      <mat-datepicker-toggle\r\n        matSuffix\r\n        [for]=\"birthDate\"\r\n      ></mat-datepicker-toggle> -->\r\n      <mat-datepicker #birthDate></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <mat-form-field class=\"form__input_full-width\">\r\n    <textarea\r\n      matInput\r\n      placeholder=\"Место рождения\"\r\n      name=\"birthPlace\"\r\n      [(ngModel)]=\"passport.birthPlace\"\r\n    ></textarea>\r\n  </mat-form-field>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/form/form.component.scss":
/*!******************************************!*\
  !*** ./src/app/form/form.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  padding: 5px;\n  min-width: 150px;\n  width: 100%; }\n\n.form__input_full-width {\n  width: 100%; }\n\n.form__wrapper {\n  display: flex;\n  justify-content: space-between; }\n\n@media screen and (max-width: 400px) {\n    .form__wrapper {\n      display: block; }\n      .form__wrapper .form__field {\n        width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9EOlxcUHJvamVjdHNcXEdpdGh1Ylxcd2ludGVyLXNjaG9vbC1mcm9udC9zcmNcXGFwcFxcZm9ybVxcZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUU5QjtJQUpGO01BS0ksY0FBYyxFQUFBO01BTGxCO1FBT00sV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtX19pbnB1dF9mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm1fX3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAmIC5mb3JtX19maWVsZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _passport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../passport */ "./src/app/passport.ts");
/* harmony import */ var _passport_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passport.service */ "./src/app/passport.service.ts");




var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.passport = new _passport__WEBPACK_IMPORTED_MODULE_2__["Passport"]();
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        _passport_service__WEBPACK_IMPORTED_MODULE_3__["PassportService"].getPassport().subscribe(function (passport) { return (_this.passport = passport); });
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form",
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/passport.service.ts":
/*!*************************************!*\
  !*** ./src/app/passport.service.ts ***!
  \*************************************/
/*! exports provided: PassportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassportService", function() { return PassportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passport */ "./src/app/passport.ts");




var PassportService = /** @class */ (function () {
    function PassportService() {
    }
    PassportService.setPassport = function (passport) {
        this.passport.next(passport);
    };
    PassportService.getPassport = function () {
        return this.passport;
    };
    PassportService.passport = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new _passport__WEBPACK_IMPORTED_MODULE_3__["Passport"]());
    PassportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PassportService);
    return PassportService;
}());



/***/ }),

/***/ "./src/app/passport.ts":
/*!*****************************!*\
  !*** ./src/app/passport.ts ***!
  \*****************************/
/*! exports provided: Passport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Passport", function() { return Passport; });
var Passport = /** @class */ (function () {
    function Passport() {
    }
    return Passport;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Github\winter-school-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map