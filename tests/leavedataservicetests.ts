import { LeaveDataService } from "../services/leaveDataService";
import { expect } from "chai";
import "mocha";
import { Leave } from "../models/leave";


describe('getAllLeaves function', () => {

    it('should return an array of leaves', async () => {
        const lds = new LeaveDataService();
        //Act
        const result = await lds.getAllLeaves();

        //Assert or Expect
        expect(result).to.be.an.instanceof(Array<Leave>());
    })
})