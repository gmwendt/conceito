import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  
  constructor() { }

  loginWithGoogle() {
    
  var provider = new firebase.auth.GoogleAuthProvider();
  
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  provider.addScope('profile');
  provider.addScope('email');
  
  return firebase.auth().signInWithPopup(provider);
  }

  logout() {
    //return this.afa.auth.signOut();
    firebase.auth().signOut();
  }
}