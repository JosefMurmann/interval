let started = 0;
let stage = 0;
let count = 0;
let secs = 0;
let timem = 0;

function setup() {
stroke(0)
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Canvas");
  background(0);
  textSize(windowHeight / 5);
  textAlign(CENTER);
  frameRate(30);
}

function draw() {
  background(0);
  console.log(count);
  fill(255);
  strokeWeight(5)
  text("Click to start", width / 2, height / 2);
  if (started == 1) {
     secs += 1/30;
    if (stage == 0) {
      background(20, 200, 20);
      fill(255);
      strokeWeight(5)
      text("Cruise", width / 2, 60 * sin(frameCount/20) + height / 2);
    }
    if (stage == 1) {
      background(255, 165, 0);
      fill(0);
      strokeWeight(5)
      text("Push", random(-7, 7) + width / 2, random(-7, 7) + height / 2);
    }
    if (stage == 2) {
      background(255, 40, 40);
      fill(random(255, 0));
      strokeWeight(5)
      text("REV THE F*** OUT", random(-100, 100) + width / 2, random(-100, 100) + height / 2);
    }
    count++
    if (count == 900) {
      stage = 1;
    }
    if (count == 1800) {
      stage = 2;
    }
    if (count == 2000) {
      stage = 0;
      count = 0;
    }

  }

  
  
  if (secs > 60) {
    secs = 0;
    timem++;
  }
  push();
  textAlign(LEFT);
  stroke(0);
  strokeWeight(5)
  fill(255);
  textSize(windowHeight / 15);
  text("Ellapsed Time: " + timem + ":" + round(secs), 20, height - (height / 30) - 10);
  pop();
}

function mouseClicked() {
  started = 1;
}
