var XEUtils = require("xe-utils");

function isEmpty(cellValue) {
  if (cellValue === null || cellValue === undefined || cellValue === "") {
    return true;
  }
  if (cellValue instanceof Array) {
    return cellValue.length == 0;
  }
  if (cellValue instanceof Object) {
    return Object.keys(cellValue).length == 0;
  }
  if (typeof cellValue == "number" && isNaN(cellValue)) {
    return true;
  }
  return false;
}

function isArray(str) {
  return XEUtils.isArray(str);
}

function isFloat(str) {
  var reg = /^-?\d{1,14}(\.\d{1,12})?$/;
  return reg.exec(str) != null;
}

function isInteger(str) {
  var reg = /^-?\d{1,14}$/;
  return reg.exec(str) != null;
}

function isFunction(str) {
  return XEUtils.isFunction(str);
}

function isBoolean(str) {
  return str === true || str === false || str === "true" || str === "false";
}

function isString(str) {
  return XEUtils.isString(str);
}

function isNumber(str) {
  var reg = /^-?[0-9]+.?[0-9]*$/;
  return reg.exec(str) != null;
}

function isRegExp(str) {
  return XEUtils.isRegExp(str);
}

function isObject(str) {
  return XEUtils.isObject(str);
}

function isPlainObject(str) {
  return XEUtils.isPlainObject(str);
}

function isDate(val) {
  return XEUtils.isValidDate(val);
}

function isNull(val) {
  return XEUtils.isNull(val);
}

function isDateSame(date1, date2, format) {
  return XEUtils.isDateSame(date1, date2, format);
}

async function find(obj, iterate) {
  if (isEmpty(obj) || isPlainObject(obj)) {
    return null;
  }

  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];

    let ret = false;

    if (isFunction(iterate)) {
      ret = await iterate(element, index);
    } else {
      ret = iterate === element;
    }
    if (isBoolean(ret)) {
      if (ret) {
        return element;
      }
    } else {
      return ret;
    }
  }
}

async function findAll(obj, iterate) {
  if (isEmpty(obj) || isPlainObject(obj)) {
    return null;
  }

  let retlist = [];
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];

    let ret = false;

    if (isFunction(iterate)) {
      ret = await iterate(element, index);
    } else {
      ret = iterate === element;
    }
    if (isBoolean(ret)) {
      if (ret) {
        retlist.push(element);
      }
    } else {
      retlist.push(ret);
    }
  }
}

async function findIndex(obj, iterate) {
  if (isEmpty(obj) || isPlainObject(obj)) {
    return null;
  }

  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];

    let ret = false;

    if (isFunction(iterate)) {
      ret = await iterate(element, index);
    } else {
      ret = iterate === element;
    }
    if (isBoolean(ret)) {
      if (ret) {
        return index;
      }
    }
  }

  return -1;
}

async function findIndexAll(obj, iterate) {
  if (isEmpty(obj) || isPlainObject(obj)) {
    return null;
  }

  let retlist = [];
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];

    let ret = false;

    if (isFunction(iterate)) {
      ret = await iterate(element, index);
    } else {
      ret = iterate === element;
    }
    if (isBoolean(ret)) {
      if (ret) {
        retlist.push(index);
      }
    }
  }
}

function random(minVal, maxVal) {
  return XEUtils.random(minVal, maxVal);
}

function serialize(query) {
  return XEUtils.serialize(query);
}

function unserialize(str) {
  return XEUtils.unserialize(str);
}

const GuidEmpty = "00000000-0000-0000-0000-000000000000";

function NewGuid() {
  var guid = "";
  for (var i = 1; i <= 32; i++) {
    var n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
  }
  return guid;
}

/**
 * 基础计算方法
 * @param {*} baseList 计算参数
 * @param {*} op 计算方式 +:add -:sub *:mul /:div
 */
function baseComputer(baseList, op) {
  let computerType = "add";
  switch (op) {
    case "add":
      computerType = "add";
      break;
    case "sub":
      computerType = "subtract";
      break;
    case "mul":
      computerType = "multiply";
      break;
    case "div":
      computerType = "divide";
      break;
    default:
      console.error("op is the wrong parameter!");
      return;
  }

  let retNum = 0;
  if (baseList.length > 1) {
    retNum = baseList[0];
    for (let index = 1; index < baseList.length; index++) {
      retNum = XEUtils[computerType](retNum, baseList[index]);
    }
  } else if (baseList.length == 1) {
    retNum = baseList[0];
  }
  return retNum;
}

function KakoAdd() {
  return baseComputer(arguments, "add");
}

function KakoSub() {
  return baseComputer(arguments, "sub");
}

function KakoMul() {
  return baseComputer(arguments, "mul");
}

function KakoDiv() {
  return baseComputer(arguments, "div");
}

module.exports = {
  isEmpty,
  isArray,
  isFloat,
  isInteger,
  isFunction,
  isBoolean,
  isString,
  isNumber,
  isRegExp,
  isObject,
  isPlainObject,
  isDate,
  isNull,
  isDateSame,
  find,
  findAll,
  findIndex,
  findIndexAll,
  random,
  serialize,
  unserialize,
  GuidEmpty,
  NewGuid,
  KakoAdd,
  KakoSub,
  KakoMul,
  KakoDiv,
  getDateDiff: XEUtils.getDateDiff,
  getDayOfMonth: XEUtils.getDayOfMonth,
  getMonthWeek: XEUtils.getMonthWeek,
  getYearWeek: XEUtils.getYearWeek,
  getYearDay: XEUtils.getYearDay,
  getDayOfYear: XEUtils.getDayOfYear,
  getWhatDay: XEUtils.getWhatDay,
  getWhatWeek: XEUtils.getWhatWeek,
  getWhatYear: XEUtils.getWhatYear,
  toDateString: XEUtils.toDateString,
  toStringDate: XEUtils.toStringDate,
  timestamp: XEUtils.timestamp,
  now: XEUtils.now,
  debounce: XEUtils.debounce,
  throttle: XEUtils.throttle,
  before: XEUtils.before,
  after: XEUtils.after,
  once: XEUtils.once,
  clone: XEUtils.clone,
  toJSONString: XEUtils.toJSONString,
  toStringJSON: XEUtils.toStringJSON,
  getType: XEUtils.getType,
  isLeapYear: XEUtils.isLeapYear,
  locat: XEUtils.locat,
  cookie: XEUtils.cookie,
};
