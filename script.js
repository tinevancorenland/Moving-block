//Create variables for container and mover divs
const container = document.getElementById("container");
const mover = document.getElementById("mover");

//Make mover move when you press  keys
document.onkeydown = animate;

let moverLeft = 0;
let moverTop = 0;

function animate(e) {
  //   console.log(e.keyCode); show me that arrow keys have following codes: left = 37, right = 39, up = 38, down = 40
  if (e.keyCode === 39) {
    moverLeft += 2;
  }
  if (e.keyCode === 37) {
    moverLeft -= 2;
  }
  if (e.keyCode === 40) {
    moverTop += 2;
  }
  if (e.keyCode === 38) {
    moverTop -= 2;
  }

  mover.style.left = moverLeft + "px";
  mover.style.top = moverTop + "px";
}
