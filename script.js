//Create variables for container and mover divs
const container = document.getElementById("container");
const mover = document.getElementById("mover");

//Make mover move when you press  keys
//keyCodes of arrow keys are left = 37, right = 39, up = 38, down = 40

document.onkeydown = animate;

let moverLeft = 0;
let moverTop = 0;

function animate(e) {
  if (e.keyCode === 39) {
    moverLeft += 2;
    if (moverLeft >= 475) {
      moverLeft = 475;
    }
  }
  if (e.keyCode === 37) {
    moverLeft -= 2;
    if (moverLeft <= 0) {
      moverLeft = 0;
    }
  }
  if (e.keyCode === 40) {
    moverTop += 2;
    if (moverTop >= 475) {
      moverTop = 475;
    }
  }
  if (e.keyCode === 38) {
    moverTop -= 2;
    if (moverTop <= 0) {
      moverTop = 0;
    }
  }
  mover.style.left = moverLeft + "px";
  mover.style.top = moverTop + "px";
}
