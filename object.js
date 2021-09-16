//objects
//one of the javascript's data types.
// a collection of realted data and/or functionally.
//Nearly all objects in javascript are instances of object
//object = {key : value}; object는 key와 value의 집합체 이다.

//1.Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax
function print(person){
    console.log(person.name);
    console.log(person.age);
}

const woojin = {name: 'woojin', age: 4}; //key=name, value=woojin, key=age, value=4
print(woojin);

woojin.hasJob = true;
console.log(woojin.hasJob);

delete woojin.hasJob;
console.log(woojin.hasJob);

//2. Computed properties
//key should be always string
console.log(woojin.name);
console.log(woojin['name']);
woojin['hasJob'] = true;
console.log(woojin.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(woojin, 'name');

//3. property value shorthand
const peron1 = {name: 'bob', age:2}
const peron2 = {name: 'steve', age:2}
const peron3 = {name: 'dave', age:2}
const person4 = new Person('woojin', 30)
console.log(person4);

//4. Constructor Function
function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//5. in operator: property existence check (key in obj)
console.log('name' in woojin);
console.log('age' in woojin);
console.log('radnom' in woojin);
console.log(woojin.random);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for (key in  woojin) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
//for(let i=0; i < array.length; i++){
  //  console.log(array[i]);
//}
for(value of array){
    console.log(value);
}

//7.Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user ={name: 'woojin', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3= {};
for (key in user) {
    user3[key] = user[key];
}
console.log();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1= {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
