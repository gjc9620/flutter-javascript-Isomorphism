'use strict';
const dart_sdk = require('dart_sdk');
const core = dart_sdk.core;
const convert = dart_sdk.convert;
const _js_helper = dart_sdk._js_helper;
const _interceptors = dart_sdk._interceptors;
const dart = dart_sdk.dart;
const dartx = dart_sdk.dartx;
var dart2js = Object.create(dart.library);
var $_get = dartx._get;
var $add = dartx.add;
var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
var dynamicAnddynamicToNullN = () => (dynamicAnddynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
var JSArrayOfMapLOfStringL$ObjectL = () => (JSArrayOfMapLOfStringL$ObjectL = dart.constFn(_interceptors.JSArray$(MapLOfStringL$ObjectL())))();
const CT = Object.create(null);
dart2js.returnValue = function returnValue(v) {
  return convert.jsonEncode(new (IdentityMapOfStringL$dynamic()).from(["data", v]));
};
dart2js.getArg = function getArg(v) {
  return convert.jsonDecode(core.String.as(v));
};
dart2js.foo = function foo(arg) {
  let args = MapLOfStringL$dynamic().as(dart2js.getArg(arg));
  let n = intL().as(args[$_get]("n"));
  let m = intL().as(args[$_get]("m"));
  return dart2js.returnValue(dart.notNull(n) + dart.notNull(m));
};
dart2js.foo2 = function foo2() {
  return dart2js.returnValue(dart2js.scores);
};
dart2js.changeList = function changeList(arg) {
  let args = MapLOfStringL$dynamic().as(dart2js.getArg(arg));
  let list = args[$_get]("list");
  let newList = JSArrayOfObjectL().of([]);
  dart.dsend(list, 'forEach', [dart.fn((key, val) => {
      newList[$add](dart.dsend(dart.dload(val, 'count'), '*', [2]));
    }, dynamicAnddynamicToNullN())]);
  return dart2js.returnValue(newList);
};
dart.defineLazy(dart2js, {
  /*dart2js.scores*/get scores() {
    return JSArrayOfMapLOfStringL$ObjectL().of([new (IdentityMapOfStringL$ObjectL()).from(["score", 40]), new (IdentityMapOfStringL$ObjectL()).from(["score", 80]), new (IdentityMapOfStringL$ObjectL()).from(["score", 100, "overtime", true, "special_guest", null])]);
  },
  set scores(_) {}
}, true);
dart.trackLibraries("dart2js", {
  "org-dartlang-app:/dart2js.dart": dart2js
}, {
}, null);
// Exports:
exports.dart2js = dart2js;

//# sourceMappingURL=dart2js.js.map
