import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../providers/auth.service';
import { DataService } from '../../../providers/data.service';

import { SelectCountryList } from '../../layout/select_country_list';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
	
	private m_email: string;
	private m_pass: string;
	private m_first_name: string;
	private m_last_name: string;
	private m_country: string;
	private m_alert: string;

	constructor(private authService: AuthService, private m_dataService: DataService, private router:Router) {
	}

	private register(): void {
		if (!this.check())
			return;

		this.authService.register(this.m_email, this.m_pass).then((result: firebase.User) => {
			result.sendEmailVerification();
			this.createUserData(result);
		}).catch((error:any) => {
			if(error)
				this.m_alert = error.message;
		});
	}

	private check(): boolean {

		if (!this.m_email && !this.m_first_name && !this.m_last_name && !this.m_pass && !this.m_country){
			this.m_alert = "Preencha todos os campos.";
			return false;
		}

		return true;
	}

	private createUserData(user: firebase.User) {
			this.m_dataService.writeNewUser(user.uid, this.m_first_name, this.m_last_name, this.m_email, this.m_country).then((result) => {
				this.router.navigate(['']);
				//redirect to successful new user
			}).catch((error) => {
				console.log(error);
			});
	}
}