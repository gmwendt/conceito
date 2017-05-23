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
var RegisterPageComponent = (function () {
    function RegisterPageComponent(authService, m_dataService, router) {
        this.authService = authService;
        this.m_dataService = m_dataService;
        this.router = router;
    }
    RegisterPageComponent.prototype.register = function () {
        var _this = this;
        if (!this.check())
            return;
        this.authService.register(this.m_email, this.m_pass).then(function (result) {
            result.sendEmailVerification();
            _this.createUserData(result);
        }).catch(function (error) {
            if (error)
                _this.m_alert = error.message;
        });
    };
    RegisterPageComponent.prototype.check = function () {
        if (!this.m_email && !this.m_first_name && !this.m_last_name && !this.m_pass && !this.m_country) {
            this.m_alert = "Preencha todos os campos.";
            return false;
        }
        return true;
    };
    RegisterPageComponent.prototype.createUserData = function (user) {
        var _this = this;
        this.m_dataService.writeNewUser(user.uid, this.m_first_name, this.m_last_name, this.m_email, this.m_country).then(function (result) {
            _this.router.navigate(['']);
            //redirect to successful new user
        }).catch(function (error) {
            console.log(error);
        });
    };
    return RegisterPageComponent;
}());
RegisterPageComponent = __decorate([
    core_1.Component({
        selector: 'app-register-page',
        templateUrl: './register-page.component.html',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, data_service_1.DataService, router_1.Router])
], RegisterPageComponent);
exports.RegisterPageComponent = RegisterPageComponent;
//# sourceMappingURL=register-page.component.js.map