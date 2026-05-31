let rR=0;
function setup() {
  createCanvas(600, 400);
  frameRate(60);
  startFrame = frameCount;
}
let the=0;
let spe=0.2;
let thet=0;
let spee=0.1;
function draw() { 
  noStroke();
  fill(245);
  quad(300, 400, 600, 400, 600, 0, 200, 0);
  push();
  noStroke();
  rR+=int(random(-2, 2));
  rR=constrain(rR, -50, 50);
  fill(240);
  quad(500+rR, 400, 600, 400, 600, 0, 400+rR, 0);
  pop();
  
  push();
  let eF=frameCount-startFrame;
  let seF=frameCount-300-startFrame;
  let colo=random(-1,1);
  if (eF>300) {
    thet+=0.0005*millis();
    strokeWeight(1);
    stroke(180);
    arc(450, 180, 260, 30, radians(185), radians(5));
    noStroke();
    colron=constrain(colo,-5,5);
    fill(100, 190,138);
    ellipse(450, 180, 130, 130);
    strokeWeight(1);
    fill(60+20*colron,120+10*colron,143-50*colron);
    arc(450, 180, 130, 130, radians(245+thet+30*sin(frameCount*0.01)), radians(-5+thet));
    noFill();
    stroke(0);
    arc(450, 180, 260, 30, radians(5), radians(185));
    stroke(random(0,255),random(0,255),random(0,255));
    strokeWeight(12);
    if ((seF>=0)) {
      point(450-0.58*(eF-300), 275-190*sin(radians(0.3*seF+30)+0.005*seF));
    }
  }
    
  else {
    strokeWeight(1);
    stroke(180);
    arc(450, 180, 260, 30, radians(185), radians(5));
    noStroke();
    fill(254,236,117);
    ellipse(450, 180, 130, 130);
    strokeWeight(1);
    fill(195,254,112);
    arc(450, 180, 130, 130, radians(260+the+30*sin(frameCount*0.01)), radians(10+the));
    noFill();
    stroke(0);
    arc(450, 180, 260, 30, radians(5), radians(185));
  }
  the+=0.002*millis();
  pop();
  
  push();
  fill(255);
  noStroke();
  quad(0,400, 300, 400, 200, 0, 0,0);
  let a=sin(frameCount*0.05);
  let b=sin(frameCount*0.04);
  noStroke();
  fill(148+50*sin(frameCount*0.01),253,154-35*sin(frameCount*0.03));
  circle(100, 65, 40+17*a);
  fill(151-9*sin(frameCount*0.03),241+24*sin(frameCount*0.03),204);
  circle(160, 65, 60-15*b);
  fill(151+30*sin(frameCount*0.04),251,241+10*sin(frameCount*0.04));
  circle(100, 125, 49-9*sin(frameCount*0.03));
  fill(151+20*sin(frameCount*0.04),221+20*sin(frameCount*0.04),251);
  circle(160, 125, 35+14*a);
  pop();
  
  push();
  a=sin(frameCount*0.02);
  fill(255);
  stroke(0);
  strokeWeight(2);
  quad(180, 370, 350, 370, 320, 280-58*a, 210, 280-58*a);
  stroke(180);
  line(195-0.8*a, 325-29*a, 335+0.8*a, 325-29*a);
  

  stroke(190,129,247);
  fill(190,129,247);
  strokeWeight(1);
  ellipse(210, 335-25*a, 11, 11+7*a);
  stroke(190,129,247);
  fill(190,129,247);
  ellipse(315, 311-36*a, 21, 21+9*a);
  stroke(190,129,247);
  fill(190,129,247);
  ellipse(280, 350-14*a, 16, 16+5*a);
  pop();
}

function keyPressed( ) {
  if (key==='s') {
      saveGif('mysketch', 10);
  }
}