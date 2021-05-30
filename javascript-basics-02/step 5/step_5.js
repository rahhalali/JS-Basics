function change(src1,src2,id)
{
if(document.getElementById(id).src.match(src1)){
document.getElementById(id).src=src2;
}else{
    document.getElementById(id).src=src1;
}
}    
    

