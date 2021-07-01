
var seaship, seaship_travelling, edges;
var seaImage;

function preload(){
seaship_travelling = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("Sea.png");
}

function setup(){
  createCanvas(1400,1000);

  //creating ship
  seaship=createSprite(200,200,1000,1000);
  seaship.addAnimation("travelling", seaship_travelling);
  edges=createEdgeSprites();
 seaship.scale=0.5;
  seaship.x=50;

 sea=createSprite(200,180,400,400);
  sea.addImage(seaImage);
  sea.velocityX=-2;
  
}

function draw() {
  background("blue");

  console.log(seaship.x);

  if(sea.x<0){
    sea.x=sea.width/2;
  }
  
  seaship.velocityX = seaship.velocityX + 0.5;
 
seaship.collide(edges[3]);
drawSprites();

}