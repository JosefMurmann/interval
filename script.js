let started = 0;
let stage = 0;
let count = 0;
let secs = 0;
let timem = 0;
let cruise = 0;
let pushing = 0;
let sprint = 0;
let canvas;
let start;

function setup() {
stroke(0)
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5Canvas");
  background(0);
  textSize(windowHeight / 5);
  textAlign(CENTER);
  frameRate(30);
  cruiseslider = createSlider(0, 3600, 1500, 1);
  pushslider = createSlider(0, 3600, 1500, 1);
  sprintslider = createSlider(0, 1500, 210, 1);
  cruiseslider.position(100, height/10);
  cruiseslider.style('width', '80%');
  pushslider.position(100, height/10 + height/10);
  pushslider.style('width', '80%');
  sprintslider.position(100, height/10 + height/10+ height/10);
  sprintslider.style('width', '80%');
  cruise = cruiseslider.value();
  pushing = pushslider.value();
  sprint = sprintslider.value();

  button = createButton('click to start');
  button.style("width", "30%");
  button.style("height", "10%");
  button.position(width/3, height/1.4);
  button.style("font-size", "200%");
  button.mousePressed(YEET);
}


function draw() {
  
  background(50);

  
  if (started == 1) {
     secs += 1/30;
     console.log(count)
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
    if (count == cruise) {
      stage = 1;
    }
    if (count == cruise+pushing) {
      stage = 2;
    }
    if (count == cruise+sprint+pushing) {
      stage = 0;
      count = 0;
    }
    if (round(secs) == 20 && timem == 0) {
        stage = 0;
        count = 0;
      }

  }

  if (started == 2){
    if (stage == 3) {
        secs += 1/30;
        background(200, 200, 255);
        fill(0);
        textSize(height/7)
        strokeWeight(6)
        text("Get ready:" + (20 - round(secs)) ,  width / 2,  height / 2);
        if (secs > 19.6){
            started = 1;
            stage = 0;
        }
      }
  }
  if (secs > 60) {
    secs = 0;
    timem++;
  }
  if(started == 0){
  push();
  textAlign(CENTER);
  stroke(0);
  strokeWeight(1)
  textSize(windowHeight / 20);
  fill(20, 200, 20);
  text("Cruising interval:" + round(cruiseslider.value()/30), width/2,height/10 - 10)
  fill(255, 165, 0);
  text("Push interval:" + round(pushslider.value()/30), width/2,height/10 + height/10 - 10) 
  fill(255, 40, 40);
  text("Sprint interval:" + round(sprintslider.value()/30), width/2,height/10 +height/10 +height/10 - 10 )  ;
  pop();
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

function YEET() {
  stage = 3;
  started = 2;
    cruise = round(cruiseslider.value());
    pushing = round(pushslider.value());
    sprint = round(sprintslider.value());
    cruiseslider.hide();
    pushslider.hide();
    sprintslider.hide();
    button.hide();
  
}
