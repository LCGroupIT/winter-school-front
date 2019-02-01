import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ImageUploadModule } from "angular2-image-upload";
import { NgOpenCVModule } from "ng-open-cv";
import { NgxUiLoaderModule, NgxUiLoaderService } from "ngx-ui-loader";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { CameraComponent } from "./camera/camera.component";
import { FileLoadButtonComponent } from "./file-load-button/file-load-button.component";
import { FileLoadDialogComponent } from "./file-load-dialog/file-load-dialog.component";
import { FrontRecognitionComponent } from "./front-recognition/front-recognition.component";
import { SelectRecognitionComponent } from "./select-recognition/select-recognition.component";

import { PassportService } from "./passport.service";
import { PassportFileService } from "./passport-file.service";
import { BackEndService } from "./back-end.service";

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";
import { MAT_DATE_LOCALE } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { APP_BASE_HREF } from "@angular/common";
import { MatSnackBarModule } from "@angular/material/snack-bar";

const openCVConfig = {
  scriptUrl: "assets/opencv/asm/3.4/opencv.js",
  usingWasm: false
};

const appRoutes: Routes = [{ path: "camera", component: CameraComponent }];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CameraComponent,
    FileLoadButtonComponent,
    FileLoadDialogComponent,
    FrontRecognitionComponent,
    SelectRecognitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: false }),
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    ImageUploadModule.forRoot(),
    NgOpenCVModule.forRoot(openCVConfig),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    NgxUiLoaderModule.forRoot({ threshold: 100 })
  ],
  entryComponents: [FileLoadDialogComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "ru-RU" },
    {
      provide: APP_BASE_HREF,
      useValue: environment.production ? "/winter-school-front" : "/"
    },
    PassportService,
    PassportFileService,
    NgxUiLoaderService,
    BackEndService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
