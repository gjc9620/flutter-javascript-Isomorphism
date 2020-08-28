var dart2js = Object.create(dart.library);
export { dart2js };
import { core, js, dart, dartx } from 'dart_sdk.js';
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

//# sourceMappingURL=dart2js.js.map
