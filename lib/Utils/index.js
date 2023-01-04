import XEUtils from "xe-utils";

export const Guid = {
  Empty: "00000000-0000-0000-0000-000000000000",
  NewGuid() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
      var n = Math.floor(Math.random() * 16.0).toString(16);
      guid += n;
      if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
    }
    return guid;
  },
};

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

export const cookie = XEUtils.cookie;
