let projectile = [];

let xPos = 0;
let yPos = 350;

let state1 = 'Game';
let state2 = 'Over';

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

let liveCounter = 3;



class Projectile {
    constructor(XPos, YPos, size) {
      this.XPos = XPos
      this.YPos = YPos
      this.size = size
      this.Up = this.YPos - (this.size / 2)
      this.Down = this.YPos + (this.size / 2)
      this.Left = this.XPos - (this.size / 2)
      this.Right = this.XPos + (this.size / 2)
    }
  }

function setup(){
    createCanvas(500, 500);
    background('silver');

    for (let i = 0; i < 100; i++) {
        let temp = new Projectile(random(0, 500), -25, random(25, 50));
        projectile.push(temp);
    }
 
 }

 function draw() {
    background('silver');
    line(0, 400, 500, 400);
    fill('orange');
    rect(xPos, yPos, 50);
    

    
    if (keyIsDown(LEFT_ARROW) || (keyIsDown(65))) { // wAsd
        if(xPos < 0){
            xPos = 0;
        } 
        xPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW) || (keyIsDown(68))) { // wasD
        if (xPos > 450) {
            xPos = 450;
            
        }
        xPos += 3;
    }
    if (keyIsDown(UP_ARROW) || (keyIsDown(87) || keyIsDown(32))) { // Wasd
        if (yPos < 0) {
            yPos = 0;
            
        }
        yPos += 3;
    }
    if (keyIsDown(DOWN_ARROW) || (keyIsDown(83))) { // waSd 
        // if trying to past barrier, set yPos to 250
        // else, allowed to go down
        if(yPos > 350){
            yPos = 350;
        }
        yPos += 3;
    }

    for (let i = 0; i < ballArray.length; i++) {
        fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
        ellipse(ballArray[i].xPos, ballArray[i].yPos, 50, 50);
 
 
        ballArray[i].yPos += ballArray[i].speedValue;
 
 
        if (ballArray[i].yPos > 525) {
            ballArray[i].yPos = -25;
        }
 
        

    
 }
}
