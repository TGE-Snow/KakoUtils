import XEUtils from "xe-utils";

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