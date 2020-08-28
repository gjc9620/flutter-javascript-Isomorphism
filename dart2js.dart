//  import './lib/Animal.dart';
// //  import 'dart:js';
//  import 'dart:convert';

 
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

//   var scores = [
//   {'score': 40},
//   {'score': 80},
//   {'score': 100, 'overtime': true, 'special_guest': null}
// ];

// var jsonText = jsonEncode(a);

//    print(111);
//    print(scores);

//      Object ret = { jsonText };
//      return  ret;
//  }   

import 'dart:js' as js;
    main() {
      String foo() {
        return "bar!";
      }

      js.context['foo'] = js.allowInterop(foo);
    }