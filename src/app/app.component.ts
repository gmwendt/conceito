import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './providers/auth.service';

import { StorageService } from './services/storage';


import * as firebase from "firebase";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router, private storage: StorageService) {

  	// Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyDbyzGqS8KfhXHcOb18Fltx-rLbC2cHgws",
	    authDomain: "conceitofx.firebaseapp.com",
	    databaseURL: "https://conceitofx.firebaseio.com",
	    projectId: "conceitofx",
	    storageBucket: "conceitofx.appspot.com",
	    messagingSenderId: "203021034543"
	  };
	  
	  firebase.initializeApp(config);
  }

  ngOnInit() {
    // if (firebase.auth().currentUser)
    //   this.isLoggedIn = true;
    // else 
    //   this.isLoggedIn = false;
    this.storage.getAsync("loginToken").then((result)=>{
       console.log(result);
    });
  }

  private on_logged_event(result: any) {
    if (!result.uid)
      return;

    this.isLoggedIn = true;

    if (result.emailVerified)
      this.router.navigate(['home']);
    else {
      //route to not verified email
    }
  }

}
