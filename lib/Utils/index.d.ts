/**Guid方法 */
export declare const Guid = {
  /**Guid为空 */
  readonly Empty: String,
  /**生成Guid */
  NewGuid(): String
}
module.exports = Guid;

/**
 * 计算加法
 * @param {*} 数组,传参的方式
 * @returns number
 */
export declare function KakoAdd(): number;

/**
 * 计算减法
 * @param {*} 数组,传参的方式
 * @returns number
 */
export declare function KakoSub(): number;

/**
 * 计算乘法
 * @param {*} 数组,传参的方式
 * @returns number
 */
export declare function KakoMul(): number;

/**
 * 计算除法
 * @param {*} 数组,传参的方式
 * @returns number
 */
export declare function KakoDiv(): number;

/**
 * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
 * @param startDate 开始日期
 * @param endDate 结束日期或当期日期
 */
export declare function getDateDiff(startDate: string | Date | number, endDate: string | Date | number): DateDiffResult;

/**
 * 返回两个日期之间差距,如果结束日期小于开始日期 done 为 fasle
 * @param startDate 开始日期
 * @param endDate 结束日期或当期日期
 * @param rules 自定义计算规则
 */
export declare function getDateDiff(startDate: string | Date | number, endDate: string | Date | number, rules?: GetDateDiffRules): DateDiffResult;

/**
 * 返回某个月份的天数,可以指定前几个月或后几个月，默认当前
 * @param date 字符串/日期/时间戳
 * @param offset 月偏移量(默认0)、前几个月、后几个月
 */
export declare function getDayOfMonth(date: string | Date | number, offset: number): number;

/**
 * 返回某个月份的第几周
 * @param date 字符串/日期/时间戳
 * @param firstDay 周视图的起始天，默认星期一
 */
export declare function getMonthWeek(date: string | Date | number, firstDay?: FirstDayOfWeek): number;

/**
 * 返回某个年份的第几周
 * @param date 字符串/日期/时间戳
 * @param firstDay 从年初的星期几为起始开始周开始算，默认星期一
 */
export declare function getYearWeek(date: string | Date | number, firstDay?: FirstDayOfWeek): number;

/**
 * 返回某个年份的第几天
 * @param date 字符串/日期/时间戳
 */
export declare function getYearDay(date: string | Date | number): number;

/**
 * 返回某个年份的天数,可以指定前几个年或后几个年，默认当前
 * @param date 字符串/日期/时间戳
 * @param offset 年偏移量(默认0)、前几个年、后几个年
 */
export declare function getDayOfYear(date: string | Date | number, offset: number): Date;

/**
 * 返回前几天或后几天的日期
 * @param date 字符串/日期/时间戳
 * @param offset 天偏移量(默认0)、前几天、后几天
 */
export declare function getWhatDay(date: string | Date | number, offset: number): Date;

/**
 * 返回前几天或后几天的日期
 * @param date 字符串/日期/时间戳
 * @param offset 天偏移量(默认0)、前几天、后几天
 * @param mode 获取时间：日初(first)、日末(last)
 */
export declare function getWhatDay(date: string | Date | number, offset: number, mode: 'first' | 'last'): Date;

/**
 * 返回前几周或后几周的日期
 * @param date 字符串/日期/时间戳
 * @param offsetWeek 周偏移量(默认当前周)、前几周、后几周
 */
export declare function getWhatWeek(date: string | Date | number, offsetWeek?: FirstDayOfWeek): Date;

/**
 * 返回前几周或后几周的日期,可以指定星期几(0~6)，默认当前
 * @param date 字符串/日期/时间戳
 * @param offsetWeek 获取周偏移量（默认0当前周、前几周、后几周）
 * @param offsetDay 获取星期几（星期天0、星期一1、星期二2、星期三3、星期四4、星期五5、星期六6）
 * @param firstDay 周视图的起始天，默认星期一
 */
export declare function getWhatWeek(date: string | Date | number, offsetWeek?: number, offsetDay?: FirstDayOfWeek, firstDay?: FirstDayOfWeek): Date;

/**
 * 返回前几年或后几年的日期
 * @param date 字符串/日期/时间戳
 * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
 */
export declare function getWhatYear(date: string | Date | number, offset: number): Date;

/**
 * 返回前几年或后几年的日期，可以指定年初(first)、年末(last)、月份(0~11)，默认当前
 * @param date 字符串/日期/时间戳
 * @param year 年(默认当前年)、前几个年(数值)、后几个年(数值)
 * @param month 获取哪月：年初(first)、年末(last)、指定月份（0-11）
 */
