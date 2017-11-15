import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Formpage1Service, IMessage1 } from './formpage1.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formpage1',
  templateUrl: './formpage1.component.html',
  styleUrls: ['./formpage1.component.css']
})
export class Formpage1Component implements OnInit {
  title = 'New PHP Email Example!';
  message: IMessage1 = {};
  nameForm: FormGroup;

  nameFormControl = new FormControl ('', [  Validators.required]);

  constructor(private appService: Formpage1Service) {
  }

  ngOnInit() {
    this.nameForm = new FormGroup ({
      vorname: new FormControl ('', {
        validators:  Validators.required,
        updateOn: 'change'
      }),
      nachname: new FormControl ('', {
        validators: (Validators.required),
        updateOn: 'change'
      }),
      email: new FormControl ('', {
        validators: (Validators.required, Validators.email),
        updateOn: 'change'
      }),
      anreise: new FormControl ((new Date()).toISOString(), {
        validators: Validators.required,
        updateOn: 'change'
      }),

      message: new FormControl('', {
        
        updateOn: 'change'
      })
    })
  }

  sendEmailTest(message: IMessage1) {
    console.log(message);
    console.log(message.vorname);
    console.log(message.message);
  }

  sendEmail(message: IMessage1) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    });
  }
}
