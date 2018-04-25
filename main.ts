import express = require('express');
import bodyParser = require('body-parser');
import path = require('path');
import * as home from './controllers/home';
import { createConnection } from 'typeorm';
import * as leavectrl from "./controllers/leaveController";
//create express server


//create app db connection.
 createConnection().then(async connection => {
    const app = express();
    console.log("DB online!");
    const approot = './';
    const appport = process.env.Port || 8001;
    //setup express for json parsing even with urlencoding
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(approot,'dist')));

    //serve and respond to routes by api
    app.get('/home', home.home);
    app.get('/login',home.login);

    //routes for leave
    app.get('/api/leaves', leavectrl.index);
    //default fall through
    // app.get('*', (req: Request, res: Response)=>{
    //     res.sendFile(approot,'dist/index.html');
    // });

    app.listen(appport, ()=> console.log(`api is alive on port ${appport}`));

 }).catch(error => console.log("Data Access Error : ", error));