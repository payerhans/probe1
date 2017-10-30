import { Component, OnInit } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-formpage1',
  templateUrl: './formpage1.component.html',
  styleUrls: ['./formpage1.component.css'],
 
})
export class Formpage1Component  {
  email = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(dateAdapter: DateAdapter<NativeDateAdapter>) {
    dateAdapter.setLocale('de-DE');
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
