import express = require('express');
import {Request, Response } from 'express';
import bodyParser = require('body-parser');
import path = require('path');
import * as home from './controllers/home';

//create express server
const app = express();

const approot = './';
const appport = process.env.Port || 8001;


//setup express for json parsing even with urlencoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(approot,'dist')));

//serve and respond to routes by api
app.get('/home', home.home);
app.get('/login',home.login);
//default fall through
// app.get('*', (req: Request, res: Response)=>{
//     res.sendFile(approot,'dist/index.html');
// });

app.listen(appport, ()=> console.log(`api is alive on port ${appport}`));
