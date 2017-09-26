var shooter = {
  x: 400,
  y: 820,
  xSpeed: 0,
}
var shootShot[]

var shoot = {
  x: 0,
  y: 0,
}


// SETUP FUNCTION - Runs once at beginning of program

function setup() {
  createCanvas(800, 900);

}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  background(0);
  rect(shooter.x, 820, 100, 75)
  rect()

  if(shooter.x > width - 100) {
    shooter.x = width - 100;
  } else if (shooter.x < 0) {
    shooter.x = 0;
  }

  shooter.x += shooter.xSpeed;
}


function keyPressed() {
  if (keyCode == LEFT_ARROW) {
      shooter.xSpeed = -2;
  }
  if (keyCode == RIGHT_ARROW) {
      shooter.xSpeed = 2;
  }
  if (keyCode == 32) {
    shooter.bulletX = shooter.x;
    shooter.bulletY = shooter.y;
  }
}
function keyReleased() {
  if (keyCode == 37 && shooter.xSpeed < 0) {
      shooter.xSpeed = 0;
    } else if (keyCode == 39 && shooter.xSpeed > 0) {
      shooter.xSpeed = 0;
    }
}
