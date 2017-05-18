import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  
  constructor() { }

  loginWithGoogle() {
    
  // var provider = new firebase.auth.GoogleAuthProvider();
  
  // provider.addScope('https://www.googleapis.com/auth/plus.login');
  // provider.addScope('profile');
  // provider.addScope('email');
  
  // return firebase.auth().signInWithPopup(provider);
  }

  loginWithEmailAndPass(email: string, pass: string) {
    return firebase.auth().signInWithEmailAndPassword(email, pass);
  }

  logout() {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  getUser(): firebase.User {
    return firebase.auth().currentUser;
  }

  register(email: string, pass: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, pass);
  }

  sendVerificationEmail(): void {
    firebase.auth().currentUser.sendEmailVerification();
  }
}