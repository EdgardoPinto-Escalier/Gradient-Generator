// Select the h3 element.
var css = document.querySelector("h3");
var colorOne = document.querySelector(".colorOne");
var colorTwo = document.querySelector(".colorTwo");
var body = document.getElementById("gradientBody");

//Grab colorOne values
colorOne.addEventListener("input", function(){
  body.style.background = 
    "linear-gradient(to right, " 
    + colorOne.value 
    + ", " 
    + colorTwo.value 
    + ")";
})

//Grab colorTwo values
colorTwo.addEventListener("input", function () {
  body.style.background =
    "linear-gradient(to right, "
    + colorOne.value
    + ", "
    + colorTwo.value
    + ")";
})

