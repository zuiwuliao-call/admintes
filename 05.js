var path=require("path")
// basename   返回path的最后一部分
// console.log(path.basename("aa/bb/cc/02.js"))
// //dirname 返回的是目录名
// console.log(path.dirname("aa/bb/cc/02.js"))
// // format  从对象中解析出路径字符串
// console.log(path.format({
// 	dir:"/aa",   //目录
// 	root:"/bb/",//目录
// 	base:"1.js" ,//文件名 =name+ext
// 	name:"aaaaa",
// 	ext:".css"//后缀名

// }))
// 注:
// 如果dir和root同时存在,root会被忽略
//parse  返回一个对象
// console.log(path.parse("/aa/bb/cc/2.js"))
// join 将所有的名称利用path.seq连起来,再通过normalize格式化
// console.log(path.join("/aa","/bb","./2.js"))
// normalize 格式化   规范化返回path
// console.log(path.normalize("/aa////////////////bb/../02.js"))
// extname  获取文件后缀名
// console.log(path.extname("/aa/bb/1.css"))
// resolve  获取文件的绝对路径
// console.log(path.resolve("aa","bb","cc","1/2"))
// relative  获取相对路径

var begin="c:/aa/b"
var end="c:/dd/v"
console.log(path.relative(begin,end))

// isAbsolute 检测是否为绝对路径
console.log(path.isAbsolute("/02.js"))