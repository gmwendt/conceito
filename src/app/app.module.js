"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var auth_service_1 = require("./providers/auth.service");
var data_service_1 = require("./providers/data.service");
var storage_1 = require("./services/storage");
var default_home_component_1 = require("./components/pages/default-home/default-home.component");
var home_page_component_1 = require("./components/pages/home-page/home-page.component");
var login_page_component_1 = require("./components/pages/login-page/login-page.component");
var register_page_component_1 = require("./components/pages/register-page/register-page.component");
var select_country_list_1 = require("./components/layout/select_country_list");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
exports.firebaseConfig = {
    apiKey: "AIzaSyDbyzGqS8KfhXHcOb18Fltx-rLbC2cHgws",
    authDomain: "conceitofx.firebaseapp.com",
    databaseURL: "https://conceitofx.firebaseio.com",
    projectId: "conceitofx",
    storageBucket: "conceitofx.appspot.com",
    messagingSenderId: "203021034543"
};
var routes = [
    { path: '', component: default_home_component_1.DefaultHomeComponent },
    { path: 'home', component: home_page_component_1.HomePageComponent },
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
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MaterialModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [app_component_1.AppComponent, default_home_component_1.DefaultHomeComponent, home_page_component_1.HomePageComponent, login_page_component_1.LoginPageComponent, register_page_component_1.RegisterPageComponent, select_country_list_1.SelectCountryList],
        providers: [auth_service_1.AuthService, data_service_1.DataService, storage_1.StorageService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map