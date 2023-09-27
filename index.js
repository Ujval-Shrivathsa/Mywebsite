function myFunction() {
    var dots = document.getElementById("dot-dot-dot-one");
    var moreText = document.getElementById("read-less-text-one");
    var btnText = document.getElementById("read-more-button-one");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}

function myFuncton(){
    var dot = document.getElementById("dot-do-dot-one");
    var moreTex = document.getElementById("rea-less-text-one");
    var btnTex = document.getElementById("red-more-button-one");

    if (dot.style.display === "none") {
      dot.style.display = "inline";
      btnTex.innerHTML = "Read more"; 
      moreTex.style.display = "none";
    } else {
      dot.style.display = "none";
      btnTex.innerHTML = "Read less"; 
      moreTex.style.display = "inline";
  }
}