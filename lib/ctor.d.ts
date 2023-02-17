/**
 * 版本信息
 */
export const VERSION: string;

/**
 * 设置全局参数
 * @param options 全局参数
 */
export function setup(options: SetupDefaults): SetupDefaults;

/**
 * 将您自己的实用函数扩展到 KakoUtils
 * @param methods 函数集
 */
export function mixin(...methods: { [key: string]: any }[]): void;

export interface KakoUtilsMethods {
  VERSION: typeof VERSION;
  setup: typeof setup;
  mixin: typeof mixin;
  KMath: typeof KMath;
  WatchStatus: typeof WatchStatus;
  [propertys: string]: any;
}

/**
 * JavaScript 函数库、工具类
 */
declare var KakoUtils: KakoUtilsMethods;

export default KakoUtils;
