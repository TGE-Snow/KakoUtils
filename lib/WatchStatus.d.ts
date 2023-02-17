/**
 * VUE监听管理类
 */
export declare interface WatchStatus {
  id: string;
  ind: number;
  watchList: any;
  /**
   * watch监听
   * @param id
   * @param source
   * @param cb
   */
  watch(source: Function, cb: Function, id?: string): any;
  /**
   * watchEffect监听
   * @param id
   * @param cb
   */
  watchEffect(cb: Function, id?: string): any;
  /**
   * 取消所有监听
   */
  stop(d: any): any;
}

declare module "./ctor" {
  WatchStatus;
}

export default WatchStatus;
