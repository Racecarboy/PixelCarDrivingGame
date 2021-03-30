var PLAY = 1;
var END = 0;
var gameState = PLAY;
var scenery;
var sceneryanimation;
var R34;
var R34Img;
var M3GTRImg;
var PorscheImg;
var AE86Img;
var carobstacle1;
var carobstacle2;
var carobstaclesGroup;
var score=0;
var invisiblebarrier1;
var invisiblebarrier2;
var invisiblebarrier3;
var invisiblebarrier4;
var carspawnlocationselector;
var MinecraftMusic;

function preload() {
  sceneryanimation = loadAnimation("Car Background Scenery.gif")
  R34Img = loadImage("Nissan GTR R34 Pixel Car Racer (2).jpg");
  M3GTRImg = loadImage("Need For Speed Most Wanted 2005 BMW M3 GTR Iconic Car Replica Pixel Car Racer (2).jpg");
  PorscheImg = loadImage("Pixel Car Racer Porsche (2).jpg");
  AE86Img = loadImage("Toyota ae86 Pixel Car Racer (3).png");
  MinecraftMusic = loadSound('Volume Alpha - 08 - Minecraft.mp3');
}

function setup() {
  createCanvas(600, 600);
  
  scenery = createSprite(330,200);
  scenery.addAnimation("scrollingbackground",sceneryanimation);
  scenery.x = scenery.width /2;
  
  R34 = createSprite(90,355,30,15);
  R34.addImage(R34Img);
  R34.scale = 0.1;
  
  carobstaclesGroup = createGroup();
  
  invisiblebarrier1 = createSprite(300,300,600,20);
  invisiblebarrier1.visible = false;
  invisiblebarrier2 = createSprite(300,383,600,20);
  invisiblebarrier2.visible = false;
  invisiblebarrier3 = createSprite(0,300,5,600);
  invisiblebarrier3.visible = false;
  invisiblebarrier4 = createSprite(350,300,5,600);
  invisiblebarrier4.visible = false;
  
  MinecraftMusic.play();
}

function draw() {
  carspawnlocationselector = Math.round(random(1,2))
  text("score:"+score,500,50);
  
  if(gameState === PLAY){
    scenery.velocityX = -10;
    score = score+Math.round(frameCount/60);
    if (scenery.x < 0){
    scenery.x = scenery.width/1.8;
    }
    NissanSkylineGTRR34();
    spawncarobstacles();
    if(R34.isTouching(carobstaclesGroup)){
      gameState = END;
    }
  }
  else if(gameState === END){
    scenery.velocityX = 0;
    carobstaclesGroup.setVelocityXEach(0);
  }
  
  drawSprites();
}

function NissanSkylineGTRR34() {
  R34.collide(invisiblebarrier1);
  R34.collide(invisiblebarrier2);
  R34.collide(invisiblebarrier3);
  R34.collide(invisiblebarrier4);
  
  if(keyWentDown("up")){
    R34.velocityY = -4;
  }
  
  if(keyWentUp("up")){
    R34.velocityY = 0;
  }
  
  if(keyWentDown("down")){
    R34.velocityY = 4;
  }
  
  if(keyWentUp("down")){
    R34.velocityY = 0;
  }
  
  if(keyWentDown("right")){
    R34.velocityX = 8;
  }
  
  if(keyWentUp("right")){
    R34.velocityX = 0;
  }
  
  if(keyWentDown("left")){
    R34.velocityX = -8;
  }
  
  if(keyWentUp("left")){
    R34.velocityX = 0;
  }
}

function spawncarobstacles() {
  if(frameCount%60 === 0){
    if(carspawnlocationselector === 1){
      carobstacle1 = createSprite(600,355,30,15);
      carobstacle1.velocityX = -6;
      carobstacle1.lifetime = 300;
    }
    else if(carspawnlocationselector === 2){
      carobstacle2 = createSprite(600,320,30,15);
      carobstacle2.velocityX = -6;
      carobstacle2.lifetime = 300;
    }
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: carobstacle1.addImage(M3GTRImg);
        carobstacle1.scale = 0.4;
        break;
      case 2: carobstacle1.addImage(AE86Img);
        carobstacle1.scale = 0.3;
        break;
      case 3: carobstacle1.addImage(PorscheImg);
        carobstacle1.scale = 0.6;
        break;
      case 4: carobstacle2.addImage(M3GTRImg);
        carobstacle2.scale = 0.4;
        break;
      case 5: carobstacle2.addImage(AE86Img);
        carobstacle2.scale = 0.3;
        break;
      case 6: carobstacle2.addImage(PorscheImg);
        carobstacle2.scale = 0.6;
        break;
      default:break;
    }
    carobstaclesGroup.add(carobstacle1);
    carobstaclesGroup.add(carobstacle2);
  }
  //carobstacle1.addImage(AE86Img);
  //carobstacle1.scale = 0.3;
  //carobstacle2.addImage(M3GTRImg);
  //carobstacle2.scale = 0.4;
  //carobstacle3 = createSprite(400,320,30,15);
  //carobstacle3.addImage(PorscheImg);
  //carobstacle3.scale = 0.6;
}

function carcrash() {
  
}