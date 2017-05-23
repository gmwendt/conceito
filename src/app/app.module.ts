import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, FirebaseApp } from 'angularfire2';

import { AppComponent }  from './app.component';

import { AuthService } from './providers/auth.service';
import { DataService } from './providers/data.service';

import { StorageService } from './services/storage';

import { DefaultHomeComponent } from './components/pages/default-home/default-home.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { SelectCountryList } from './components/layout/select_country_list';

import { MaterialModule } from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const firebaseConfig = {
    apiKey: "AIzaSyDbyzGqS8KfhXHcOb18Fltx-rLbC2cHgws",
    authDomain: "conceitofx.firebaseapp.com",
    databaseURL: "https://conceitofx.firebaseio.com",
    projectId: "conceitofx",
    storageBucket: "conceitofx.appspot.com",
    messagingSenderId: "203021034543"
  };

   const routes: Routes = [
   { path: '', component: DefaultHomeComponent },
   { path: 'home', component: HomePageComponent },
   { path: 'login', component: LoginPageComponent },
   { path: 'register', component: RegisterPageComponent}
 ];

@NgModule({
  imports: [ 
  	BrowserModule, 
    BrowserAnimationsModule,
  	FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, DefaultHomeComponent, HomePageComponent, LoginPageComponent, RegisterPageComponent, SelectCountryList ],
  providers: [AuthService, DataService, StorageService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
