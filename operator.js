//1. String Concatenation +
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+ 2 = ${1 +2}`);

//2. Numeric operators
console.log(1 + 1);//add
console.log(1 -1);// substract
console.log(1 / 1); //divide
console.log(1 * 1);// multiply
console.log(5 % 2); // remainder 나누고 나머지 값
console.log(2**3); //exponentiation 2의3승

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
//counter 가 먼저 postIncrement 로 할당되고 그다음 카운트 +1 이 된다.
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assingment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or:${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);

function check () {
    for(let i =0; i < 10; i++){
        //wasting time
        console.log(check);
    }
    return true;
}

// !(not) 값을 반대로 바꿔준다. value1이  false이기때문에 true로 나온다
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion 타입 변경  a와 b의 값이 같은지를 비교해서  같으면 true 다르면 false 값만 같으면 true
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 타입을 신경써서 타입이 다르면 다름, 값과 값의 종류가 모두 같은지를 비교해서 같으면 true 다르면 false
console.log(stringFive == numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 ={name: 'ellie'};
const ellie2 ={name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

//8. Conditional operators: if
//if, else if, else
const name = 'woojin';
if (name === 'woojin') {
    console.log('welcome Woojin!');
} else if (name === 'coder'){
    console.log('you are amazing coder');
}else {
    console.log('unknown');
}

//9. Ternary operator: ?
//condition ? value 1 : value2;
console.log(name ==='woojin' ? 'yes' : 'no');

//10. Switch statement
//use for multipe if checks
//use for enum-like value check
//use for multiple type checks in TS

const browser ='IE';
switch (browser){
    case 'IE':
        console.log('go away!');
       break;
    case 'chrome':
    case 'Firefox':
            console.log('love you!');
            break;     
            default:
            console.log('same all!');
            break;
}

//11.Loops
//while loop, while the condition is truthy,
//body code is executed.

let i =3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, baby code is executed first,
//then check the condition.
//{} block을 먼저 실행하고 싶으면 do while 조건문이 맞을 때만  실행시키고 싶으면 while
do{
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i =3; i > 0; i = i -2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++){
    for (let j =0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break, continue
//Q1. iterate from 0 to 10 and print only even numbers (use continue) 짝수만 출력
for (let i = 0; i < 11; i++){
    if(i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}

//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break) 8까지만
for (let i = 0; i < 11 ; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}

//연습

const nickName = 'asd';
if (nickName === 'woojin'){
    console.log('hello woojin')
}else if(nickName === 'Yujin'){
    console.log('hello yujin')
}else{
    console.log('move bitch')
}


for (let i = 0; i ,11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`)
}


