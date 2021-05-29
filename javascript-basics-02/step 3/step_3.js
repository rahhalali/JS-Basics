var inp = document.getElementById("name");
var div=document.getElementById("first");

inp.addEventListener('input',()=>{
    div.innerHTML=inp.value;
})