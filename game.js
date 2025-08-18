let us=0;
let cs=0;
let usp = document.querySelector("#d9")
let csp = document.querySelector("#d12")

const a=document.querySelectorAll(".c1");

let ht= document.querySelector("#d15");

const comcom = () => {
    let c=["d4","d5","d6"];
    let d=Math.floor(Math.random()*3);
     return c[d] };

function winner(raj){
if (raj){console.log("You win")
     ht.innerText=`You win !`
ht.style.backgroundColor="green"
us++
usp.innerText=us;
     }else{console.log("You loose")
          ht.innerText="You loose !"
          ht.style.backgroundColor="red"
          cs++
          csp.innerText=cs;
     }}

const e = (b) => {
console.log("user choice is",b);
const g = comcom();
console.log("computer choice is", g);
if(b===g){console.log("Game was draw");
      ht.innerText="You Draw"
      ht.style.backgroundColor="yellow"
} else {
     let raj = true;
     if (b==="d4"){
          raj = g==="d5" ? false:true
     } else if (b==="d5"){
          raj = g==="d4" ? true:false
     }else if (b==="d6") {
          raj = g==="d4" ? false:true}
          winner(raj ,b,g)
     }}

a.forEach(function mn (i){
i.addEventListener("click",() => {
     const b = i.getAttribute("id");
     e(b) });
});

