var sea,ship;
var seaImage,shipImage;

function preload(){
  seaImage = loadImage("sea.png");
  shipImage = loadAnimation("ship-1.png","ship-1.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("travellingShip",shipImage);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}

