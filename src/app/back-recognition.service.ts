import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Passport } from "./passport";
import { Recognize } from "./recognize";

@Injectable({
  providedIn: "root"
})
export class BackRecognitionService implements Recognize {
  url = "https://37.192.249.90:8894/api/values/uploadfiles";

  constructor(private httpClient: HttpClient) {}

  recognize(passportFile) {
    const formData: FormData = new FormData();
    const uploadUrl = this.url;
    const headers = new HttpHeaders();

    formData.append("files", passportFile);

    headers.append("Access-Control-Allow-Methods", "GET, POST");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Content-Type", "multipart/form-data");

    return new Promise((resolve, reject) => {
      this.httpClient
        .post<Passport>(uploadUrl, formData, {headers})
        .subscribe(passport => resolve(passport));
    });
  }
}
