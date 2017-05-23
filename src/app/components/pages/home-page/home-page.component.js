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
var auth_service_1 = require("../../../providers/auth.service");
var data_service_1 = require("../../../providers/data.service");
var HomePageComponent = (function () {
    function HomePageComponent(authService, m_dataService, router) {
        this.authService = authService;
        this.m_dataService = m_dataService;
        this.router = router;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getUser();
        if (this.user) {
            this.displayName = this.user.displayName;
        }
        else {
            this.displayName = "";
            this.router.navigate(['login']);
        }
    };
    HomePageComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['login']);
    };
    HomePageComponent.prototype.add30 = function () {
        var expDate = new Date(Date.now());
        expDate.setDate(expDate.getDate() + 30);
        this.m_dataService.writeUserData(this.user.uid, "expDate", expDate.toUTCString());
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    core_1.Component({
        selector: 'app-home-page',
        templateUrl: './home-page.component.html',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, data_service_1.DataService, router_1.Router])
], HomePageComponent);
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map