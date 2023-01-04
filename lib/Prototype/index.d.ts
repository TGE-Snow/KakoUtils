export declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */
  interface String {
    /**
     * 将数值四舍五入
     * @param d 保留位数
     */
    toFixed(d: Number): Number;
    /**
     *  将数值向上舍入
     * @param d 保留位数
     */
    ceil(d: Number): Number;
    /**
     * 将数值向下舍入
     * @param d 保留位数
     */
    floor(d: Number): Number;
    /**
     *  字符切割分位分隔符、小数点
     * @param options {spaceNumber:分割位数,默认3;separator:分割符号;digits:保留位数;round:四舍五入;ceil:向上舍入;floor:向下舍入}
     */
    commafy(options: {
      /**
       * 分割位数，默认3
       */
      spaceNumber?: number;
      /**
       * 分隔符，默认','
       */
      separator?: string;
    }): String;
  }
  interface Number {
    /**
     * 将数值四舍五入
     * @param d 保留位数
     */
    toFixed(d: Number): Number;
    /**
     *  将数值向上舍入
     * @param d 保留位数
     */
    ceil(d: Number): Number;
    /**
     *  字符切割分位分隔符、小数点
     * @param options {spaceNumber:分割位数,默认3;separator:分割符号;digits:保留位数;round:四舍五入;ceil:向上舍入;floor:向下舍入}
     */
    floor(d: Number): Number;
    /**
     *  数值切割分位分隔符、小数点
     * @param options {spaceNumber:分割位数,默认3;separator:分割符号;digits:保留位数;round:四舍五入;ceil:向上舍入;floor:向下舍入}
     */
    commafy(options: {
      /**
       * 分割位数，默认3
       */
      spaceNumber?: number;
      /**
       * 分隔符，默认','
       */
      separator?: string;
      /**
       * 只对 number 类型有效，小数位数,默认null
       */
      digits?: number;
      /**
       * 只对 number 类型有效，四舍五入，默认true
       */
      round?: boolean;
      /**
       * 只对 number 类型有效，向上舍入
       */
      ceil?: boolean;
      /**
       * 只对 number 类型有效，向下舍入
       */
      floor?: boolean;
    }): String;
  }
  interface Date {
    /**
     * 添加天数
     * @param days
     */
    setDay(days: Number): Date;
  }
  interface Array {
    /**
     * 求和函数，将数值相加
     * @param iterate 回调
     * @param context 上下文
     */
    sum<T, C>(
      iterate?:
        | string
        | number
        | ((this: C, item: T, index: number, list: T[]) => number),
      context?: C
    ): number;

    /**
     * 求平均值函数
     * @param iterate 回调
     * @param context 上下文
     */
    mean<T>(
      iterate?: string | number | ((item: T, index: number, list: T[]) => any),
      context?: any
    ): number;

    /**
     * 获取最大值
     * @param key 指定键值或方法
     */
    max(key: String | Function): any;

    /**
     * 获取最小值
     * @param key 指定键值或方法
     */
    min(key: String | Function): any;

    /**
     * 将数组进行排序
     * @param fieldConfs 排序规则
     * @param context 上下文
     */
    sortBy<T, C>(fieldConfs: OrderByFieldConfs<T, C>, context?: C): T[];

    /**
     * 倒序循环
     * @param callbackfn  一个最多接受三个参数的函数。forEach对数组中的每个元素调用一次callbackfn函数。
     */
    forEachLast(
      callbackfn: (value: T, index: number, array: T[]) => void
    ): void;
  }
  interface Object {
    /**
     * 尝试获取数据(如果当前值为空则返回false)
     * @param key 字段名 可多层级使用(如:a.b.c;)
     * @param value 如果存在该字段则返回值
     * @returns boolean
     */
    tryGetValue(key, value): boolean;
  }
}
