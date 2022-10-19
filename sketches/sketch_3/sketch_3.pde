//jamie lee sketch 3

//angle variables for rotation
float ang1, ang2;

//initialize
void setup(){
    size(700, 700);
    background(0);
    key = '1';
}

void draw(){
    frameRate(60);
    if(mousePressed){
        //colors will differ based on left/right click
        //as well as location on canvas
        if(key == '1'){
            if(mouseButton == LEFT){
                stroke(mouseY, mouseX, 200);
            }
            else if(mouseButton == RIGHT){
                stroke(mouseX, 200, mouseY);
            }
            brushOne();
        }

        else if(key == '2'){
            if(mouseButton == LEFT){
                stroke(200, mouseY, mouseX);
            }
            else if(mouseButton == RIGHT){
                stroke(mouseX, 200, mouseY);
            }
            brushTwo();
        }

        else if(key == '3'){
            if(mouseButton == LEFT){
                stroke(mouseX, 200, mouseY);
            }
            else if(mouseButton == RIGHT){
                stroke(mouseX, mouseY, 200);
            }
            brushThree();
        }

    }
    //clear canvas, does not auto clear upon switching brushes
    if(key == 'c'){
        background(0);
    }
}


//base stamp
void stamp(int x, int y, float s){
  strokeWeight(s);
  line(20 + x, 20 + y, 40 + x, 20 + y);
  line(20 + x, 40 + y, 40 + x, 40 + y);
  line(20 + x, 20 + y, 40 + x, 40 + y);
  line(40 + x, 20 + y, 20 + x, 40 + y);
}

//two stamps--one that follows the cursor
//and another that mirrors it
void brushOne(){
    for(int j = 10; j <= width - 500; j += 100){
        stamp(mouseY, mouseX, 3);
        stamp(mouseX, mouseY, 3);
        rotate(HALF_PI);
    }
}

//simple circular pattern
void brushTwo(){
    frameRate(30);
    strokeWeight(1);
    pushMatrix();
    translate(mouseX, mouseY);
    for(float i = 0; i < 10; i += 0.2){
        stamp(5, 5, 1);
        rotate(radians(ang1));
    }
    popMatrix();
    ang1 += 5;
}

//similar to brush two but with outer rings
void brushThree(){
    //main matrix
    for(float j = 0; j < TWO_PI; j += PI/2){
        pushMatrix();
        translate(mouseX, mouseY);
        rotate(ang2 / j);
        stamp(20, 20, 1);
        //sub  matricies
        for(float x = 0; x < TWO_PI; x += PI/4){
            pushMatrix();
            translate(mouseX + 5, mouseY + 5);
            rotate( -ang2 / (x/2));
            stamp(10, 10, 0.5);
            popMatrix();
        }
        for(float i = 0; i < TWO_PI; i += 0.5){
            pushMatrix();
            rotate(-ang2 / - i);
            stamp(5, 5, 0.5);
            popMatrix();
        }
        //outermost ring
        translate(10/mouseX, 10/mouseY);
        stamp(10, 10, 1);
        popMatrix();
    }
    ang2 += PI;
}

