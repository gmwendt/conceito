import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, FirebaseApp } from 'angularfire2';

import { AppComponent }  from './app.component';

import { AuthService } from './providers/auth.service';

import { StorageService } from './services/storage';


import { DefaultHomeComponent } from './default-home/default-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

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
  	FormsModule,
    HttpModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    //firebase.initializeApp()
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, DefaultHomeComponent, LoginPageComponent, HomePageComponent, RegisterPageComponent ],
  providers: [AuthService, StorageService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
