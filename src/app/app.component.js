"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./providers/auth.service");
var firebase = require("firebase");
var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map