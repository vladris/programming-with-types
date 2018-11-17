namespace WeakTyping {

const a: any = "hello world";
const b: any = 42;

console.log(a == b);

console.log("42" == b);

console.log("42" === b);

}