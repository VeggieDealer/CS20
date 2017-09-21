function startGame() {
  background(185);
  if (frameCount % spawnSpeed == 1) {
    circles.push(Object.assign({}, baseCircle));
    circles[circles.length - 1].x = random(50, 950);
    circles[circles.length - 1].y = random(200, 950);
  }

  stroke(0);
  fill("skyblue");
  rect(0, 0, 999, 150);
  stroke(255);
  fill("black");
  textSize(30);
  text("Your Accuracy: " + Math.floor(accHit / accMissed * 100) + "%", 50, 50);
  text("Time: " + Math.floor(frameCount / 60), 50, 100);
  if (gone == 0) {
    image(lives, 500, 50, 50, 50);
    image(lives, 560, 50, 50, 50);
    image(lives, 620, 50, 50, 50);
  } else if (gone == 1) {
    image(lives, 500, 50, 50, 50);
    image(lives, 560, 50, 50, 50);
  } else if (gone == 2) {
    image(lives, 500, 50, 50, 50);
  } else if (gone > 2) {
    udfji
  }

  for (i = 0; i < circles.length; i++) {
    fill("red");
    if (circles[i].r >= 100) {
      circles[i].growthDirection *= -1;
    }
    if (circles[i].r <= 0) {
      circles.splice(i, 1);
      gone++;
    }
    circles[i].r += 1 * circles[i].growthDirection;
    ellipse(circles[i].x, circles[i].y, circles[i].r);
  }
  if (frameCount % 300 == 1) {
    spawnSpeed -= 1;
  }
  if (spawnSpeed < 20) {
    spawnSpeed = 20;
  }

}
