var btn =document.getElementById("validate");

btn.addEventListener("click",()=>{
    var shoe_size=document.getElementById("shoe_size").value;
    var year=document.getElementById("year").value;
    window.alert(Info(shoe_size,year));
});

function Info(x,y){
    x=x*2;
    x=x+5;
    x=x*50;
    x=x-y;
    x=x+1766;
    return x;
}