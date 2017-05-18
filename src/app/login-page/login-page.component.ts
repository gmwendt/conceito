import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';

import { StorageService } from '../services/storage';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  //styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  private email: string;
  private pass: string;
  private error_msg: string;

  @Output() loggedEvent: EventEmitter<any>;

  constructor(public authService: AuthService, private router: Router, private storage: StorageService) { 
    this.loggedEvent = new EventEmitter<any>();
  }

  ngOnInit() { 
    if (this.authService.getUser())
      this.router.navigate(['home']);
    else
      this.router.navigate(['']);
  }

  login(): void {
    try{
      this.authService.loginWithEmailAndPass(this.email, this.pass).then((result:any) => {

        this.storage.setOrUpdateAsync("loginToken", result.refreshToken);

        this.loggedEvent.emit(result);
      });
    }
    catch (error) {
      this.setErrorMsg(error.message);
    }
  }

  register(): void {
    this.router.navigate(['register']);
  }

  private setErrorMsg(msg: string): void {
    switch (msg) {
      case "auth/user-not-found":
        this.error_msg = "Usuário não encontrado";
        break;
      case "auth/wrong-password":
        this.error_msg = "Senha inválida";
        break;
      case "auth/argument-error":
        this.error_msg = "E-Mail inválido";

      default:
        this.error_msg = msg;
        break;
    }
  }
}