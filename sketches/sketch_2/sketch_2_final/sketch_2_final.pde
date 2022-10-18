//jamie lee - sketch 2
//initialize pattern number (out of 5)
int pattern = 1;
//misc variables for certain patterns
float ang;
int xPos, yPos, sRan, cRan;

void setup(){
    size(800, 800);
}

//resetting certain parameters that may be changed by patterns
//and also the else if statements that allow it to cycle
void draw(){
    background(0);
    stroke(255);
    frameRate(60);
    if(pattern == 1){
        patternOne();
    }
    else if(pattern == 2){
        patternTwo();
    }
    else if(pattern == 3){
        noCursor();
        patternThree();
    }
    else if(pattern == 4){
        patternFour();
    }
    else if(pattern == 5){
        patternFive();
    }
}

//cycling thru patterns
void mousePressed(){
    pattern++;
    if(pattern > 5){
        pattern = 1;
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

//pattern 1
void patternOne(){
    int x1 = 60;
    for(int j = 75; j < 700; j += 525){
        for(int i = 50; i <= width - 120; i += 20){
            stamp(10 + i, j, 1.5);
        }
    }
    for(int j = 60; j < 600; j += 20){
        stamp(x1, j, 1.5);
        x1 += 23;
    }
    //reinitialize
    x1 = 60;
    for(int j = 600; j > 60; j -= 20){
        stamp(x1, j, 1.5);
        x1 += 23;
    }
}

//pattern 2
void patternTwo(){
    for(int j = 50; j <= width - 100; j += 30){
        //randomizing colors
        for(int i = 50; i <= width - 100; i += 40){
            stroke(int(random(255)), int(random(255)), int(random(255)));
            stamp(j, i, 2);
        }
    }
}

//pattern 3
void patternThree(){
    for(int j = 50; j <= width - 100; j += 50){
        for(int i = 50; i <= width - 100; i += 50){
            //change color with mouse movement
            stroke(255 - mouseX, pmouseX, mouseY);
            stamp(j, i, 1);
        }
    }
    //stamp to follow mouse cursor with opposite color
    for(int j = 10; j <= width - 500; j += 100){
        stroke(mouseY, 200, mouseX);
        //two stamps--one that follows the cursor
        //and another that mirrors it
        stamp(mouseY, mouseX, 3);
        stamp(mouseX, mouseY, 3);
        rotate(HALF_PI);
    }
}

//pattern 4
void patternFour(){
    //center the origin
    translate(400, 400);
    for(int j = 0; j < 10; j++){
        rotate(radians(ang));
        //multiple rotating stamps, stroke weight is also
        //randomized to add variety
        for(int i = 1; i < 100; i += 10){
            stroke(int(random(50, 250)));
            stamp(i * j, i * j, int(random(1, 5)));
        }
    }
    //increment to spin faster
    ang += 0.5;
}

//pattern 5
void patternFive(){
    //adjust frame rate bc it's too fast otherwise
    frameRate(10);
    //randomizing appearance of stamp
    for(int j = 0; j < 300; j++){
        xPos = int(random(800));
        yPos = int(random(800));
        sRan = int(random(4));
        cRan = int(random(255));
        stroke(cRan);
        translate(xPos, yPos);
        stamp(int(random(20)), int(random(20)), sRan);
    }
}
