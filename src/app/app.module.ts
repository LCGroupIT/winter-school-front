import { APP_BASE_HREF } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ImageUploadModule } from "angular2-image-upload";
import { NgOpenCVModule } from "ng-open-cv";
import { NgxUiLoaderModule, NgxUiLoaderService } from "ngx-ui-loader";
import { ServiceWorkerModule } from "@angular/service-worker";

import { environment } from "../environments/environment";
import { MaterialModule } from "./material/material.module";

import { BackEndService } from "./back-end.service";
import { PassportService } from "./passport.service";
import { PassportFileService } from "./passport-file.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CameraComponent } from "./camera/camera.component";
import { ExampleImageComponent } from "./example-image/example-image.component";
import { ExampleImageButtonComponent } from "./example-image-button/example-image-button.component";
import { FormComponent } from "./form/form.component";
import { FileLoadButtonComponent } from "./file-load-button/file-load-button.component";
import { FileLoadDialogComponent } from "./file-load-dialog/file-load-dialog.component";
import { FrontRecognitionComponent } from "./front-recognition/front-recognition.component";
import { SelectRecognitionComponent } from "./select-recognition/select-recognition.component";

const openCVConfig = {
  scriptUrl: "assets/opencv/asm/3.4/opencv.js",
  usingWasm: false
};

const appRoutes: Routes = [{ path: "camera", component: CameraComponent }];

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    ExampleImageComponent,
    ExampleImageButtonComponent,
    FormComponent,
    FileLoadButtonComponent,
    FileLoadDialogComponent,
    FrontRecognitionComponent,
    SelectRecognitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ImageUploadModule.forRoot(),
    NgOpenCVModule.forRoot(openCVConfig),
    NgxUiLoaderModule.forRoot({ threshold: 100 }),
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: false }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  entryComponents: [FileLoadDialogComponent, ExampleImageComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.production ? "/winter-school-front" : "/"
    },
    BackEndService,
    NgxUiLoaderService,
    PassportService,
    PassportFileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
