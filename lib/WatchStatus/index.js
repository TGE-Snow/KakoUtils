const { NewGuid } = require("../Utils");
import { watch, watchEffect } from "vue";
import { isEmpty } from "../JudgeFunc";

class WatchStatus {
  id;
  ind;
  watchList;
  constructor() {
    this.id = NewGuid();
    this.ind = 0;
    this.watchList = {};
  }

  watch(id, source, cb) {
    this.watchList[`${this.id}${isEmpty(id) ? this.ind++ : id}`] = watch(
      () => source(),
      (newV, oldV, funcR) => cb(newV, oldV, funcR)
    );
  }

  watchEffect(id, cb) {
    this.watchList[`${this.id}${isEmpty(id) ? this.ind++ : id}`] = watchEffect(
      () => cb()
    );
  }

  stop() {
    Object.keys(this.watchList).forEach((v) => {
      this.watchList[v]();
    });
  }
}

module.exports = WatchStatus;
