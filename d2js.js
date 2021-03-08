const {dart2js} = require('./dart2js.js');


const callDart = (fun, arg = {})=>{
  const resStr = fun(JSON.stringify(arg));
  const res = JSON.parse(resStr)
  const v = res.data;
  console.log(v);
  return v
} 


dart2js.demo();






