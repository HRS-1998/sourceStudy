
//  class Obj{
//     constructor(myName,myAge){
//       this.name=myName;
//          this.age=myAge
//     }
//     say(){

//     }
// }
// Obj.prototype.get=function(){
//     console.log(1);
// }
// Obj.prototype.put=function(){
//     console.log();
// }

// class Pname{
//     constructor(myName,myAge){
//       this.name=myName;
//          this.age=myAge
//     }
//     up(){
//        console.log('222')
//     }
// }
// Pname.prototype.pget=function(){
//     console.log(1);
// }
// Pname.prototype.pput=function(){
//     console.log();
// }

// let p=new Obj('zhangsan',13)
// p.__proto__=Pname

// console.log(Object.getOwnPropertyNames(Obj))
// console.log(Object.getOwnPropertyNames(Obj.prototype))
// console.log(Object.getOwnPropertyNames(p))


// console.log(Object.keys(Obj))
// console.log(Object.keys(Obj.prototype))
// console.log(Object.keys(p),p.prototype)


// let reg=/\+32/
// console.log(reg.test(32))

// console.log(Object.prototype.toString.call(process))

// let request=new Request('/url',{medthod:'POST'})
// console.log(request);
const response = await fetch("/service"),
  reader = response.body
    .pipeThrough(new TextDecoderStream())
    .getReader();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  console.log(value);
}


