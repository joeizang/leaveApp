"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leaveDataService_1 = require("./leaveDataService");
var LeaveService = /** @class */ (function () {
    function LeaveService() {
        this._data = new leaveDataService_1.LeaveDataService();
    }
    LeaveService.prototype.setLeaveDayAmount = function (amountofdays) {
    };
    return LeaveService;
}());
exports.LeaveService = LeaveService;
//# sourceMappingURL=leaveService.js.map