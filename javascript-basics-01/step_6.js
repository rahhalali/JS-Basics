
var btn=document.getElementById("validate");

btn.addEventListener("click",function(){
    var first= document.getElementById("first_number").value;
var second=document.getElementById("second_number").value;
    window.alert(remainder(first,second));
});
function remainder(x,y){
    var z= x/y;
    var mod =x%y;
    return mod;
}