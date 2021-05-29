var btn =document.getElementById("validate");

btn.addEventListener("click",()=>{
    var age=document.getElementById("age").value;
    window.alert(Age(age));
});
function Age(x){
    if (x<18)
        return "you are under 18";
    return "you are above 18";
}