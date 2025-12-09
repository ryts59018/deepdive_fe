const numbers = [25,5,3,42,10]
const sum = numbers.reduce((a,c)=> a+c,0);
console.log(sum);

const a = '3.542534';
const b = "hello";

console.log(Number(a));
console.log(parseInt(a));
console.log(parseFloat(a));
console.log(Number(b));

const add = (a,b) => a+b;
const divide = (a,b) => Number(a/b).toFixed(2); //parseFloat(---)
console.log(add(3,5));
console.log(divide(10,3));