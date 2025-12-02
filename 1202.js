const price = [1000,2000,3000]
const newPrice = price.map(data => data * 2);
console.log(newPrice);

const ages = [15,22,19,30,12];
const adult = ages.filter((data) => data >= 20)
console.log(adult)

const str = ['a','b','c','d','e','c'];
console.log(str.indexOf("c")); // 맨 처음꺼 찾음
console.log(str.indexOf("f"));
console.log(str.lastIndexOf("c")); // 맨 마지막꺼 찾음
console.log(str.includes('c')) // true
console.log(str.includes('f')) // false
console.log(str.includes('C')) // false

str.reverse();
console.log(str);

const numbers = [1,5,3,8,2,13,32];

numbers.sort((a,b) => a-b);
console.log(numbers);
numbers.sort((a,b) => b-a);
console.log(numbers);

const myfruits = 'apple,banana,mango'
const myArray = myfruits.split(".");
console.log(myArray);

console.log(myArray.join("-"));