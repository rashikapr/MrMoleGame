
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  

}

function setup(){
  createCanvas(600,200);
  trex = createSprite(100,150,20,40);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  edges = createEdgeSprites();
  
  
  
  //create a trex sprite
 
}

function draw(){
  //set background color
  background("black");
  console.log(trex.y);nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
  //to make trex jump on press of space key
  if(keyDown("space")){
    trex.velocityY = -10;
  }

//to give gravity to trex
  trex.velocityY += 0.5;
  //to prevent the trex from falling down
  trex.collide(edges[3]);
  drawSprites();
  

}
