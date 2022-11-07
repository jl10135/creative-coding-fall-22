function setup(){
  createCanvas(800, 800);
}

function draw(){
  background(220);
  downstage();
}

function downstage(){
  //downstage red lines & catwalk
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 575, 800, 575);
  line(380, 575, 360, 675);
  line(420, 575, 440, 675);

  //catwalk curves
  noFill();
  bezier(440, 677, 490, 680, 700, 665, 800, 650);
  bezier(360, 677, 310, 680, 200, 665, 0, 650);
  bezier(0, 725, 350, 760, 450, 760, 800, 725);

  //yellow lining
  stroke(255, 255, 0);
  line(50, 570, 750, 570);
  line(0, 475, 800, 475);

  bezier(443, 672, 490, 675, 700, 660, 800, 645);
  bezier(357, 672, 310, 675, 200, 660, 0, 645);
}

function hearts(){
  translate(width / 2, height / 2);
}