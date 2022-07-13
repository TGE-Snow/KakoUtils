export declare global {
  /**
   * 判断是否数组
   * @param str
   */
  function isArray(str: any): boolean;

  /**
   * 判断是否小数
   * @param str
   */
  function isFloat(str: any): boolean;

  /**
   * 判断是否整数
   * @param str
   */
  function isInteger(str: any): boolean;

  /**
   * 判断是否方法
   * @param str
   */
  function isFunction(str: any): boolean;

  /**
   * 判断是否 Boolean 对象
   * @param str
   */
  function isBoolean(str: any): boolean;

  /**
   * 判断是否 String 对象
   * @param str
   */
  function isString(str: any): boolean;

  /**
   * 判断是否 Number 对象
   * @param str
   */
  function isNumber(str: any): boolean;

  /**
   * 判断是否 RegExp 对象
   * @param str
   */
  function isRegExp(str: any): boolean;

  /**
   * 判断是否 Object 对象
   * @param str
   */
  function isObject(str: any): boolean;

  /**
   * 判断是否是一个对象
   * @param str
   */
  function isPlainObject(str: any): boolean;

  /**
   * 判断是否 Date 对象
   * @param val 值
   */
  function isDate(val: any): boolean;

  /**
   * 判断是否为 Null
   * @param val 值
   */
  function isNull(val: any): boolean;

  /**
   * 判断是否闰年
   * @param date 日期
   */
  function isLeapYear(date: Date | number | string): boolean;
  function isLeapYear(date: any): boolean;

  /**
   * 判断两个日期是否相同
   * @param date1 日期
   * @param date2 日期
   * @param format 对比格式
   */
  function isDateSame(
    date1: Date | number | string,
    date2: Date | number | string,
    format?: string | null
  ): boolean;
  function isDateSame(date1: any, date2: any, format?: string | null): boolean;

  /**
   * 浅拷贝/深拷贝
   * @param obj 对象
   */
  function clone<T>(obj: T): T;

  /**
   * 浅拷贝/深拷贝
   * @param obj 对象
   * @param deep 是否深拷贝
   */
  function clone<T>(obj: T, deep: boolean): T;

  /**
   * 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
   * @param callback 回调
   * @param wait 毫秒
   * @param options 可选参数
   */
  function debounce<C>(
    callback: (this: C, ...args: any[]) => any,
    wait: number
  ): (this: C, ...args: any[]) => any;

  /**
   * 查询数据
   * @param obj 源数据
   * @param iterate
   */
  async function find(obj: any, iterate: any): any;

  /**
   * 查询所有数据
   * @param obj 源数据
   * @param iterate
   */
  async function findAll(obj: any, iterate: any): any;

  /**
   * 查询数据索引
   * @param obj 源数据
   * @param iterate
   */
  async function findIndex(obj: any, iterate: any): any;

  /**
   * 查询所有数据索引
   * @param obj 源数据
   * @param iterate
   */
  async function findIndexAll(obj: any, iterate: any): any;

  /**
   * 返回当前时间戳
   */
  function now(): number;

  /**
   * 将日期转为时间戳
   * @param date 字符串/日期/时间戳
   * @param format 解析格式 yyyy MM dd HH mm ss SSS
   */
  function timestamp(
    date: string | Date | number,
    format?: string | null
  ): number;
  function timestamp(date: any, format?: string | null): number;

  /**
   * 任意格式字符串转为日期
   * @param str 字符串/日期/时间戳
   */
  function toStringDate(str: string | Date | number | null): Date;
  function toStringDate(str: any): Date;

  /**
   * 任意格式字符串转为日期
   * @param str 字符串/日期/时间戳
   * @param format 解析格式 yyyy MM dd HH mm ss SSS
   */
  function toStringDate(
    str: string | Date | number | null,
    format: string | null
  ): Date;
  function toStringDate(str: any, format: string | null): Date;

  /**
   * 日期格式化为任意格式字符串，转义符号 []
   * @param date 字符串/日期/时间戳
   */
  function toDateString(date: string | Date | number): string;
  function toDateString(date: any): string;

  /**
   * 日期格式化为任意格式字符串，转义符号 []
   * @param date 字符串/日期/时间戳
   * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
   */
  function toDateString(
    date: string | Date | number,
    format: string | null
  ): string;
  function toDateString(date: any, format: string | null): string;

  /**
   * 获取一个指定范围内随机数
   * @param min 最小值
   * @param max 最大值
   */
  function random(min: number, max: number): number;

  /**
   * 序列化查询参数
   * @param query 查询参数
   */
  function serialize(query: any): string;

  /**
   * 反序列化查询参数
   * @param str 字符串
   */
  function unserialize(str: string): any;
  function unserialize(str: any): any;
}
