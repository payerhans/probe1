import { Component, OnInit } from '@angular/core';
import { PhpmailerService, IMessage } from './phpmailer.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

@Component({
  selector: 'app-phpmailer',
  templateUrl: './phpmailer.component.html',
  styleUrls: ['./phpmailer.component.css']
})
export class PhpmailerComponent implements OnInit {
  // resForm: FormGroup;
  title = 'Zimmerreservierung';
  message: IMessage = {};
  


  resForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    message : new FormControl(''),
    anreise : new FormControl('', [Validators.required]),
    abreise : new FormControl('', [Validators.required])

  });

  // email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private appService: PhpmailerService, dateAdapter: DateAdapter<NativeDateAdapter>) {
    dateAdapter.setLocale('de-DE');
   
   
  }
  ngOnInit() {
    this.message.name = this.resForm.get('name').value;
    this.message.email = this.resForm.get('email').value;
    this.message.message = this.resForm.get('message').value;
    this.message.anreise = this.resForm.get('anreise').value;
    this.message.abreise = this.resForm.get('abreise').value;
  }

  // zum testen
  sendEmailTest(message: IMessage, resForm: FormGroup) {
    this.message.name = this.resForm.get('name').value;
    this.message.email = this.resForm.get('email').value;
    this.message.message = this.resForm.get('message').value;
    this.message.anreise = this.resForm.get('anreise').value;
    this.message.abreise = this.resForm.get('abreise').value;
    console.log(message);
    console.log(this.resForm.get('name').value);
  }

  sendEmail(message: IMessage) {
    this.message.name = this.resForm.get('name').value;
    this.message.email = this.resForm.get('email').value;
    this.message.message = this.resForm.get('message').value;
    this.message.anreise = this.resForm.get('anreise').value;
    this.message.abreise = this.resForm.get('abreise').value;
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
