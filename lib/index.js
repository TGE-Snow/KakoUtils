"use strict";

import "./Prototype";

export * from "./Utils";
export * from "./VueUtils";
export * from "./KMath";

var KMath = require("./KMath");
var VueUtils = require("./VueUtils");
var Utils = require("./Utils");
const KakoUtils = { ...KMath, ...VueUtils, ...Utils };

export default KakoUtils;
