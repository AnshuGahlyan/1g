
var ba,baImage,ba2Image,ba3Image,ba4Image
    
var ba6Image,ba5Image;
var start,startImage,start2,start2Image,sign,signImage;

var loading;
var SERVE1 = 0;
var SERVE2 =  1;
var SERVE3 = 2;
var SERVE4 = 3;
var SERVE5 = 4;
var SERVE6 = 5;
var SERVE7 = 6;
var gameState  = 0;
var score = 0;
var health = 3;
var l = 0;
var l1,l2;
var i1,i2,i3;
var vi1,vi2,vi3;
var level1,level1Image,level2,level2Image,level3,level3Image;
var lock1,lock1Image,lock2,frameImage,frame1,frame2,frame3;
var p1234;
var bgm;
var ground;
var p = 0;

function preload(){
baImage = loadImage("background-style-matrix-skull-skull-digital-matrix-concept-digital-death-artificial-intelligence-cyber-147708111.gif");
  startImage = loadImage("7rqk.png");
  bgm  = loadImage("bgm.png");
  frameImage = loadImage("frame.gif");
  i1 = loadImage("1.png");
  i2 = loadImage("2.png");
  i3 = loadImage("3.png");


 
 
  signImage = loadImage("f9f86a799fac2ef507dd67fec78ebcd0.gif");
  ba2Image = loadImage("benedict-kumi-loadscreen-juggle.gif");
  p1234 = loadImage("1234.jpg");
  ba3Image = loadImage("1603307982256f4e1f103363b711880a.gif");
  start2Image = loadImage("dream_league_soccer_hack_button.png");
 ba4Image = loadImage("WelcomeAnimated.gif");
 ba5Image = loadImage("stl.gif");
 level1Image = loadImage("0.png");
  level2Image = loadImage("b6b98a0e86137d6c1cac9ad78234f785.jpg");
  level3Image = loadImage("960x0.jpg");
lock1Image = loadImage("SpiffyFrayedBantamrooster-small.gif");
  ba6Image= loadImage("4cde18637bad32ab479bed4ea5486288.jpg");

 

  

 
}


function setup() {
  createCanvas(1340,640);

 ba = createSprite(670,320,10,10);
  ba.addImage(baImage);  
  ba.scale = 3;
  ba.visible = false;
  start = createSprite(1200,500,10,10);
  start.addImage(startImage);
  start.scale = 0.5;
  start.visible = false;
  start.setCollider("circle",0,0,150);
  start.debug = false;
  sign = createSprite(670,175,10,10);
  sign.addImage(signImage);
  sign.visible = false;
  sign.setCollider("rectangle",0,0,210,370);
  sign.debug = false;
  l1 = createSprite(50,50,10,10);
  l1.visible = false;
 

 
  l2 = createSprite(100,50,10,10);
  l2.visible = false;

  start2 = createSprite(500,950,10,10);
  start2.addImage(start2Image);
  start2.setCollider("rectangle",0,0,240,95);
  start2.debug = true;
  start2.visible = false;
  gameState = SERVE1;
  vi1 = createSprite(250,80,10,10);
  vi1.visible = false;
  vi1.addImage(i1);
  vi1.scale = 0.1;
  vi2 = createSprite(1090,80,10,10);
  vi2.visible = false;
  vi2.addImage(i2);
  vi2.scale = 0.03;
  vi3 = createSprite(670,240,10,10);
  vi3.visible = false;
  vi3.addImage(i3);
  vi3.scale = 0.2;
  level1 = createSprite(250,260,10,10);
  level1.addImage(level1Image);
  level1.visible = false;
  level1.scale = 0.5;

  level2 = createSprite(1090,260,10,10);
  level2.addImage(level2Image);
  level2.scale = 0.2;
   level2.visible = false;
  
   level3 = createSprite(670,460,10,10);
  level3.addImage(level3Image);
  level3.scale = 0.4;
   level3.visible = false;
  
  lock1 = createSprite(1090,260,10,10);
  lock1.addImage(lock1Image);
  lock1.visible = false;
  lock1.scale = 0.8;

  lock2 = createSprite(670,460,10,10);
  lock2.addImage(lock1Image);
  lock2.visible = false;
  lock2.scale = 0.8;
  frame1 = createSprite(250,260,10,10);
  frame1.addImage(frameImage);
  frame1.visible = false;
  frame1.scale = 0.35;

  frame2 = createSprite(1090,260,10,10);
  frame2.addImage(frameImage);
  frame2.visible = false;

  frame3 = createSprite(670,460,10,10);
  frame3.addImage(frameImage);
  frame3.visible = false;

  
   ground = createSprite(670,600,1340,5);
  ground.visible = false;
  
  
}

