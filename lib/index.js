("use strict");

// 核心
var KakoUtils = require("./ctor");

var KMath = require("./KMath");
var Utils = require("./Utils/index");
var WatchStatus = require("./WatchStatus");
var prototype = require("./Prototype/index");
prototype();

KakoUtils = Object.assign(KakoUtils, {
  KMath: KMath,
  WatchStatus: WatchStatus,
  ...Utils,
});
console.log(KakoUtils);
module.exports = KakoUtils;
