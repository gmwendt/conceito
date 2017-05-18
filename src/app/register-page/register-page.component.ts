import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
	
	private email: string;
	private pass: string;
	private first_name: string;
	private last_name: string;
	private alert: string;

	constructor(public authService: AuthService, private router:Router) {
	}

	private register(): void {

		if (!this.check())
			return;

		this.authService.register(this.email, this.pass).then((result: firebase.User) => {
			result.sendEmailVerification();
			this.router.navigate(['']);
			//redirect to successful new user
		}).catch((error:any) => {
			if(error)
				this.alert = error.message;
		});
	}

	private check(): boolean {

		if (!this.email && !this.first_name && !this.last_name && !this.pass){
			this.alert = "Preencha todos os campos.";
			return false;
		}

		return true;
	}
}