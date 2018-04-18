"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var home = function (req, res) {
    return res.status(200).send([{ "welcome": "Welcome to this typescript powered express api!" }]);
};
exports.home = home;
