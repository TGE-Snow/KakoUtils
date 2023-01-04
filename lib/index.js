"use strict";

import "./Prototype";

export * from "./Utils";
export * from "./JudgeFunc";
export * from "./WatchStatus";
export * from "./KMath";

var KMath = require("./KMath");
var WatchStatus = require("./WatchStatus");
var JudgeFunc = require("./JudgeFunc");
var Utils = require("./Utils");
const KakoUtils = { ...KMath, ...WatchStatus, ...Utils, ...JudgeFunc };

module.exports = KakoUtils;
