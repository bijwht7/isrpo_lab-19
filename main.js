    for (let i = 0; i < 5; i++) {
    console.log(i);
}
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}
let number = 5 ;
while (number > 0){
    console.log(number)
    number -= 1;
}
let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while(doValue < 3);
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i)
}
for (let i = 0 ; i < 10 ; i++){
    if ( i !== 5){
        if(i === 8){
            break;
        }
        console.log(i);
    }
}
for (let i = 1; i <= 3; i++){
    for (let j = 1;  j <= 3; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}
for (let i = 1; i <= 4; i++) {
    let a = "";
    for (let j = 1; j <= i; j++) {
        a += "*";
    }
    console.log(a);
}
function sum(a, b) {
    return a + b;
}
console.log(sum(3,5));
function multiply(a, b) {
    return a*b;
}
console.log(multipl(34,67));
function sayHello(name){
    console.log(`Hello, ${name}`);
}
sayHello("Аринка-мандаринка")
function printInfo(name , age) {
    console.log(`Name: ${name} Age: ${age}`);
}
printInfo("акакий", 42);
function greet(name = "Гость"){
    console.log("Привет, " + name);
}
greet();
greet("Сашка какашка");
function calculateDiscount(c , p = 10) {
    return c - p;
}
calculateDiscount(34);
const add = function (a, b){
    return a + b;
};
console.log(add(2, 3));
function makeCounter(){
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
function sumFuns(a, b) {
    return a + b;
}
const sumFuns2 = (a,b) => a + b;
const double = x => x * 2;
const sumFunc3 = (a, b) => a + b;
const sayGreeting = () => console.log("htllo");
const square = x => x * x;
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
}
let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);
console.log(numbersArr[0]);
console.log(numbersArr[1]);
console.log(numbersArr.length);
numbersArr.push(10);
console.log(numbersArr);
numbersArr.pop();
console.log(numbersArr);
let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}
for (let value of numbers2) {
    console.log(value);
}
let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);
console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));
console.log(fruits.includes("яблоко"));
console.log(fruits.includes("манго"));
