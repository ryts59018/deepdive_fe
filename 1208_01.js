const sentence = 'Good morning, Hello Ghost'
const hasGhost = sentence.includes('Ghost')

console.log(hasGhost);

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

const str = 3;
//'03'으로 출력하기

console.log(String(str).padStart(3,"0"))

console.log(sentence.repeat(3));



//reduce

const nums = [1,2,3,4,5]
const sum = nums.reduce((a,c)=> a+c,0);
console.log(sum);

const cart = [
    {item : 'apple', price:12900},
    {item : 'banana', price:4900},
    {item : 'onion', price:5200},
   
]

const sums = cart.reduce((a,c)=> a+c.price,0);
console.log(`장바구니 총액은 ${sums}원 입니다.`);

const str3 = 'dog dog Dog'
console.log(str3.replace(/dog/gi,"cat"));

const str2 = 'hello world'
console.log(str2.replace("world","ghost"));
console.log(str2.slice(6, 9));
console.log(str2.slice(6));
console.log(str2.slice(-5));

const phoneNumber = '01012345678'

//마지막 4자리를 뺀 나머지는 '*'처리
//repeat, slice

const secNumber = '*'.repeat(phoneNumber.length - 4)+phoneNumber.slice(-4);
console.log(secNumber);

const scores = [25,32,40,15]
//scores의 평균값을 구하시오.
//reduce, length 사용
const average = scores.reduce((a,c)=> a+c,0)/scores.length;
console.log(average);



const myScores = {
    math: 90,
    english: 80,
    science: 79,
};

//내 점수의 합계를 구하시오.
//Object,valuse, reduce 사용

const total = Object.values(myScores).reduce((a,c) => a+c,0);
console.log(total);



console.log(1);
setTimeout(()=> {
    console.log(2)
}, 3000)
console.log(3);

//2초뒤에 이름찍기

setTimeout((name)=>{
    console.log(`Hello, ${name}`)

},2000, "Ghost");

//타이머취소
const timerID = setTimeout(()=>{ 
    console.log("실행되지않음");

},5000);
clearTimeout(timerID);

// setTimeout 으로, 2초후에, {~님} {~초} 후에 인사드립니다.
// 이름, 시간을 입력받기
function greeting(name,seconds){
    console.log(`${name}님, ${seconds}초 후에 인사드립니다.`);
}
setTimeout(greeting,2000,"Irangi",3);

