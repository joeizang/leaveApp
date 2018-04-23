"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var home = __importStar(require("./controllers/home"));
var typeorm_1 = require("typeorm");
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
//default fall through
// app.get('*', (req: Request, res: Response)=>{
//     res.sendFile(approot,'dist/index.html');
// });
app.listen(appport, function () { return console.log("api is alive on port " + appport); });
//# sourceMappingURL=main.js.map