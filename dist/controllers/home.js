"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var home = function (req, res) {
    return res.status(200).send([{ "welcome": "Welcome to this typescript powered express api!" }]);
};
exports.home = home;
var login = function (req, res) {
    var dir = "current working directory " + __dirname;
    return res.status(200).send([{ "message": dir }]);
};
exports.login = login;
//# sourceMappingURL=home.js.map