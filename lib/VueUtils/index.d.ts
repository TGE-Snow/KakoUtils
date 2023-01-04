/**
 * VUE监听管理类
 */
export declare interface WatchStatus {
  id: String;
  ind: number;
  watchList: any;
  /**
   * watch监听
   * @param id
   * @param source
   * @param cb
   */
  watch(source: Function, cb: Function, id?: String): any;
  /**
   * watchEffect监听
   * @param id
   * @param cb
   */
  watchEffect(cb: Function, id?: String): any;
  /**
   * 取消所有监听
   */
  stop(): any;
}
