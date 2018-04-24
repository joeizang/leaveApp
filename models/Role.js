"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Role = /** @class */ (function () {
    function Role() {
        this.roleId = 0;
        this.roleName = "";
        this.description = "";
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Role.prototype, "roleId");
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50, unique: true })
    ], Role.prototype, "roleName");
    __decorate([
        typeorm_1.Column({ type: "varchar", length: "100" })
    ], Role.prototype, "description");
    Role = __decorate([
        typeorm_1.Entity()
    ], Role);
    return Role;
}());
exports.Role = Role;
