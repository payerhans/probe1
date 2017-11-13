import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Formpage1Service, IMessage1 } from './formpage1.service';

@Component({
  selector: 'app-formpage1',
  templateUrl: './formpage1.component.html',
  styleUrls: ['./formpage1.component.css']
})
export class Formpage1Component {
  title = 'New PHP Email Example!';
  message: IMessage1 = {};

  constructor(private appService: Formpage1Service) {

  }

  sendEmail(message: IMessage1) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    });
  }
}
