import { watch, watchEffect } from "vue";

function watchStatus() {
    this.id = newguid();
    this.ind = 0;
    this.watchList = {};
}

watchStatus.prototype.watch = function (
    source,
    cb
) {
    this.watchList[this.id + this.ind++] = watch(() => source(), (newV, oldV, funcR) => cb(newV, oldV, funcR))
}

watchStatus.prototype.watchEffect = function (
    cb
) {
    this.watchList[this.id + this.ind++] = watchEffect(() => cb())
}

watchStatus.prototype.stop = function () {
    Object.keys(this.watchList).forEach(v => {
        this.watchList[v]();
    })
};

module.exports = watchStatus