export declare global {
  /*~ Here, declare things that go in the global namespace, or augment
   *~ existing declarations in the global namespace
   */
  interface String {
    newGuid(): String;
    toFixed(d: Number): Number;
    ceil(d: Number): Number;
    floor(d: Number): Number;
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
    }): Number;
  }
  interface Number {
    toFixed(d: Number): Number;
    ceil(d: Number): Number;
    floor(d: Number): Number;
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
    }): Number;
  }
  interface Date {
    addDays(days: Number): Date;
  }
}
