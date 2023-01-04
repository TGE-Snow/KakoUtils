/**
 * 判断字符串,数组,对象是否为空或长度为0
 * @param cellValue
 */
export declare function isEmpty(cellValue: any): boolean;

/**
 * 判断是否数组
 * @param str
 */
export declare function isArray(str: any): boolean;

/**
 * 判断是否小数
 * @param str
 */
export declare function isFloat(str: any): boolean;

/**
 * 判断是否整数
 * @param str
 */
export declare function isInteger(str: any): boolean;

/**
 * 判断是否方法
 * @param str
 */
export declare function isFunction(str: any): boolean;

/**
 * 判断是否 Boolean 对象
 * @param str
 */
export declare function isBoolean(str: any): boolean;

/**
 * 判断是否 String 对象
 * @param str
 */
export declare function isString(str: any): boolean;

/**
 * 判断是否 Number 对象
 * @param str
 */
export declare function isNumber(str: any): boolean;

/**
 * 判断是否 RegExp 对象
 * @param str
 */
export declare function isRegExp(str: any): boolean;

/**
 * 判断是否 Object 对象
 * @param str
 */
export declare function isObject(str: any): boolean;

/**
 * 判断是否是一个对象
 * @param str
 */
export declare function isPlainObject(str: any): boolean;

/**
 * 判断是否 Date 对象
 * @param val 值
 */
export declare function isDate(val: any): boolean;

/**
 * 判断是否为 Null
 * @param val 值
 */
export declare function isNull(val: any): boolean;

/**
 * 判断是否闰年
 * @param date 日期
 */
export declare function isLeapYear(date: Date | number | string): boolean;
export declare function isLeapYear(date: any): boolean;

/**
 * 判断两个日期是否相同
 * @param date1 日期
 * @param date2 日期
 * @param format 对比格式
 */
export declare function isDateSame(
  date1: Date | number | string,
  date2: Date | number | string,
  format?: string | null
): boolean;
export declare function isDateSame(
  date1: any,
  date2: any,
  format?: string | null
): boolean;

/**
 * 浅拷贝/深拷贝
 * @param obj 对象
 */
export declare function clone<T>(obj: T): T;

/**
 * 浅拷贝/深拷贝
 * @param obj 对象
 * @param deep 是否深拷贝
 */
export declare function clone<T>(obj: T, deep: boolean): T;

/**
 * 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
 * @param callback 回调
 * @param wait 毫秒
 * @param options 可选参数
 */
export declare function debounce<C>(
  callback: (this: C, ...args: any[]) => any,
  wait: number
): (this: C, ...args: any[]) => any;

/**
 * 查询数据
 * @param obj 源数据
 * @param iterate
 */
export declare async function find(obj: any, iterate: any): any;

/**
 * 查询所有数据
 * @param obj 源数据
 * @param iterate
 */
export declare async function findAll(obj: any, iterate: any): any;

/**
 * 查询数据索引
 * @param obj 源数据
 * @param iterate
 */
export declare async function findIndex(obj: any, iterate: any): any;

/**
 * 查询所有数据索引
 * @param obj 源数据
 * @param iterate
 */
export declare async function findIndexAll(obj: any, iterate: any): any;

/**
 * 返回当前时间戳
 */
export declare function now(): number;

/**
 * 将日期转为时间戳
 * @param date 字符串/日期/时间戳
 * @param format 解析格式 yyyy MM dd HH mm ss SSS
 */
export declare function timestamp(
  date: string | Date | number,
  format?: string | null
): number;
export declare function timestamp(date: any, format?: string | null): number;

/**
 * 任意格式字符串转为日期
 * @param str 字符串/日期/时间戳
 */
export declare function toStringDate(str: string | Date | number | null): Date;
export declare function toStringDate(str: any): Date;

/**
 * 任意格式字符串转为日期
 * @param str 字符串/日期/时间戳
 * @param format 解析格式 yyyy MM dd HH mm ss SSS
 */
export declare function toStringDate(
  str: string | Date | number | null,
  format: string | null
): Date;
export declare function toStringDate(str: any, format: string | null): Date;

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 */
export declare function toDateString(date: string | Date | number): string;
export declare function toDateString(date: any): string;

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
 */
export declare function toDateString(
  date: string | Date | number,
  format: string | null
): string;
export declare function toDateString(date: any, format: string | null): string;

/**
 * 获取一个指定范围内随机数
 * @param min 最小值
 * @param max 最大值
 */
export declare function random(min: number, max: number): number;

/**
 * 序列化查询参数
 * @param query 查询参数
 */
export declare function serialize(query: any): string;

/**
 * 反序列化查询参数
 * @param str 字符串
 */
export declare function unserialize(str: string): any;
export declare function unserialize(str: any): any;
