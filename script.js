//Create variables for container, mover and food divs
const container = document.getElementById("container");
const mover = document.getElementById("mover");
const food = document.getElementById("food");

//Give food a random position

document.body.onload = positionSwitch;

function positionSwitch() {
  randomX = Math.floor(Math.random() * 20) * 25;
  randomY = Math.floor(Math.random() * 20) * 25;

  food.style.left = randomX + "px";
  food.style.top = randomY + "px";

  //   console.log(randomX, randomY);
}

//Make mover move when you press  keys
//keyCodes of arrow keys are left = 37, right = 39, up = 38, down = 40

document.onkeydown = animate;

let moverLeft = 0;
let moverTop = 0;

function animate(e) {
  if (e.keyCode === 39) {
    moverLeft += 25;
    if (moverLeft >= 475) {
      moverLeft = 475;
    }
  }
  if (e.keyCode === 37) {
    moverLeft -= 25;
    if (moverLeft <= 0) {
      moverLeft = 0;
    }
  }
  if (e.keyCode === 40) {
    moverTop += 25;
    if (moverTop >= 475) {
      moverTop = 475;
    }
  }
  if (e.keyCode === 38) {
    moverTop -= 25;
    if (moverTop <= 0) {
      moverTop = 0;
    }
  }
  mover.style.left = moverLeft + "px";
  mover.style.top = moverTop + "px";

  //   console.log(moverLeft, moverTop);

  gotFood();
}

function gotFood() {
  if (moverLeft == randomX && moverTop == randomY) {
    positionSwitch();
  }
}
