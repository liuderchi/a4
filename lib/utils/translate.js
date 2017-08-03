"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var translate = exports.translate = function translate(x, y) {
  return "translate(" + x + ", " + y + ")";
};
var translateX = exports.translateX = function translateX(x) {
  return translate(x, 0);
};
var translateY = exports.translateY = function translateY(y) {
  return translate(0, y);
};
exports.default = translate;