"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var home = require("./controllers/home");
var typeorm_1 = require("typeorm");
var leavectrl = require("./controllers/leaveController");
//create express server
var app = express();
var approot = './';
var appport = process.env.Port || 8001;
//setup express for json parsing even with urlencoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(approot, 'dist')));
//create app db connection.
var dbContext = typeorm_1.createConnection();
//serve and respond to routes by api
app.get('/home', home.home);
app.get('/login', home.login);
//routes for leave
app.get('/api/leaves', leavectrl.index);
//default fall through
// app.get('*', (req: Request, res: Response)=>{
//     res.sendFile(approot,'dist/index.html');
// });
app.listen(appport, function () { return console.log("api is alive on port " + appport); });
