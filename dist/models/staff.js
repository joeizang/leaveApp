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
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Staff.prototype, "staffId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return organization_1.Organization; }, function (organization) { return organization.staff; }),
        __metadata("design:type", organization_1.Organization)
    ], Staff.prototype, "organization", void 0);
    __decorate([
        typeorm_1.Index(["firstname", "lastname"]),
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Staff.prototype, "firstname", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Staff.prototype, "lastname", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Staff.prototype, "middlename", void 0);
    __decorate([
        typeorm_1.Column({ type: "date" }),
        __metadata("design:type", Date)
    ], Staff.prototype, "birthdate", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Role_1.Role; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Role_1.Role)
    ], Staff.prototype, "role", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return leave_1.Leave; }, function (leave) { return leave.staff; }),
        __metadata("design:type", Array)
    ], Staff.prototype, "leave", void 0);
    __decorate([
        typeorm_1.Index(["staffIdNumber"]),
        typeorm_1.Column({ type: "varchar", length: 15 }),
        __metadata("design:type", String)
    ], Staff.prototype, "staffIdNumber", void 0);
    Staff = __decorate([
        typeorm_1.Entity()
    ], Staff);
    return Staff;
}());
exports.Staff = Staff;
//# sourceMappingURL=staff.js.map