var hr, mn,sc;


function setup() {
  createCanvas(400,400);
 
}

function draw() {
  background(0);  
  translate(200,200)

  angleMode(DEGREES);
  rotate(270)
  hr = hour();
  mn = minute();
  sc = second();

  

  scAngle = map(sc,0,60,0,360);
  push();
  rotate(scAngle); 
  stroke(255,0,0);
  strokeWeight(6);
  line(0,0,100,0);
  pop()

  mnAngle = map(mn,0,60,0,360)
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(6);
  line(0,0,95,0);
  pop()

  hrAngle = map(hr % 12,0,12,0,360)
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  strokeWeight(10);
  noFill();
   
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
    
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
    
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

}