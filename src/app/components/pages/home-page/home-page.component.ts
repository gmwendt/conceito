import * as firebase from "firebase";

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../providers/auth.service';
import { DataService } from '../../../providers/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  //styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private displayName: string;
  private user: firebase.User;

  constructor(private authService: AuthService, private m_dataService: DataService, private router: Router) {
  }

  ngOnInit() {

    this.user = this.authService.getUser();

    if (this.user) {
      this.displayName = this.user.displayName;
    }
    else {
      this.displayName = "";
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  add30() {
    var expDate = new Date(Date.now());
    expDate.setDate(expDate.getDate() + 30);
    this.m_dataService.writeUserData(this.user.uid, "expDate", expDate.toUTCString());
  }
}