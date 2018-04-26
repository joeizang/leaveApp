import { LeaveDataService } from "../services/leaveDataService";
import { expect } from "chai";
import "mocha";
import { Leave } from "../models/leave";


describe("getAllLeaves function", () => {

    it("should return an array of leaves", async () => {
        const lds: LeaveDataService = new LeaveDataService();
        // act
        const result: Array<Leave> = await lds.getAllLeaves();

        // assert or Expect
        expect(result).to.be.an.instanceof(Array<Leave>());
    });
});

describe("getLeave function", () => {
    it("should return a leave", async () => {
        const lds: LeaveDataService = new LeaveDataService();
        const leave: Leave = new Leave();
        const result: Leave = await lds.getLeave(leave);
        expect(result).to.be.an.instanceof(Leave);
    });
});