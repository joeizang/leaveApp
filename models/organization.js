"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var staff_1 = require("./staff");
var Organization = /** @class */ (function () {
    function Organization() {
        this.name = "";
        this.address = "";
        this.description = "";
        this.staff = new Array();
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Organization.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Organization.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Organization.prototype, "address");
    __decorate([
        typeorm_1.Column()
    ], Organization.prototype, "description");
    __decorate([
        typeorm_1.OneToMany(function (type) { return staff_1.Staff; }, function (staff) { return staff.organization; })
    ], Organization.prototype, "staff");
    Organization = __decorate([
        typeorm_1.Entity()
    ], Organization);
    return Organization;
}());
exports.Organization = Organization;
