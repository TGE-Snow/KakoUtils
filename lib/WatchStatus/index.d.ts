/**
 * 监听管理类
 */
interface WatchStatus {
  id: String;
  ind: number;
  watchList: any;
  /**
   * watch监听
   * @param source
   * @param cb
   */
  watch(source: Function, cb: Function): any;
  /**
   * watchEffect监听
   * @param cb
   */
  watchEffect(cb: Function): any;
  /**
   * 取消所有监听
   */
  stop(): any;
}

declare var WatchStatus: WatchStatus;

export default WatchStatus;
