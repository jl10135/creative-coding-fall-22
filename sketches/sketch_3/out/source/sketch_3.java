/* autogenerated by Processing revision 1286 on 2022-10-18 */
import processing.core.*;
import processing.data.*;
import processing.event.*;
import processing.opengl.*;

import java.util.HashMap;
import java.util.ArrayList;
import java.io.File;
import java.io.BufferedReader;
import java.io.PrintWriter;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.IOException;

public class sketch_3 extends PApplet {

//jamie lee sketch 3

//angle variables for rotation
float ang1, ang2;

//initialize
 public void setup(){
    /* size commented out by preprocessor */;
    background(0);
    key = '1';
}

 public void draw(){
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
 public void stamp(int x, int y, float s){
  strokeWeight(s);
  line(20 + x, 20 + y, 40 + x, 20 + y);
  line(20 + x, 40 + y, 40 + x, 40 + y);
  line(20 + x, 20 + y, 40 + x, 40 + y);
  line(40 + x, 20 + y, 20 + x, 40 + y);
}

//two stamps--one that follows the cursor
//and another that mirrors it
 public void brushOne(){
    for(int j = 10; j <= width - 500; j += 100){
        stamp(mouseY, mouseX, 3);
        stamp(mouseX, mouseY, 3);
        rotate(HALF_PI);
    }
}

//simple circular pattern
 public void brushTwo(){
    frameRate(30);
    strokeWeight(1);
    pushMatrix();
    translate(mouseX, mouseY);
    for(float i = 0; i < 10; i += 0.2f){
        stamp(5, 5, 1);
        rotate(radians(ang1));
    }
    popMatrix();
    ang1 += 5;
}

//similar to brush two but with outer rings
 public void brushThree(){
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
            stamp(10, 10, 0.5f);
            popMatrix();
        }
        for(float i = 0; i < TWO_PI; i += 0.5f){
            pushMatrix();
            rotate(-ang2 / - i);
            stamp(5, 5, 0.5f);
            popMatrix();
        }
        //outermost ring
        translate(10/mouseX, 10/mouseY);
        stamp(10, 10, 1);
        popMatrix();
    }
    ang2 += PI;
}


  public void settings() { size(700, 700); }

  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch_3" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}