
var Image_Id = document.querySelector('#image1');
Image_Id.addEventListener("mouseover",()=>{
    if (Image_Id.src.match("images/image1.jpg")) {
        Image_Id.src = "images/image1_2.jpg";
    }
    else {
        Image_Id.src = "images/image1.jpg";
    }

})
  