const numbers = [10,20,30,40,50];
console.log(numbers.slice(1,4));
console.log(numbers);

console.log(numbers.splice(1,3));
console.log(numbers);

const fruits = ['banana','apple'];
const newData = numbers.concat(fruits);
console.log(newData);

const newData2 = [...numbers,...fruits]; // ... <- 배열을 꺼내! 전개연산자
console.log("newData2 :",newData2);

