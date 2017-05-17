import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './providers/auth.service';

import * as firebase from "firebase";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router) {

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

	  console.log(firebase.auth().currentUser);
	  if (firebase.auth().currentUser) {
		this.isLoggedIn = true;
		this.router.navigate(['']);
	  }
	  else {
	  	this.isLoggedIn = false;
	  	this.router.navigate(['login']);
	  }

    /*this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          console.log("Logged in");
          console.log(auth);
          this.router.navigate(['']);
        }
      }
    );*/
    
  }
}
