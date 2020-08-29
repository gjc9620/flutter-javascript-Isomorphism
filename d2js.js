const {dart2js} = require('./dart2js.js');


const getValue = (fun, arg = {})=>{
  const resStr = fun(JSON.stringify(arg));
  const res = JSON.parse(resStr)
  const v = res.data;
  console.log(v);
  return v
}

getValue(dart2js.foo, { n:1, m:2 })
getValue(dart2js.foo2)
getValue(dart2js.changeList, { list: [{ name: 'Tom', count: 10 }, { name: 'jack', count: 20 }] })






