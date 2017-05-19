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
var auth_service_1 = require("../../../providers/auth.service");
var storage_1 = require("../../../services/storage");
var LoginPageComponent = (function () {
    function LoginPageComponent(authService, router, storage) {
        this.authService = authService;
        this.router = router;
        this.storage = storage;
        this.loggedEvent = new core_1.EventEmitter();
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        if (this.authService.getUser())
            this.router.navigate(['home']);
        else
            this.router.navigate(['']);
    };
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        try {
            this.authService.loginWithEmailAndPass(this.email, this.pass).then(function (result) {
                //this.storage.setOrUpdateAsync("loginToken", result.refreshToken);
                _this.loggedEvent.emit(result);
            }).catch(function (error) {
                _this.setErrorMsg(error.code);
                console.log(error);
            });
        }
        catch (error) {
            this.setErrorMsg(error.code);
            console.log(error);
        }
    };
    LoginPageComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    LoginPageComponent.prototype.setErrorMsg = function (msg) {
        switch (msg) {
            case "auth/user-not-found":
                this.error_msg = "Usuário não encontrado";
                break;
            case "auth/invalid-email":
                this.error_msg = "E-Mail inválido";
                break;
            case "auth/wrong-password":
                this.error_msg = "Senha inválida";
                break;
            case "auth/argument-error":
                this.error_msg = "Argumentos inválidos";
                break;
            default:
                this.error_msg = msg;
                break;
        }
    };
    return LoginPageComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], LoginPageComponent.prototype, "loggedEvent", void 0);
LoginPageComponent = __decorate([
    core_1.Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, storage_1.StorageService])
], LoginPageComponent);
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=login-page.component.js.map