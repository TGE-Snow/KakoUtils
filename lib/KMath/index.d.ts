declare interface KMath {
  /** 表示自然对数的底数（或称为基数），e，约等于 2.718 */
  readonly E: number;

  /** 表示 10 的自然对数，约为 2.302 */
  readonly LN10: number;

  /** 表示 2 的自然对数，约为 0.693 */
  readonly LN2: number;

  /** 表示以 2 为底数，e 的对数，约为 1.442 */
  readonly LOG2E: number;

  /** 表示以 10 为底数，e 的对数，约为 0.434 */
  readonly LOG10E: number;

  /** 表示一个圆的周长与直径的比例，约为 3.14159 */
  readonly PI: number;

  /** 表示 1/2 的平方根，约为 0.707 */
  readonly SQRT1_2: number;

  /** 表示 2 的平方根，约为 1.414 */
  readonly SQRT2: number;

  /**
   * 函数返回指定数字 “x“ 的绝对值
   * @param x
   */
  abs(x: number): number;

  /**
   * 返回一个数的反余弦值（单位为弧度）
   * @param x
   */
  acos(x: number): number;

  /**
   * 函数返回一个数的反双曲余弦值
   * @param x
   */
  acosh(x: number): number;

  /**
   * 返回一个数值的反正弦（单位为弧度）
   * @param x
   */
  asin(x: number): number;

  /**
   * 返回一个数值的反双曲正弦值
   * @param x
   */
  asinh(x: number): number;

  /**
   * 返回一个数值的反正切（以弧度为单位）
   * @param x
   */
  atan(x: number): number;

  /**
   * 返回从原点 (0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度 (弧度值)
   * @param y
   * @param x
   */
  atan2(y: number, x: number): number;

  /**
   * 返回一个数值反双曲正切值
   * @param x
   */
  atanh(x: number): number;

  /**
   * 返回任意数字的立方根。
   * @param x
   */
  cbrt(x: number): number;

  /**
   * 返回大于或等于一个给定数字的最小整数。
   * @param x
   */
  ceil(x: number): number;

  /**
   * 返回一个数字在转换成 32 无符号整形数字的二进制形式后，开头的 0 的个数，比如 1000000 转换成 32 位无符号整形数字的二进制形式后是 00000000000011110100001001000000, 开头的 0 的个数是 12 个，则 Math.clz32(1000000) 返回 12
   * @param x
   */
  clz32(x: number): number;

  /**
   * 返回一个数值的余弦值。
   * @param x
   */
  cos(x: number): number;

  /**
   * 返回数值的双曲余弦函数
   * @param x
   */
  cosh(x: number): number;

  /**
   * 返回 e^x，x 表示参数，e 是欧拉常数（Euler's constant），自然对数的底数
   * @param x
   */
  exp(x: number): number;

  /**
   * 返回 E^x - 1, 其中 x 是该函数的参数，E 是自然对数的底数 2.718281828459045
   * @param x
   */
  expm1(x: number): number;

  /**
   * 返回小于或等于一个给定数字的最大整数;可以理解为向下取整
   * @param x
   */
  floor(x: number): number;

  /**
   * 可以将任意的数字转换为离它最近的单精度浮点数形式的数字
   * @param x
   */
  fround(x: number): number;

  /**
   * 返回参数平方和的平方根。
   * @param values 计算平方根的值。
   *   如果没有传递参数，结果为+0。
   *   如果只有一个参数，结果是绝对值。
   *   如果任何参数为+∞或-∞，结果为+∞。
   *   如果任何参数为NaN，则结果为NaN。
   *   如果所有参数都是+0或−0，结果是+0。
   */
  hypot(...values: number[]): number;

  /**
   * 该函数将两个参数分别转换为 32 位整数，相乘后返回 32 位结果，类似 C 语言的 32 位整数相乘。
   * @param x
   * @param y
   */
  imul(x: number, y: number): number;

  /**
   * 返回一个数的自然对数
   * @param x
   */
  log(x: number): number;

  /**
   * 返回一个数字以 10 为底的对数
   * @param x
   */
  log10(x: number): number;

  /**
   * 返回一个数字加 1 后的自然对数 (底为 E), 既log(x+1)
   * @param x
   */
  log1p(x: number): number;

  /**
   * 返回一个数字以 2 为底的对数
   * @param x
   */
  log2(x: number): number;

  /**
   * 返回一组数中的最大值
   * @param values
   */
  max(...values: number[]): number;

  /**
   * 返回零个或更多个数值的最小值
   * @param values
   */
  min(...values: number[]): number;

  /**
   * 返回基数x的指数y次幂
   * @param x
   * @param y
   */
  pow(x: number, y: number): number;

  /**
   * 获取一个指定范围内随机数
   * @param {Number} minVal 最小值
   * @param {Number} maxVal 最大值
   * @return {Number}
   */
  random(minVal: number, maxVal: number): number;

  /**
   * 返回一个数字四舍五入后最接近的整数
   * @param x
   */
  round(x: any, digits?: number): number;

  /**
   * 返回一个数字的符号，指示数字是正数，负数还是零。
   * @param x
   */
  sign(x: number): number;

  /**
   * 返回一个数值的正弦值
   * @param x
   */
  sin(x: number): number;

  /**
   * 返回一个数字 (单位为角度) 的双曲正弦值
   * @param x
   */
  sinh(x: number): number;

  /**
   * 返回一个数的平方根
   * @param x
   */
  sqrt(x: number): number;

  /**
   * 返回一个数值的正切值
   * @param x
   */
  tan(x: number): number;

  /**
   * 返回一个数的双曲正切函数值
   * @param x
   */
  tanh(x: number): number;

  /**
   * 方法会将数字的小数部分去掉，只保留整数部分。
   * 如果x已经是一个整数，结果是x。
   * @param x
   */
  trunc(x: number): number;

  /**
   * 将数值四舍五入并格式化为固定小数位的字符串
   * @param {string|number} x 数值
   * @param {number} digits 小数保留位数
   */
  toFixed(x: any, digits?: number): String;

  /**
   * 转数值
   * @param { String/Number } str 数值
   *
   * @return {Number}
   */
  toNumber(num: number | string | null): number;
}

declare var KMath: KMath;

export default KMath;
