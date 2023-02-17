var XEUtils = require("xe-utils");
var { isEmpty } = require("../Utils");

function prototype() {
  Date.prototype.setDay = function (days) {
    return new Date(this.getTime() + days * 60 * 60 * 24 * 100);
  };

  Number.prototype.toFixed = function (d) {
    return XEUtils.round(this, d);
  };

  String.prototype.toFixed = function (d) {
    return XEUtils.round(XEUtils.toNumber(this), d);
  };

  Number.prototype.ceil = function (d) {
    return XEUtils.ceil(this, d);
  };

  String.prototype.ceil = function (d) {
    return XEUtils.ceil(XEUtils.toNumber(this), d);
  };

  Number.prototype.floor = function (d) {
    return XEUtils.floor(this, d);
  };

  String.prototype.floor = function (d) {
    return XEUtils.floor(XEUtils.toNumber(this), d);
  };

  Number.prototype.commafy = function (d) {
    return XEUtils.commafy(this, d);
  };

  String.prototype.commafy = function (d) {
    return XEUtils.commafy(XEUtils.toNumber(this), d);
  };

  Array.prototype.sum = function (iterate, context) {
    return XEUtils.sum(this, iterate, context);
  };

  Array.prototype.mean = function (iterate, context) {
    return XEUtils.mean(this, iterate, context);
  };

  Array.prototype.max = function (key) {
    const sumList = this;
    return XEUtils.max(sumList, key);
  };

  Array.prototype.min = function (key) {
    const sumList = this;
    return XEUtils.min(sumList, key);
  };

  Array.prototype.sortBy = function (fieldConfs, context) {
    const sumList = this;
    return XEUtils.orderBy(sumList, fieldConfs, context);
  };

  Array.prototype.forEachLast = function (callbackfn) {
    let listData = this;
    for (let index = listData.length - 1; index >= 0; index--) {
      callbackfn(listData[index], index, listData);
    }
  };

  Object.prototype.tryGetValue = function (key, value) {
    let objValue = this;
    const keyList = key.split(".");
    let retValue = null;

    for (const k of keyList) {
      if (!isEmpty(objValue[k])) {
        objValue = objValue[k];
      } else {
        return false;
      }
    }
    value = retValue;
    return true;
  };
}
module.exports = prototype;
