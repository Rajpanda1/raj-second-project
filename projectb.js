let dropdown=document.querySelectorAll(".s1")
let button=document.querySelector("#submit1")

for (let select of dropdown){
  for (let os in countryList){
    let newoption=document.createElement("option");
    newoption.innerText=os;
    newoption.value=countryList[os];
    select.append(newoption);
    if(select.name==="from" && os==="USD"){
        newoption.selected="done"
    } else if (select.name==="to" && os==="INR"){
        newoption.selected="done"
    } 
  }

}

button.addEventListener("click",(r) => {
  r.preventDefault();
let amount = document.querySelector("#d5")
let para=document.querySelector("#d7")
amounta=amount.value

if (amounta < 1 ) {
  amount.value= "1" ;
}else{ 
  para.innerText=`${amounta} USD =${amounta*87.57} INR`
};
});


