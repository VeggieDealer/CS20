circles = [];
baseCircle = {
  x: 0,
  y: 0,
  r: 7,
  growthDirection: 1
}
var accHit = 1;
var accMissed = 1;
var spawnSpeed = 25;
var gone = 0;

function preload() {
  lives = loadImage("images/heart.png");
}

function setup() {
  createCanvas(1000, 1000);
  background(color(185));

}

function draw() {
  startGame();
}


function mousePressed() {
  var didHit = false;
  for (i = 0; i < circles.length; i++) {
    if (dist(mouseX, mouseY, circles[i].x, circles[i].y) <= circles[i].r) {
      circles.splice(i, 1);
      didHit = true;
    }
  }
  if (!didHit) {
    accMissed++;
  } else {
    accMissed++;
    accHit++;
  }
}
