import { LeaveDataService } from "./leaveDataService";


export class LeaveService
{
    private _data: LeaveDataService;

    constructor()
    {
        this._data = new LeaveDataService();
    }

    public setLeaveDayAmount(amountofdays: number)
    {
        
    }
}
