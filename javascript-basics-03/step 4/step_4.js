

    function clicked(){

        var pass=document.getElementById("password");
        var conf=document.getElementById("confirmation");

        if(pass.value !== conf.value ){
        pass.style.border="2px solid red";
        conf.style.border="2px solid red";
        
        }else{
        pass.style.border="2px solid green";
        conf.style.border="2px solid green";
        
    }
    }