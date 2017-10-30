import { Component, OnInit } from '@angular/core';
import { PhpmailerService, IMessage } from './phpmailer.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-phpmailer',
  templateUrl: './phpmailer.component.html',
  styleUrls: ['./phpmailer.component.css']
})
export class PhpmailerComponent {
  title = 'Ihre Reservierung';
  message: IMessage = {};
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private appService: PhpmailerService) {

  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('PhpmailerComponent Success', res);
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
