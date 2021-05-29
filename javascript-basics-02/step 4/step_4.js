var btn=document.getElementById("btn");

//btn.addEventListener('click',function(){
     //   var name=document.getElementById("name").value="";
     //   var surname=document.getElementById("surname").value=""
     //   var city=document.getElementById("city").value="";

//})


btn.addEventListener('click',()=>{
    var wind=window.confirm("would you like to reset all fields ?");
    if(wind){
        var name=document.getElementById("name").value="";
        var surname=document.getElementById("surname").value=""
        var city=document.getElementById("city").value="";

    }
    else{
        var name=document.getElementById("name").value;
        var surname=document.getElementById("surname").value
        var city=document.getElementById("city").value;

    }

})