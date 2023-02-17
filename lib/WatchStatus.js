const vue = require("vue");
var Utils = require("./Utils");

class WatchStatus {
  id = Utils.NewGuid();
  ind = 0;
  watchList = {};
  constructor() {}

  watch(source, cb, id) {
    this.watchList[`${this.id}${Utils.isEmpty(id) ? this.ind++ : id}`] =
      vue.watch(
        () => source(),
        (newV, oldV, funcR) => cb(newV, oldV, funcR)
      );
  }

  watchEffect(cb, id) {
    this.watchList[`${this.id}${Utils.isEmpty(id) ? this.ind++ : id}`] =
      vue.watchEffect(() => cb());
  }

  stop(id) {
    if (Utils.isEmpty(id)) {
      Object.keys(this.watchList).forEach((v) => {
        this.watchList[v]();
      });
    } else if (!Utils.isEmpty(this.watchList[id])) {
      this.watchList[id]();
    }
  }
}

module.exports = WatchStatus;
