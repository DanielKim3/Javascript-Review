//javascript is very flexible
//flexible === dangerous
//added ECMAscript 5
'use strict';

//2. Variable, rw(read/write)
//let (added in ES6)

let globalName= 'global name';
{
let name = 'ellie';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var(don't ever use this)
//var hoisting (어디에 선언한거에 상관없이 항상 제일 위로 선언을 끌어 올려 주는것)
// has no block scope

//3. constant, r(read only)
//use const whenever possible
//한번 할당하면 절대 값이 바뀌지 않는다.
//favor immutable data type always for a few reasons:
// -security
//-thread safety
//-reduce human mistakes
//Note.
//Immutable data types: 데이터 자체를 변경하는것은 불가능 하다.
//Mutable data types: object 안에 데이터들을 변경 가능.

//4. Variable Types
//primitive, single item: number, string, boolean, null, undefined, symbol
//object, box container
//funtion, first-class function

const count= 17; //정수
const size = 17.1 // 소수점
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob =`hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//`` 백틱 기호를 이용하면 편하다.

//boolean
//false: 0, null, undefined, nan, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//sybol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//object, real-life object, data structure
const ellie ={name: 'ellie', age:20};
ellie.age=21;

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); 