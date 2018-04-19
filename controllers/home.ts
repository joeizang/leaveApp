import express = require('express');
import { Request, Response } from 'express';
import path = require('path');

let router = express.Router();

let home = (req: Request, res: Response)=>{
    return res.status(200).send([{"welcome":"Welcome to this typescript powered express api!"}]);
};

let login = (req: Request, res: Response) => {
    
    let dir = `current working directory ${__dirname}`;
    return res.status(200).send([{"message":dir}]);
};

export { home, login }
