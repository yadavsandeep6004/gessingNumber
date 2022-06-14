const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const btn = document.querySelector("#btn");
const ans = document.querySelector("#ans");
const h3 = document.querySelector("h3");


const guest = prompt("Enter Your Name","Guest");
h1.innerText = `Welcome to ${guest} in Gessing Number`;

let randamNum = Math.floor(Math.random()*100+1);
let count=0;

btn.addEventListener("click",()=>{

   let inval = +input .value;
    count++;
   if(randamNum===inval){
    ans.innerText='Your Number is Match'
   }else if(randamNum>inval){
    ans.innerText='Your Number is Less than'
   }else{
    ans.innerText='Your Number is Greater than'
   }
   h3.innerText = `count:${count}`
  
   input.value=""
})
