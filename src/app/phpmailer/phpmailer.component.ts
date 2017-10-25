import { Component, OnInit } from '@angular/core';
import { PhpmailerService, IMessage } from './phpmailer.service';

@Component({
  selector: 'app-phpmailer',
  templateUrl: './phpmailer.component.html',
  styleUrls: ['./phpmailer.component.css']
})
export class PhpmailerComponent {
  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private appService: PhpmailerService) {

  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}
