//  import './lib/Animal.dart';
// //  import 'dart:js';
import 'dart:convert';

//  dynamic aa;
//  Object b;

// void GGGGGGGGGDDDDDD(fun){
//   print(fun);
// }

//  main() {
//      print(11111111);
//      var a =new Animal('小黑狗', 20);
//      print(a);

//        print(111);
//   // //  var jsMap = JsObject.jsify({'a': 1, 'b': 2});
//   //  var jsMap = JsObject.jsify(a);

var scores = [
  {'score': 40},
  {'score': 80},
  {'score': 100, 'overtime': true, 'special_guest': null}
];

// var jsonText = jsonEncode(a);

//    print(111);
//    print(scores);

//      Object ret = { jsonText };
//      return  ret;
//  }

String returnValue(v) {
  return jsonEncode({'data': v});
}

Object getArg(v) {
  return jsonDecode(v);
}

String foo(arg) {
  Map<String, dynamic> args = getArg(arg);
  int n = args['n'];
  int m = args['m'];
  return returnValue(n + m);
}

String foo2() {
  return returnValue(scores);
}

String changeList(arg) {
  Map<String, dynamic> args = getArg(arg);
  var list = args['list'];

  List<Object> newList = new List();

  list.forEach((key, val) {
    newList.add(val.count * 2);
  });

  return returnValue(newList);
}
