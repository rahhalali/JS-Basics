var inp=document.querySelector('#name');

inp.addEventListener('blur',()=>{
    window.alert(out());
});
function out(){
    return "thank you for participating!";
}