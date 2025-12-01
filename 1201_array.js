const animals = ["elephant","cat","parrot","sloth","wolf"]

console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);

let count = 0;
let data = ''
let arry = [];

animals.pop(); // 원소 뒤쪽 삭제
console.log(animals);
animals.pop();
console.log(animals);
animals.push('rabbit'); // 원소 하나 추가
console.log(animals);
animals.shift(); // 맨 앞 원소 하나 삭제
console.log(animals);
animals.unshift("tiger") // 맨 앞 원소  추가
console.log(animals);
animals.push("snake","kangaroo");
console.log(animals);

//for문으로 1 + 10 더한 값을 출력
let total = 0;
for(let i=1; i<= 10; i++) {
 total = total + i;
}

console.log(total);

for (let i =0; i <animals.length; i++) {
    console.log(animals[i]);
}

for(const animal of animals){
    console.log(animal)
}

animals.forEach( (animal, index) => {
    console.log(`${index + 1}. ${animal}`);
});
