"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var home = require("./controllers/home");
//create express server
var app = express();
var approot = './';
var appport = process.env.Port || 8001;
//setup express for json parsing even with urlencoding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(approot, 'dist')));
//serve and respond to routes by api
app.get('/home', home.home);
app.get('/login', home.login);
//default fall through
// app.get('*', (req: Request, res: Response)=>{
//     res.sendFile(approot,'dist/index.html');
// });
app.listen(appport, function () { return console.log("api is alive on port " + appport); });
