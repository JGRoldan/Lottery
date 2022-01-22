let btn = document.querySelector(".btn");
let li = document.querySelectorAll(".li");

btn.addEventListener('click', ()=>{
  for(i=0;i<li.length;i++){
    li[i].innerText=Math.floor(Math.random()*10);
  }
})

// *********** DELAY NUMBERS ************
// btn.addEventListener('click', ()=>{
//   function time(){ li[0].innerText=Math.floor(Math.random()*10);}
//   function time1(){ li[1].innerText=Math.floor(Math.random()*10);}
//   function time2(){ li[2].innerText=Math.floor(Math.random()*10);}
//   function time3(){ li[3].innerText=Math.floor(Math.random()*10);}
   
//   setTimeout(time,100)
//   setTimeout(time1,300)
//   setTimeout(time2,500)
//   setTimeout(time3,800)
// })
