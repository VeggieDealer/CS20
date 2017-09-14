circles = [];
baseCircle = {
  x: 0,
  y: 0,
  r: 5
}

function setup() {
  createCanvas(1000, 1000);
  background(color(185));

}

function draw() {
  background(185);
  if (frameCount % 60 == 1) {
    circles.push(Object.assign({}, baseCircle));
    circles[circles.length - 1].x = random(100, 900);
    circles[circles.length - 1].y = random(100, 900);
  }

  for (i = 0; i < circles.length; i++) {
    fill("red");
    ellipse(circles[i].x, circles[i].y, circles[i].r);
    circle.x = circles[i].x;
    circle.y = circles[i].y;
    circle.r = circles[i].r;
  }

  for (i = 0; i < circles.length; i++) {
    circles[i].r += .5;
    if
  }
}