export declare function getWhatYear(date: string | Date | number, offset: number, month: number | 'first' | 'last'): Date;

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
export declare function toDateString(date: string | Date | number, format: string | null): string;
export declare function toDateString(date: any, format: string | null): string;

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
 * @param options 可选参数
 */
export declare function toDateString(date: string | Date | number, format: string | null, options: ToDateStringOptions): string;
export declare function toDateString(date: any, format: string | null, options: ToDateStringOptions): string;

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
export declare function toStringDate(str: string | Date | number | null, format: string | null): Date;
export declare function toStringDate(str: any, format: string | null): Date;

/**
 * 将日期转为时间戳
 * @param date 字符串/日期/时间戳
 * @param format 解析格式 yyyy MM dd HH mm ss SSS
 */
export declare function timestamp(date: string | Date | number, format?: string | null): number;
export declare function timestamp(date: any, format?: string | null): number;

/**
 * 返回当前时间戳
 */
export declare function now(): number;

/**
 * 函数去抖；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则将重新计算执行时间
 * @param callback 回调
 * @param wait 毫秒
 * @param options 可选参数
 */
export declare function debounce<C>(callback: (this: C, ...args: any[]) => any, wait: number, options?: DebounceOptions): (this: C, ...args: any[]) => any;

/**
 * 节流函数；当被调用 n 毫秒后才会执行，如果在这时间内又被调用则至少每隔 n 秒毫秒调用一次该函数
 * @param callback 回调
 * @param wait 毫秒
 * @param options 可选参数
 */
export declare function throttle<C>(callback: (this: C, ...args: any[]) => any, wait: number, options?: ThrottleOptions): (this: C, ...args: any[]) => any;

/**
 * 创建一个函数, 调用次数小于(不等于) count 次之前执行回调并将所有结果记住后返回
 * @param count 次数
 * @param callback 回调
 * @param context 上下文
 */
export declare function before<C>(count: number, callback: (this: C, rests: any[], ...args: any[]) => any, context?: C): (this: any, ...args: any[]) => any;

/**
 * 创建一个函数, 调用次数大于(不等于) count 次之后执行回调并将所有结果记住后返回
 * @param count 次数
 * @param callback 回调
 * @param context 上下文
 */
export declare function after<C>(count: number, callback: (this: C, ...args: any[]) => any, context?: C): (this: any,...args: any[]) => any;

/**
 * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
 * @param callback 回调
 * @param context 上下文
 * @param params 额外的参数
 */
export declare function once<S, C>(callback: (this: S, ...args: any[]) => any, context?: C, ...params: any[]): (this: S | C, ...args: any[]) => any;

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
 * JSON 转字符串
 * @param obj 对象
 */
export declare function toJSONString(obj: any): string;

/**
 * 字符串转 JSON
 * @param str 字符串
 */
export declare function toStringJSON(str: string | null): any;
export declare function toStringJSON(str: any): any;

/**
 * 获取对象类型
 * @param obj 对象
 */
export declare function getType(obj: any): string;

/**
 * 判断是否闰年
 * @param date 日期
 */
export declare function isLeapYear(date: Date | number | string): boolean;
export declare function isLeapYear(date: any): boolean;

/**
 * 获取地址栏信息
 */
export declare function windowsLocat(): XEUrl;

/**
 * Cookie 操作函数
 * @param name 键/数组/对象
 * @param value 值
 * @param options 可选参数
 */
export declare function CookieFunc(name: string, value: any, options: CookieOptions): cookie;

export type cookie = typeof CookieFunc & {
  /**
   * 根据 name 判断 Cookie 是否存在
   * @param name 键
   */
  has(name: string): boolean;

  /**
   * 添加 Cookie
   * @param name 键
   * @param value 值
   * @param options 可选参数
   */
  set(name: string, value: any, options?: CookieOptions): cookie;

  /**
   * 根据 name 获取 Cookie
   * @param name 键
   */
  get(name: string): string;

  /**
   * 根据 name 删除 Cookie
   * @param name 键
   * @param options 可选参数
   */
  remove(name: string, options?: CookieOptions): number;

  /**
   * 获取 Cookie 所有键
   */
  keys(): any[];

  /**
   * 获取所有 Cookie
   */
  getJSON(): any;
}