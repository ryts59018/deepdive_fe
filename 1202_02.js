const winners = ['Lee','Park','Kim','Choi']
//kim 몇번 째에 있는지 출력하시오.

let result = winners.indexOf("kim");
console.log(`우승자 kim은 ${result + 1}번째 회원입니다.`)

const tags = ['#JS','#CSS','#HTML']
result = tags.join(", ")
console.log("2: ",result);


const stock = ['banana', 'orange','apple','grape']
console.log(stock.includes('apple'))

const hashTags = "figma,illustator,photoshop";
result = hashTags.split(", ").map((tag) => `#${tag}`);
console.log(result);


const puppy = {
  name: "bobby",
  age: 3,
  breed: "sichu",
};

const type = "breed";

console.log(puppy.name);
console.log(puppy.age);
console.log(puppy["breed"]);
console.log(puppy[type]);

// puppy age -> 5
puppy.age = 5;

console.log(puppy.age);

puppy.color = "white and black";
console.log(puppy);

delete puppy.color;
console.log(puppy);


const users = [
  { name: "David", point: 50 },
  { name: "Juliet", point: 150 },
  { name: "Mike", point: 250 },
];

const vips = users.filter(user => user.point >= 100);
console.log(vips);

const newVips = vips.map(vip =>({...vip}) );
console.log("newVips : ",newVips);


const obj1 = {name : 'ghost', age:500};
const obj2 = {mbti:"INFJ"};
const friends = {...obj1, ...obj2}
console.log("friends :",friends);

const newFriend = {...friends, age:1000};
console.log(newFriend);