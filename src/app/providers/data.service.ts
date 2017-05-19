import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class DataService {
	
	constructor() {
		// code...
	}

	writeNewUser(userId: string, name: string, lastname: string, email: string, country: string) {
		return firebase.database().ref('users/' + userId).set({
    	username: name,
    	lastname: lastname,
    	email: email,
    	country: country,
    	expDate: "null"
  	});
	}

	writeUserData(userId: string, key: string, value: any) {
		return firebase.database().ref('users/' + userId).child(key).set(value);
	}
}