function draw() {
  
 

 background(0);
 drawSprites();
 fill("green");
 textSize(20);


 
  if(gameState === SERVE1){

    textSize(200);
    textFont("Mistral");
    fill("red");
    text("You Are In ",370,150);
    ba.visible = true;
    start.visible = true;
  
    if(mousePressedOver(start)){
      gameState = 1;
     
    }
 
  }
  if(gameState === SERVE2){
    ba.addImage(p1234);
    start.lifetime  = 1;
    start.visible  =false;
    sign.visible = true;


    ba.x= 670;
    ba.y = 300;
    ba.scale = 1;
    textSize(90);
    textFont("Mistral");
    if(l === 0){
      fill("white");
      text("     are on a ",200,550);
      l = 1;
    }
    if(l === 1){
      fill("black");
      text("     are on a ",200,550);
      l = 0;
    }

    fill("red");
    text("You",185,550);
    text("Dangerous mission",575,550);
      
    if(mousePressedOver(sign)){
        gameState = SERVE3;
      }
     
  }
if(gameState === SERVE3){


  ba.addImage(ba2Image);
  sign.visible = false;
  ba.x = 670;
  ba.y = 320;
  l1.velocityX = 0.5;
  if(l1.isTouching(l2)){
    gameState = SERVE4;
    l1.velocityX = 0;
  }
 
}
  if(gameState === SERVE4){
    ba.addImage(ba3Image);
    ba.x = 280;
   
    start2.visible = true;
    start2.x = 900;
    start2.y = 320;
    start2.scale = 1;
    if(mousePressedOver(start2)){
      gameState = SERVE5;
    }
    
  }
  if(gameState === SERVE5){
   start2.visible = false;
    ba.addImage(ba4Image);
    start2.lifetime = 1;
    ba.x = 670;
    ba.y = 100;

    textSize(30);
    textFont("Agency FB");
    fill("Green")
    text("*You are stucked in the Trap of the Blackhat Hackers in The DarkWeb.",100,200);
    text("***To Protect Yourself and Your Data From them. You have to Hack them and destroy The Whole DarkWeb.",100,300);
    text("****To Do These You Have to Complete Three Task One by One.",100,400);
     text("*****To Start Press H.",100 ,500);
   
   if(keyDown("H")){
     gameState = SERVE6;
   }
  }
     
  if(gameState === SERVE6){
    start2.visible = false;
    start2.lifetime = 1;
          textSize(50);
    textFont("Mistral");
    fill("blue");
    text("Three Level = Three Life Risk!",450,70);
    ba.addImage(ba5Image);
    ba.x = 670;
    ba.y = 320;
    ba.scale = 2.5;
    frame1.visible = true;
    frame1.scale = 0.35;
    frame2.visible = true;
    frame2.scale = 0.38;
    frame3.visible = true;
    frame3.scale = 0.5;
    level1.visible = true;
    level2.visible = true;
    level3.visible = true;
    vi1.visible = true;
    vi2.visible = true;
    vi3.visible = true;
    
    lock1.visible = true;
    lock2.visible = true;
    frame3.depth = lock2.depth;
    lock2.depth = lock2.depth+1;
    frame2.depth = lock1.depth;
    lock1.depth = lock1.depth+1;
    
  
    if(mousePressedOver(lock1)|| mousePressedOver(lock2)|| mousePressedOver(level2)|| mousePressedOver(level3)){
           textSize(50);
    textFont("Agency FB");
    fill("red");
      text("First Unlock The Previous Level",430,130);
    }
 
      
       if(mousePressedOver(level1)){
    
        location.href = 'https://anshugahlyan.github.io/2g/index.html';
        
     gameState = SERVE7;
           p =1;
           ba.addImage(bgm);
           ba.scale = 0.55; 
           ba.x = 670;
           ba.y  = 320;
           level1.visible = false;
       level2.visible = false;
       level3.visible = false;
       vi1.visible = false;
       vi2.visible = false;
       vi3.visible = false;
       
       lock1.visible = false;
       lock2.visible = false;
       frame1.visible = false;
     
       frame2.visible = false;
     
       frame3.visible = false; 
     
       }
      
   
        
     
       
    
  }
   



}