//guid
String.prototype.newGuid = function () {
  var guid = "";
  for (var i = 1; i <= 32; i++) {
    var n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if (i == 8 || i == 12 || i == 16 || i == 20) guid += "-";
  }
  return guid;
};

Date.prototype.addDays = function (days) {
  return new Date(this.getTime() + days * 60 * 60 * 24 * 100);
};

Number.prototype.toFixed = function (d) {
  return XEUtils.round(this, d);
};

String.prototype.toFixed = function (d) {
  return XEUtils.round(toNumber(this), d);
};

Number.prototype.ceil = function (d) {
  return XEUtils.ceil(this, d);
};

String.prototype.ceil = function (d) {
  return XEUtils.ceil(toNumber(this), d);
};

Number.prototype.floor = function (d) {
  return XEUtils.floor(this, d);
};

String.prototype.floor = function (d) {
  return XEUtils.floor(toNumber(this), d);
};

Number.prototype.commafy = function (d) {
  return XEUtils.commafy(this, d);
};

String.prototype.commafy = function (d) {
  return XEUtils.commafy(toNumber(this), d);
};
