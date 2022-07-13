import XEUtils from "xe-utils";
import { isEmpty } from "..";

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

export function isLeapYear(val) {
  return XEUtils.isLeapYear(val);
}

export function isDateSame(date1, date2, format) {
  return XEUtils.isDateSame(date1, date2, format);
}

export function isDateSame(obj, deep) {
  return XEUtils.isDateSame(obj, deep);
}

export function isDateSame(obj) {
  return XEUtils.isDateSame(obj);
}

export function debounce(callback, wait) {
  return XEUtils.debounce(callback, wait);
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

export function now() {
  return XEUtils.now();
}

export function timestamp(str, format) {
  return XEUtils.timestamp(str, format);
}

export function toStringDate(str, format) {
  return XEUtils.toStringDate(str, format);
}

export function toDateString(date, format) {
  return XEUtils.toDateString(str, format);
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
