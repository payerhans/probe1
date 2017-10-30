import { Component, OnInit } from '@angular/core';
import { PhpmailerService, IMessage } from './phpmailer.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

@Component({
  selector: 'app-phpmailer',
  templateUrl: './phpmailer.component.html',
  styleUrls: ['./phpmailer.component.css']
})
export class PhpmailerComponent {
  resForm: FormGroup;
  title = 'Zimmerreservierung';
  message: IMessage = {};
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private appService: PhpmailerService, dateAdapter: DateAdapter<NativeDateAdapter>) {
    dateAdapter.setLocale('de-DE');
    
  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('PhpmailerComponent Success', res);
      // return 
    }, error => {
      console.log('PhpMailerComponent Error', error);
    })
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
}
