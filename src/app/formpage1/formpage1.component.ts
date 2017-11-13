import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators} from '@angular/forms';
import { Formpage1Service, IMessage1 } from './formpage1.service';

@Component({
  selector: 'app-formpage1',
  templateUrl: './formpage1.component.html',
  styleUrls: ['./formpage1.component.css']
})
export class Formpage1Component {
  title = 'New PHP Email Example!';
  message: IMessage1 = {};

  nameFormControl = new FormControl ('', [  Validators.required]);

  constructor(private appService: Formpage1Service) {

  }

  sendEmailTest(message: IMessage1) {
    console.log(message.name);
  }

  sendEmail(message: IMessage1) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    });
  }
}
