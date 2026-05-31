function setup() {
  createCanvas(600, 400);

}

function draw() { 
  noStroke();
  fill(245);
  quad(300, 400, 600, 400, 600, 0, 200, 0);
  push();
  noStroke();

  fill(240);
  quad(500, 400, 600, 400, 600, 0, 400, 0);
  pop();
  
  push();

  strokeWeight(1);
  stroke(180);
  arc(450, 180, 260, 30, radians(185), radians(5));

  noStroke();
  fill(254,236,117);
  ellipse(450, 180, 130, 130);
  strokeWeight(1);
  fill(195,254,112);
  arc(450, 180, 130, 130, radians(260), radians(10));
  noFill();
  stroke(0);
  arc(450, 180, 260, 30, radians(5), radians(185));
  

  pop();
  
  push();
  fill(255);
  noStroke();
  quad(0,400, 300, 400, 200, 0, 0,0);
  noStroke();
  fill(148,253,154);
  circle(100, 65, 40);
  fill(151,241,204);
  circle(160, 65, 60);
  fill(151,251,241);
  circle(100, 125, 49);
  fill(151,221,251);
  circle(160, 125, 35);
  pop();
  
  push();
  fill(255);
  stroke(0);
  strokeWeight(2);
  quad(180, 370, 350, 370, 320, 280, 210, 280);
  stroke(180);
  line(195, 325, 335, 325);
  

  stroke(190,129,247);
  fill(190,129,247);
  strokeWeight(1);
  ellipse(210, 335, 11, 11);
  stroke(190,129,247);
  fill(190,129,247);
  ellipse(315, 311, 21, 21);
  stroke(190,129,247);
  fill(190,129,247);
  ellipse(280, 350, 16, 16);
  pop();
}

