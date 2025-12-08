// 함수반복하기

//setInterval(()=>{
//     console.log(msg)
//}, 1000, "Tick Tock") // 1초마다 반복실행한다.

//setInterval(
 //   () => {
  //      const now = new Date()
   //     console.log(now.getSeconds());
    //}, 1000);



//const timeId = setInterval(()=> console.log("Tick"),1000)
//setTimeout(()=> clearInterval(timeId),5000);

// 1초경과, 2초경과, 3초경과, 4초경과



let seconds = 0;
setInterval(() => {
    seconds++;
    console.log(`${seconds}초 경과`);
},1000);


