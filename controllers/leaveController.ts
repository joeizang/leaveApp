/**
 * LeaveController that will respond to all requests for leave for any staff
 **/

import  express = require('express');
import { Request, Response } from "express";
import { LeaveDataService } from "../services/leaveDataService";
import { LeaveIndexApiModel } from 'ApiModels/leaveIndexApiModel';



const dataService: LeaveDataService = new LeaveDataService();
//
export let index = async (req: Request, res: Response) => {
    let result = await dataService.getAllLeaves();
    let viewresult = new Array<LeaveIndexApiModel>();

    result.forEach(leave => {
        let apmodel = 
        new LeaveIndexApiModel(leave.leaveType.name, `${leave.staff.firstname} ${leave.staff.lastname}`, leave.id);
        viewresult.push(apmodel);
    });


    return res.status(200).send(viewresult);
}