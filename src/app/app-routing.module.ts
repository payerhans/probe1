import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Subpage1Component } from './subpage1/subpage1.component';
import { Formpage1Component } from './formpage1/formpage1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { SlidersComponent } from './sliders/sliders.component';
import { PhpmailerComponent } from './phpmailer/phpmailer.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'subpage1', component: Subpage1Component},
  { path: 'formpage1', component: Formpage1Component},
  //{ path: 'sliders', component: SlidersComponent},
  { path: 'phpmailer', component: PhpmailerComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
