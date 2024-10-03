var cube = document.querySelector(".cube");
var sides = ["front", "back", "right", "left", "top", "bottom"];
var currentClass = "";

function changeSide() {
  var randomSide = sides[Math.floor(Math.random() * sides.length)];
  var showClass = "show-" + randomSide;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}
// set initial side
changeSide();

setInterval(changeSide, 800);
