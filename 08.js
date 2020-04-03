// querystring  查询字符串
var querytstring=require("querystring")
/**
 * {
  unescapeBuffer: [Function: unescapeBuffer],
  unescape: [Function: qsUnescape],
  escape: [Function: qsEscape],
  stringify: [Function: stringify],
  encode: [Function: stringify],
  parse: [Function: parse],
  decode: [Function: parse]
}
 * 
 * 
 * */
//作用:解析和格式化url查询字符串
// parse实线反序列化      反序列化一个对象
// var data=querytstring.parse("username=tom&&password=123")
// console.log(data)
// stringify  序列化
// var data=querytstring.stringify({"username":"tom","password":"123"})
// username=tom&&password=123
// console.log(data)
// escape   对传入的字符串进行编码
// var data=querytstring.escape("name=2")
// console.log(data)
// unescape 解码
var data=querytstring.unescape("name%3D2")
console.log(data)