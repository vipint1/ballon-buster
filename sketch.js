var PLAY = 1;
var END = 0;
var gameState = PLAY

var scene,backgroundimg

var bow,bowimg
var balloon,balloon1,balloon2,balloon3,balloon4;

var arrow,arrowimg,blueb,greenb,pinkb,redb

var score
function preload(){
  backgroundimg=loadImage("background0.png")
  
  bowimg=loadImage("bow0.png")
  
 
  balloon1= loadImage("blue_balloon0.png")
  balloon2= loadImage("green_balloon0.png")
  balloon3= loadImage("pink_balloon0.png")
  balloon4= loadImage("red_balloon0.png")
  
  arrowimg= loadImage("arrow0.png")
  
}
function setup() {
  createCanvas(400, 400);
  
  scene=createSprite(0,0,400,400)
  scene.addImage("back",backgroundimg)
  scene.scale=2.5
  
  bow=createSprite(380,220,20,50)
  bow.addImage("boe.",bowimg)
  bow.scale=1
  
  arrowsgroup=new Group()
   
  redbgroup=new Group()
  bluebgroup=new Group()
  greenbgroup=new Group()
  pinkbgroup=new Group()
  
  
  score=0;
}


function draw() {
  background(0);
  
  scene.velocityX=-3
  if (gameState===PLAY){
    
     if(scene.x<0){
   scene.x=scene.width /2
  }
  bow.y = World.mouseY
  if (frameCount%60===0){
    spawnballoons();
  }
  
  if(keyDown("space")){
    createarrows();
  }
   
 if (arrowsgroup.isTouching(greenbgroup)){
   greenbgroup .destroyEach();
   arrowsgroup.destroyEach();
   score=score+2
 }
 if (arrowsgroup.isTouching(redbgroup)){
   redbgroup .destroyEach();
   arrowsgroup.destroyEach();
   score=score+1
 }
if (arrowsgroup.isTouching(bluebgroup)){
   bluebgroup .destroyEach();
   arrowsgroup.destroyEach();
   score=score+3
 }
  if (arrowsgroup.isTouching(pinkbgroup)){
   pinkbgroup .destroyEach();
   arrowsgroup.destroyEach();
   score=score+4
  }
    
    
  }
  else if (gameState===END){
    
  }
  
 
  
  
 

drawSprites();
  
  text("SCORE : " +score,270,30)
}


function spawnballoons(){

  
 
  
  

   var rand=Math.round(random(1,4));
    switch(rand){
      case 1:credb();
            break;
      case 2:cblueb()
            break;
      case 3:cgreenb();
            break;
      case 4:cpinkb()
            break;
      default:break;
    }
}
  function credb(){
    redb=createSprite(0,Math.round(random(1,500)),10,10)
  redb.addImage(balloon4)
  redb.scale=0.1
  redb.velocityX=2;
  redb.lifetime=500
    redbgroup.add(redb)
  }
  function cblueb(){
  blueb=createSprite(0,Math.round(random(1,500)),10,10);
    blueb.addImage(balloon1)
    blueb.scale=0.1
    blueb.velocityX=2
    blueb.lifetime=500
    bluebgroup.add(blueb)
  }
  
  function cgreenb(){
    greenb=createSprite(0,Math.round(random(1,500)),10,10);
  greenb.addImage(balloon2)
  greenb.scale=0.1
  greenb.velocityX=2
  greenb.lifetime=500
  greenbgroup.add(greenb)
    
  }
function cpinkb(){
  pinkb=createSprite(0,Math.round(random(1,500)),10,10)
  pinkb.addImage(balloon3)
  pinkb.scale=1
  pinkb.velocityX=2
  pinkb.lifetime=500
  pinkbgroup.add(pinkb)
  
}
  
 


function createarrows(){
  arrow=createSprite(480,bow.y,20,10);
  arrow.scale=0.4
  arrow.addImage(arrowimg);
  arrow.velocityX=-4
  arrowsgroup.add(arrow)
}
