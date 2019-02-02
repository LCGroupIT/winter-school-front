import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Passport } from "./passport";
import { MessageService } from "./message.service";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class BackEndService {
  url: string = "https://37.192.249.90:8894/api/values";

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  sendForm(formPassport: Passport) {
    const uploadUrl = this.url;
    const passport = {
      ...formPassport,
      birthDate: this.getStringDate(formPassport.birthDate),
      dateIssue: this.getStringDate(formPassport.dateIssue)
    };

    this.httpClient.post(uploadUrl, passport).subscribe(
      () => this.messageService.show("Данные отправлены"),
      err => {
        this.messageService.show("Невозможно отправить данные");
        console.log("Error unable to send", err);
      }
    );
  }

  getStringDate(formDate) {
    const date = moment(formDate);
    return `${date
      .date()
      .toString()
      .padStart(2, "0")}${date
      .month()
      .toString()
      .padStart(2, "0")}${date.year()}`;
  }
}
