'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const js = dart_sdk.js;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
var dart2js = Object.create(dart.library);
var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(StringL(), [])))();
var FunctionL = () => (FunctionL = dart.constFn(dart.legacy(core.Function)))();
const CT = Object.create(null);
dart2js.main = function main() {
  function foo() {
    return "bar!";
  }
  dart.fn(foo, VoidToStringL());
  js.context._set("foo", js.allowInterop(FunctionL(), foo));
};
dart.trackLibraries("dart2js", {
  "org-dartlang-app:/dart2js.dart": dart2js
}, {
}, null);
// Exports:
exports.dart2js = dart2js;

//# sourceMappingURL=dart2js.js.map
