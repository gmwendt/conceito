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
var auth_service_1 = require("../providers/auth.service");
var RegisterPageComponent = (function () {
    function RegisterPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterPageComponent.prototype.register = function () {
        var _this = this;
        if (!this.check())
            return;
        this.authService.register(this.email, this.pass).then(function (result) {
            result.sendEmailVerification();
            _this.router.navigate(['']);
            //redirect to successful new user
        }).catch(function (error) {
            if (error)
                _this.alert = error.message;
        });
    };
    RegisterPageComponent.prototype.check = function () {
        if (!this.email && !this.first_name && !this.last_name && !this.pass) {
            this.alert = "Preencha todos os campos.";
            return false;
        }
        return true;
    };
    return RegisterPageComponent;
}());
RegisterPageComponent = __decorate([
    core_1.Component({
        selector: 'app-register-page',
        templateUrl: './register-page.component.html',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], RegisterPageComponent);
exports.RegisterPageComponent = RegisterPageComponent;
//# sourceMappingURL=register-page.component.js.map