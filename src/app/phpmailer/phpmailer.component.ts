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
  


/*   resForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    message : new FormControl(''),
    anreise : new FormControl('', [Validators.required]),
    abreise : new FormControl('', [Validators.required])

  }); */

  // email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private appService: PhpmailerService, dateAdapter: DateAdapter<NativeDateAdapter>, fb: FormBuilder) {
    dateAdapter.setLocale('de-DE');
    this.resForm = fb.group ({
        'message.name': [null, Validators.required],
        'message.email': [null, Validators.email],
        'message.message': [null],
        'message.anreise': [null, Validators.required],
        'message.abreise': [null, Validators.required]
    });
  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('PhpmailerComponent Success', res);
      // return 
    }, error => {
      console.log('PhpMailerComponent Error', error);
    })
  }
  /* getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.resForm.email.hasError('email') ? 'Not a valid email' :
            '';
  } */
}
