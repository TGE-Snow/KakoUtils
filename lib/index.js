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
export const KakoUtils = { ...KMath, ...WatchStatus, ...Utils, ...JudgeFunc };

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = KakoUtils;
} else {
  if (typeof define === "function" && define.amd) {
    define([], function () {
      return KakoUtils;
    });
  } else {
    window.KakoUtils = KakoUtils;
  }
}
