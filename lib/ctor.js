"use strict";

var {
  setupDefaults,
  arrayEach,
  each,
  isFunction,
  assign,
} = require("xe-utils");
var KakoUtils = function () {};

function mixin() {
  arrayEach(arguments, function (methods) {
    each(methods, function (fn, name) {
      KakoUtils[name] = isFunction(fn)
        ? function () {
            var result = fn.apply(KakoUtils.$context, arguments);
            KakoUtils.$context = null;
            return result;
          }
        : fn;
    });
  });
}

function setup(options) {
  return assign(setupDefaults, options);
}

KakoUtils.VERSION = "@VERSION";
KakoUtils.mixin = mixin;
KakoUtils.setup = setup;

module.exports = KakoUtils;
