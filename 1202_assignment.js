const numbers = [5,2,11,1,25,9,32,10]

//1
const evenNumbers = numbers.filter(num => num%2 === 0)
console.log(evenNumbers)

//2
const doubleNumbers = numbers.map(num => num ** 2)
console.log(doubleNumbers)

//3
numbers.sort((a,b) => b-a);
console.log(numbers);

//4
console.log(numbers.includes(9))

//5
const tenNumbers = numbers.filter(num => num<10).map(num => num**2)
console.log(tenNumbers)

//6
const friends = ["irangi","Camel","Shoopa"];
function solution(names) {
  return names.filter(name => name === "Camel");
}

console.log(solution(friends));






//1
const users = [
    {name: "Ghost", age: 20},
    {name: "Irangi", age: 22},
    {name: "Camel", age: 19},
];

const userName = users.map(user=>user.name)
console.log(userName)

//2
const user = {name: "Camel", age:20};
user.age = 30;
console.log(user)


//3
const user2 = {name:"Ghost", age:20};
let key = "hobby"
let value = "soccer"
user[key] = value
console.log(user)


//4
const person = {name:"Ghost", age:500};
console.log(person.name)


//5
const obj1 = {a:1};
const obj2 = {b:2};
const newNumber = {...obj1,...obj2}
console.log(newNumber)



//실전문제 split, filter, join
function solution2(my_string){
const vowels = ['a', 'e', 'i', 'o', 'u'];
return my_string.split('').filter(char => !vowels.includes(char)).join('');
}
console.log(solution2("beautiful"));








