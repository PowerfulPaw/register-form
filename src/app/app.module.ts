import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {LoginFormComponent} from "./log-in-form/loginForm.component";
import { Step1 } from './step1/step1.component';
import { Step2 } from './step2/step2.component';
import { Summary } from './summary/summary.component';
import { ShareData } from './services/shareData.service';




const appRoutes: Routes = [
  { path: 'step1', component: Step1},
  { path: 'step2', component: Step2},
  { path: 'summary', component: Summary},
  { path: 'login', component: LoginFormComponent},
  { path: '', component: LoginFormComponent},
  { path: '**', component: LoginFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    Step1,
    Step2,
    Summary,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShareData],
  bootstrap: [AppComponent,]
})
export class AppModule { }
