/**
 * LeaveController that will respond to all requests for leave for any staff
 **/

import  express = require('express');
import { Request, Response } from "express";
import { LeaveDataService } from "../services/leaveDataService";



const dataService: LeaveDataService = new LeaveDataService();
//
export let index = async (req: Request, res: Response) => {
    let result = await dataService.getAllLeaves();
    return res.status(200).send(result);
}