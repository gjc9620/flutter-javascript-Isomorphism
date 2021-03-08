'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
var dart2js = Object.create(dart.library);
dart._checkModuleNullSafetyMode(false);
var T = {
  _: () => T
};
var T$Eval = Object.assign({
  _: () => T$Eval
}, T);
var S = {
  _: () => S
};
var S$Eval = Object.assign({
  _: () => S$Eval
}, S);
const CT = Object.create({
  _: () => (C, CT)
});
var C = [];
var I = [];
dart2js.demo = function demo() {
  let str = "Hello";
  core.print(str);
  return str;
};
dart.trackLibraries("dart2js", {
  "org-dartlang-app:/dart2js.dart": dart2js
}, {
}, null);
// Exports:
exports.dart2js = dart2js;

//# sourceMappingURL=dart2js.js.map
