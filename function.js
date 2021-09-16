 //function
 //-fundemental building block in the program
 //-subprogram can be used multiple times
 //performs a task or calculates a value

 //1. Function declaration 함수선언
 //function name(param1, param2) {body...return}
 //one function === onething 하나의 함수는 한가지의 일만 할 수 있다.
 //naming: doSomething, command, verb
 //e.g createCardAndPoint -> createCard, createPoint
 //function is object in JS

 function printHello() {
     console.log('Hello');
 }
 printHello();

 function log(message){
     console.log(message);
 }
 log('Hello@');
 log(1234);

 //2. Parameters
 //premitive parameters: passed by value 메모리에 value가 그대로 저장되어 있기 때문에  value가 전달이 된다.
 //object parameters: passed by reference 메모리에 reference가 저장되어 진다. 레퍼런스가 전달.

 function changeName(obj){
     obj.name = 'coder';
 }
 const woojin= {name: 'woojin'};
 changeName(woojin);
 console.log(woojin)

 //3. Default parameters (added in ES6)
 function showMessage(message, from = 'unknown'){
     console.log(`${message} by ${from}`);
 }
 showMessage('Hi');

 //4. Rest parametes (added in ES6) 배열형태 전환
 function printAll(...args) {
     for(let i = 0; i < args.length; i++){
         console.log(args[i]);
     }

     args.forEach((arg) => console.log(arg));
 }
 printAll('dream', 'coding', 'woojin')

 //Local scope (밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.)
 let globalMesssage = 'global'; //global variable
 function printMessage(){
     let message = 'helllo'; //지역변수
     console.log(message); //local variable 안에서만 접근 가능
     console.log(globalMesssage);
 }
 printMessage();

 //6. Return a value
 function sum(a,b){
     return a+ b;
 }
 const result =sum(1,2); //3
 console.log(`sum: ${sum(1,2)}`);

 //7.Early return, earlt exit
 //bad
 function upgradeUser(user){
     if(user.point > 10) {
         //long upgrade logic...
     }
 }

 //good
 function upgradeUser(user){
     if(user.point <= 10) {
         return;
     }
     //long upgrade logic...
 }

 //First=class function
 //function are treated like any other variable 
 //can be assigned as a value to variable 변수와 마찬가지로 변수에 할당이 된다
 //can be passed as an argument to other functions. 파라미터로 전달이 된다.
 //can be returned by another function 리턴값으로 리턴이 된다.

 //1.Function expression
 //a function declaration can be called earlier than it is defined. (hoisted)
 //a function expression is created when the execution reaches it.
 
 const print = function() {//anonymous function
     console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum; // 변수 = 함수
console.log(sumAgain(1,3));

//2. Callback function using function expression

function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function
const printYes = function () {
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function () {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous

const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint1 = () => console.log('simplePrint!');
const add = (a,b) => a + b; // const add = function (a,b){return a + b;};
const simpleMultiply = (a,b) => {
    //do something more
    return a * b;
};

//IIFE: Imediately Invoked Function Expression
function hello() {
    console.log('IIFE');
}
//-> () 괄호 를 넣고 쓰고 ();실행하면 된다.
(function hello() {
    console.log('SLEEPY');
})();