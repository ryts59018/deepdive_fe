
const person = {name:'Ghost', age :20, mbti: null,};

console.log(Object.keys(person).length);
//person에 있는 값(value)들 중에, null이 있는지 확인
//있으면 트루, 없으면 펄스

const hasNull = Object.values(person).includes(null);
console.log(hasNull)

const task = [{id:1, text:'walk'},
    {id:2, text:'running'},
];

const newTask = {id:3, text:"programming"};

const finalTask = [...task, newTask];
console.log(finalTask);