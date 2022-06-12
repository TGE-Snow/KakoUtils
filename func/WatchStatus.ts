import { watch, watchEffect } from "vue";
import Guid from "./Guid";


/**
 * 监听管理类
 */
declare interface WatchStatus {
    /**
     * watch监听
     * @param source
     * @param cb
     */
    watch(source: Function, cb: Function): any,
    /**
     * watchEffect监听
     * @param cb
     */
    watchEffect(cb: Function): any,
    /**
     * 取消所有监听
     */
    stop(): any
}

class WatchStatus {
    private id: String;
    private ind: number;
    private watchList: any;
    constructor() {
        this.id = Guid.NewGuid();
        this.ind = 0;
        this.watchList = {};
    }

    watch(source: Function, cb: Function) {
        this.watchList[`${this.id}${this.ind++}`] = watch(() => source(), (newV, oldV, funcR) => cb(newV, oldV, funcR));
    }

    watchEffect(cb: Function) {
        this.watchList[`${this.id}${this.ind++}`] = watchEffect(() => cb());
    }

    stop() {
        Object.keys(this.watchList).forEach(v => {
            this.watchList[v]();
        });
    }
}
export default WatchStatus