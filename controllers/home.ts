import express = require('express');
import { Request, Response } from 'express';

let router = express.Router();

let home = (req: Request, res: Response)=>{
    return res.status(200).send([{"welcome":"Welcome to this typescript powered express api!"}]);
};

export { home }
