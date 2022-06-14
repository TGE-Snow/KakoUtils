const { NewGuid } = require("../Guid");
import { watch, watchEffect } from "vue";

class WatchStatus {
    id;
    ind;
    watchList
    constructor() {
        this.id = NewGuid();
        this.ind = 0;
        this.watchList = {};
    }

    watch(source, cb) {
        
        this.watchList[`${this.id}${this.ind++}`] = watch(() => source(), (newV, oldV, funcR) => cb(newV, oldV, funcR));
    }

    watchEffect(cb) {
        this.watchList[`${this.id}${this.ind++}`] = watchEffect(() => cb());
    }

    stop() {
        Object.keys(this.watchList).forEach(v => {
            this.watchList[v]();
        });
    }
}

module.exports = WatchStatus