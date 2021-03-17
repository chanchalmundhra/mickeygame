var background,bgimg,start,iconimg
var gameState = 0;

function preload(){
bgimg=loadImage("starting.png")
iconimg=loadAnimation("frame1.gif","frame2.gif","frame3.gif","frame4.gif")
}

function setup() {
  createCanvas(1200,900);
 start=createSprite(250,100,10,10)
 start.addAnimation("moving",iconimg)
  start.scale=1.5

 background= createSprite(550, 350, 200, 25);
 background.addImage(bgimg)
 background.scale=1.6;

}

function draw(){
 // background("white")
  if(gameState===0){
    background.visible=true;
    start.visible=true;
  }  

if(gameState===1){
  background.visible=false
  start.visible=false
}
if(mousePressedOver(start)&&gameState===0){
  gameState=1
}

  drawSprites()

 
}
