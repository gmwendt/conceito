"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var auth_service_1 = require("./providers/auth.service");
var login_page_component_1 = require("./login-page/login-page.component");
var home_page_component_1 = require("./home-page/home-page.component");
var register_page_component_1 = require("./register-page/register-page.component");
exports.firebaseConfig = {
    apiKey: "AIzaSyDbyzGqS8KfhXHcOb18Fltx-rLbC2cHgws",
    authDomain: "conceitofx.firebaseapp.com",
    databaseURL: "https://conceitofx.firebaseio.com",
    projectId: "conceitofx",
    storageBucket: "conceitofx.appspot.com",
    messagingSenderId: "203021034543"
};
var routes = [
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'login', component: login_page_component_1.LoginPageComponent },
    { path: 'register', component: register_page_component_1.RegisterPageComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            //AngularFireModule.initializeApp(firebaseConfig),
            //firebase.initializeApp()
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [app_component_1.AppComponent, login_page_component_1.LoginPageComponent, home_page_component_1.HomePageComponent, register_page_component_1.RegisterPageComponent],
        providers: [auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map