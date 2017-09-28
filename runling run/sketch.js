var runling = {
  x: 10,
  y: 10,
  xSpeed: 2,
  ySpeed: 2,
}
var runlingMove = false;
var runlingDestination = {
  x: 0,
  y: 0
}

drones = [];
baseDrone = {
  x: 0,
  y: 0,
  r: 10,
  xMove: 2,
  yMove: 2
}
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(1200, 1000);
  droneNumber = 0;
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  background(200, 200, 200);
  fill(200, 200, 200);
  rect(0, 0, 73, 73);
  rect(1125, 0, 73, 73);
  drawMap();
  drawCharacter();

  stroke(0);
  if (droneNumber < 20) {
    drones.push(Object.assign({}, baseDrone));
    drones[drones.length - 1].x = random(75, 950);
    drones[drones.length - 1].y = random(10, 70);
    drones[drones.length - 1].xMove = random(-1, 2);
    while (drones[drones.length - 1].xMove < 0.1 && drones[drones.length - 1].xMove > -0.1) {
      drones[drones.length - 1].xMove = random(-1, 2);
    }
    drones[drones.length - 1].yMove = random(-1, 2);
    while (drones[drones.length - 1].yMove < 0.1 && drones[drones.length - 1].yMove > -0.1) {
      drones[drones.length - 1].yMove = random(-1, 2);
    }
    droneNumber++;
  }

  for (i = 0; i < drones.length; i++) {
    ellipse(drones[i].x, drones[i].y, drones[i].r);
    drones[i].x += drones[i].xMove;
    drones[i].y += drones[i].yMove;
    if (drones[i].x < 80 || drones[i].x > 1120) {
      drones[i].xMove *= -1;
    }
    if (drones[i].y < 5 || drones[i].y > 69) {
      drones[i].yMove *= -1;
    }

    if (dist(runling.x, runling.y, drones[i].x, drones[i].y) < drones[i].r) {
      runling.x = 10;
      runling.y = 10;
      runlingMove = false;
    }
  }

  if (runlingMove) {
    if (runling.x < runlingDestination.x) {
      runling.x += runling.xSpeed;
    } else if (runling.x > runlingDestination.x) {
      runling.x -= runling.xSpeed;
    }
    if (runling.y < runlingDestination.y) {
      runling.y += runling.ySpeed;
    } else if (runling.y > runlingDestination.y) {
      runling.y -= runling.ySpeed;
    }
  }
}

function mousePressed() {
  runlingMove = true;
  runlingDestination.x = mouseX;
  runlingDestination.y = mouseY;
}


function keyPressed() {
  if (keyCode == 83) {
    runlingMove = false;
  }
}
