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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./providers/auth.service");
var storage_1 = require("./services/storage");
var firebase = require("firebase");
var AppComponent = (function () {
    function AppComponent(authService, router, storage) {
        this.authService = authService;
        this.router = router;
        this.storage = storage;
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
    AppComponent.prototype.ngOnInit = function () {
        // if (firebase.auth().currentUser)
        //   this.isLoggedIn = true;
        // else 
        //   this.isLoggedIn = false;
        //this.storage.getAsync("loginToken").then((result) => {
        //});
    };
    AppComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    AppComponent.prototype.on_logged_event = function (result) {
        if (!result.uid)
            return;
        this.isLoggedIn = true;
        //if (result.emailVerified)
        this.router.navigate(['home']);
        //else {
        //route to not verified email
        //}
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, storage_1.StorageService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map