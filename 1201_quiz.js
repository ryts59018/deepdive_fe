const numbers = [30,25,12,3,8]

for(let i=0; i< numbers.length; i++) {
 if(numbers[i] <= 10){
    console.log(numbers[i]);
 }
}

const under10 = [];
for(const num of numbers) {
    if(num<=10) under10.push(num);
}

console.log(under10)

const fruits = ["banana","lemon","apple mango","lime","melon"];
const under5letters = []

for(const fruit of fruits) {
 if(fruit.length <= 5) under5letters.push(fruit); 
}

console.log(under5letters);