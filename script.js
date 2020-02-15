// Select the h3 element.
var css = document.querySelector("h3");
var colorOne = document.querySelector(".colorOne");
var colorTwo = document.querySelector(".colorTwo");
var body = document.getElementById("gradientBody");

// Function to set gradient values.
function setGradientColors() {
  body.style.background =
    "linear-gradient(to right, "
    + colorOne.value
    + ", "
    + colorTwo.value
    + ")";

    css.textContent = body.style.background + ";";
}

// Add the event listener and call the function.
colorOne.addEventListener("input", setGradientColors);
colorTwo.addEventListener("input", setGradientColors);

