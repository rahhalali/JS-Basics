
    var show = document.getElementById("show");
    var hide =document.getElementById("hide");

    function clicked(id){
        if(document.getElementById(id) == show){
            document.getElementById("texte").style.display="block";
        }else{
            if(document.getElementById(id) == hide){
                document.getElementById("texte").style.display="none";
        }}
    }