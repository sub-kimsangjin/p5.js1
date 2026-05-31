let y=1;
let d=0.1;
let a=0;
function draw() {
  createCanvas(600, 400);
  background(240);
  noStroke();
  fill(235, 211, 195);
  ellipse(140, 253,132, 170);
  ellipse(140, 235, 130, 180);
  stroke(0);
  strokeWeight(1);
  ellipse(115.5, 230, 23, 7.3);
  ellipse(175, 230, 26, 7.4);
  fill(0);
  arc(116, 227, 12, 12, 0, radians(180), CHORD);
  arc(172, 227, 12, 12, 0, radians(180), CHORD);
  strokeWeight(0.5);
  line(180, 226, 183, 230);
  line(182.5, 227, 186.5, 230);
  strokeWeight(1);
  line(106, 228, 102, 229);
  stroke(90, 66, 60);
  line(104, 233, 100, 231);
  line(103, 231, 100, 230);
  line(103, 230, 100, 230);  
  strokeWeight(0.6);
  noFill();
  arc(128, 268, 7, 11, radians(78), radians(214));
  arc(157, 271, 13, 11, radians(-46), radians(80));
  strokeWeight(1);
  stroke(0);
  fill(0);
  if (!(keyIsPressed && key==='d')) { //'d'를 누르면 콧구멍 벌렁벌렁
    ellipse(138.2, 272, 5.7, 2.1);
    ellipse(152, 273, 5.4, 1.7);
  }
  else if (keyIsPressed && key ==='d') {
    ellipse(138.2, 272, 5.7+a, 2.1+a);
    ellipse(152, 273, 5.4+a, 1.7+a);
    a+=d;
    if (a>=2.2) {
      d=-d;
    }
    else if (a<=0) {
      d=-d;
    }
  }
  fill(200, 159, 142);
  noStroke();
  quad(126, 240, 140, 226, 140, 256, 126, 258);
  stroke(0);

  fill(235, 211, 195);
  stroke(0);
  rect(250, 330, 20, 9, 20);
  rect(250, 337, 20, 9, 20);
  rect(250, 344, 20, 9, 20);
  rect(250, 351, 20, 9, 20);
  rect(266, 330, 10, 32, 20);
  rect(266, 330.5, 10, 30, 20);
  noStroke();
  rect(265.5, 330, 10, 32, 20);
  if (mouseIsPressed) {   //마우스가 눌려 있으면 안경 벗겨서 이동
    strokeWeight(3); //놀라서 입도 벌린다.
    stroke(0);
    noFill();
    arc(mouseX, mouseY, 70, 60, radians(235), radians(305));
    arc(mouseX, mouseY-24, 40, 40, radians(0), radians(180));
    arc(mouseX+60, mouseY, 70, 60, radians(235), radians(305));
    arc(mouseX+60, mouseY-24, 40, 40, radians(0), radians(180));
    arc(mouseX+30, mouseY-10, 100,30, radians(235), radians(305));
    strokeWeight(1);
    fill(200, 159, 142);
    ellipse(144, 298, 32, 28);
  }
  else {
    strokeWeight(3);
    noFill();
    stroke(0);
    arc(116, 250, 70, 60, radians(235), radians(305));
    arc(116, 250-24, 40, 40, radians(0), radians(180));
    arc(116+60, 250, 70, 60, radians(235), radians(305));
    arc(116+60, 250-24, 40, 40, radians(0), radians(180));
    arc(116+30, 250-10, 100,30, radians(235), radians(305));
    strokeWeight(1);
    stroke(0);
    curve(103, 265, 119, 295, 166, 296, 172, 270);
    curve(131, 280, 119, 291, 116, 303, 112, 311);
    curve(150, 282, 167, 294, 168, 301, 173, 311);
    curve(117, 302, 119, 296, 125, 296, 134, 301);
  }
  if (!(key==='h' && keyIsPressed)) { //h를 누르면 headskin.대머리
    fill(0);
    strokeWeight(3);
    stroke(0);
    curve(146, 233, 130, 213, 101, 213, 70, 221);
    curve(138, 232, 162, 215, 192, 215, 222, 225);
    curve(80, 215, 145, 170, 130, 220, 110, 240);
    curve(80, 190, 160, 160, 136, 220, 100, 240);
    quad(80, 180, 128, 145, 190, 162, 209, 220);
    arc(105, 196, 76, 30, radians(-45), radians(160));
    arc(80, 194, 76, 30, radians(-60), radians(120));
    ellipse(80, 200, 20, 36);
    ellipse(121, 165.5, 70, 40);
    ellipse(100,177, 45, 30);
    ellipse(150, 163, 79, 40); 
    noFill();
    strokeWeight(1);
    arc(190, 159, 40,46, radians(180), radians(60));
    arc(188.8, 160.2, 40,46, radians(180), radians(60));
    fill(0);
    arc(174, 180, 51, 72, radians(180), radians(80));
    stroke(140);
    arc(120, 180, 42, 31, radians(322), radians(160));
    curve(100, 200, 80, 140, 100, 140, 99, 160);  
    fill(0);
    circle(145, 163, 60);
    noFill(0);
    strokeWeight(2);
    stroke(0);
    arc(222, 180, 60, 35, radians(73), radians(170));
    strokeWeight(0.4);
    arc(145, 163, 30, 90, radians(90), radians(280));
    }
  else if (keyIsPressed && key === 'h') {
    strokeWeight (2);
    stroke(0);
    noFill();
    ellipse(142, 193, 28, 18);
    fill(0);
    circle(142, 193, 9);
  }
  if (!(keyIsPressed && key==='l')) {//'l' 입력시 손가락 발사
    fill(235, 211, 195);
    rect(266, 310, 10, 25, 30);
    y=1;
    }
  else if (keyIsPressed && key==='l') {
    fill(235, 211, 195);
    rect(266, 310-y, 10, 25, 30);
    if ((310-y)<0) {
      y=0;
    }
    else if ((310-y)>0) {
      y+=2;
    }    
  }
}
function keyPressed() {
  if (key==='s') {
    saveGif('mySketch', 10);
  }
}