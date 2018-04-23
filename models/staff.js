"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var organization_1 = require("./organization");
var Role_1 = require("./Role");
var leave_1 = require("models/leave");
var Staff = /** @class */ (function () {
    function Staff() {
        this.staffId = 0;
        this.organization = new organization_1.Organization;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Staff.prototype, "staffId");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return organization_1.Organization; }, function (organization) { return organization.staff; })
    ], Staff.prototype, "organization");
    __decorate([
        typeorm_1.Index(["firstname", "lastname"]),
        typeorm_1.Column({ type: "varchar", length: 50 })
    ], Staff.prototype, "firstname");
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 })
    ], Staff.prototype, "lastname");
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 })
    ], Staff.prototype, "middlename");
    __decorate([
        typeorm_1.Column({ type: "date" })
    ], Staff.prototype, "birthdate");
    __decorate([
        typeorm_1.OneToOne(function (type) { return Role_1.Role; }),
        typeorm_1.JoinColumn()
    ], Staff.prototype, "role");
    __decorate([
        typeorm_1.OneToMany(function (type) { return leave_1.Leave; }, function (leave) { return leave.staff; })
    ], Staff.prototype, "leave");
    __decorate([
        typeorm_1.Index(["staffIdNumber"]),
        typeorm_1.Column({ type: "varchar", length: 15 })
    ], Staff.prototype, "staffIdNumber");
    Staff = __decorate([
        typeorm_1.Entity()
    ], Staff);
    return Staff;
}());
exports.Staff = Staff;
