"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var staff_1 = require("../models/staff");
var leaveType_1 = require("../models/leaveType");
var Leave = /** @class */ (function () {
    function Leave() {
        this.id = 0;
        this.leaveDays = 0;
        this.casualLeaveDays = 0;
        this.approval = false;
        this.endorsedBy = "";
        this.approvedBy = "";
        this.staff = new staff_1.Staff();
        this.leaveType = new leaveType_1.LeaveType();
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Leave.prototype, "id");
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column()
    ], Leave.prototype, "leaveDays");
    __decorate([
        typeorm_1.Column()
    ], Leave.prototype, "casualLeaveDays");
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column({ type: "boolean" })
    ], Leave.prototype, "approval");
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 })
    ], Leave.prototype, "endorsedBy");
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 })
    ], Leave.prototype, "approvedBy");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return staff_1.Staff; }, function (staff) { return staff.leave; })
    ], Leave.prototype, "staff");
    __decorate([
        typeorm_1.OneToOne(function (type) { return leaveType_1.LeaveType; })
    ], Leave.prototype, "leaveType");
    Leave = __decorate([
        typeorm_1.Entity()
    ], Leave);
    return Leave;
}());
exports.Leave = Leave;
