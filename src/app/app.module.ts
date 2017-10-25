import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Subpage1Component } from './subpage1/subpage1.component';
import { Formpage1Component } from './formpage1/formpage1.component';
import { Footer1Component } from './footer1/footer1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SlidersComponent } from './sliders/sliders.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PhpmailerComponent } from './phpmailer/phpmailer.component';
import { PhpmailerService } from './phpmailer/phpmailer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Subpage1Component,
    Formpage1Component,
    Footer1Component,
    PageNotFoundComponent,
    SlidersComponent,
    NavigationComponent,
    PhpmailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [PhpmailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
