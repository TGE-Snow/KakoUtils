import { watch, watchEffect } from "vue";
import { isEmpty, NewGuid } from "../Utils";

export class WatchStatus {
  id;
  ind;
  watchList;
  constructor() {
    this.id = NewGuid();
    this.ind = 0;
    this.watchList = {};
  }

  watch(source, cb, id) {
    this.watchList[`${this.id}${isEmpty(id) ? this.ind++ : id}`] = watch(
      () => source(),
      (newV, oldV, funcR) => cb(newV, oldV, funcR)
    );
  }

  watchEffect(cb, id) {
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
