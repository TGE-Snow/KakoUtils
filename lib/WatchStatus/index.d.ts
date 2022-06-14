/**
 * 监听管理类
 */
declare interface WatchStatus {
    private id: String;
    private ind: number;
    private watchList: any;
    /**
     * watch监听
     * @param source
     * @param cb
     */
    watch(source: Function, cb: Function): any
    /**
     * watchEffect监听
     * @param cb
     */
    watchEffect(cb: Function): any
    /**
     * 取消所有监听
     */
    stop(): any
}


export default WatchStatus