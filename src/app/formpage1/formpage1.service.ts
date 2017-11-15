import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Time } from '@angular/common/src/i18n/locale_data_api';

export interface IMessage1 {
  vorname?: string;
  nachname?:string;
  email?: string;
  message?: string;
  anreise?: string;
  abreise?: string;
}

@Injectable()
export class Formpage1Service {
  private emailUrl = '../..//assets/mail2.php';

  constructor(private http: Http) {

  }

  sendEmail(message: IMessage1): Observable<IMessage1> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email got error', error);
        return Observable.throw(error);
      });
  }
}
