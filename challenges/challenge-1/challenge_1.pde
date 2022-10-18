
int xLoc, yLoc;
int shapeWidth = 50;

int incrementX;

boolean onRight;
boolean onBottomRight;
boolean onBottomLeft;

void setup(){
  onRight = false;
  onBottomRight = false;
  onBottomLeft = false;
  size(900, 900);
  xLoc = 0;
  yLoc = 0 + shapeWidth;
  incrementX = 15;
  
}

void draw(){
  background(0);
  
  stroke(0, 200, 127);
  strokeWeight(2);
  fill(200, 127, 200);
  ellipse(xLoc, yLoc, shapeWidth, shapeWidth);
  
  if(xLoc < (width - (shapeWidth * 0.5))){
    //xLoc++;
    //xLoc += 5;
    xLoc = xLoc + incrementX;
    if(xLoc == width - incrementX){
      onRight = true;
    }
  }
  
 
  
  //else if(xLoc == 885 && yLoc < 750){
  //  yLoc += incrementX;
  //}
  
  //else if(yLoc == 755){
  //  xLoc -= incrementX;
  //}
  
  
  print("x is: ");
  println(xLoc);
  print("y is: ");
  println(yLoc);
  print("onRight: ");
  println(onRight);
  print("onBottomRight: ");
  println(onBottomRight);
  print("onBottomLeft: ");
  println(onBottomLeft);
  
  
}
