import XEUtils from "xe-utils";

export function isEmpty(cellValue) {
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

export function isArray(str) {
  return XEUtils.isArray(str);
}

export function isFloat(str) {
  var reg = /^-?\d{1,14}(\.\d{1,12})?$/;
  return reg.exec(str) != null;
}

export function isInteger(str) {
  var reg = /^-?\d{1,14}$/;
  return reg.exec(str) != null;
}

export function isFunction(str) {
  return XEUtils.isFunction(str);
}

export function isBoolean(str) {
  return str === true || str === false || str === "true" || str === "false";
}

export function isString(str) {
  return XEUtils.isString(str);
}

export function isNumber(str) {
  var reg = /^-?[0-9]+.?[0-9]*$/;
  return reg.exec(str) != null;
}

export function isRegExp(str) {
  return XEUtils.isRegExp(str);
}

export function isObject(str) {
  return XEUtils.isObject(str);
}

export function isPlainObject(str) {
  return XEUtils.isPlainObject(str);
}

export function isDate(val) {
  return XEUtils.isValidDate(val);
}

export function isNull(val) {
  return XEUtils.isNull(val);
}

export function isDateSame(date1, date2, format) {
  return XEUtils.isDateSame(date1, date2, format);
}

export async function find(obj, iterate) {
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

export async function findAll(obj, iterate) {
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

export async function findIndex(obj, iterate) {
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

export async function findIndexAll(obj, iterate) {
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

export function random(minVal, maxVal) {
  return XEUtils.random(minVal, maxVal);
}

export function serialize(query) {
  return XEUtils.serialize(query);
}

export function unserialize(str) {
  return XEUtils.unserialize(str);
}

export var GuidEmpty = "00000000-0000-0000-0000-000000000000";

export function NewGuid() {
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

export function KakoAdd() {
  return baseComputer(arguments, "add");
}

export function KakoSub() {
  return baseComputer(arguments, "sub");
}

export function KakoMul() {
  return baseComputer(arguments, "mul");
}

export function KakoDiv() {
  return baseComputer(arguments, "div");
}

export const getDateDiff = XEUtils.getDateDiff;

export const getDayOfMonth = XEUtils.getDayOfMonth;

export const getMonthWeek = XEUtils.getMonthWeek;

export const getYearWeek = XEUtils.getYearWeek;

export const getYearDay = XEUtils.getYearDay;

export const getDayOfYear = XEUtils.getDayOfYear;

export const getWhatDay = XEUtils.getWhatDay;

export const getWhatWeek = XEUtils.getWhatWeek;

export const getWhatYear = XEUtils.getWhatYear;

export const toDateString = XEUtils.toDateString;

export const toStringDate = XEUtils.toStringDate;

export const timestamp = XEUtils.timestamp;

export const now = XEUtils.now;

export const debounce = XEUtils.debounce;

export const throttle = XEUtils.throttle;

export const before = XEUtils.before;

export const after = XEUtils.after;

export const once = XEUtils.once;

export const clone = XEUtils.clone;

export const toJSONString = XEUtils.toJSONString;

export const toStringJSON = XEUtils.toStringJSON;

export const getType = XEUtils.getType;

export const isLeapYear = XEUtils.isLeapYear;

export const windowsLocat = XEUtils.locat;

export var cookie = XEUtils.cookie;
