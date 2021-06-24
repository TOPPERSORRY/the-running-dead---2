var path,pathImage;
var player,playerAnimation;
var obstacle1,obstacle2;
function preload(){
pathImage = loadImage ("Images/images.png")
playerAnimation = loadAnimation("Images/runner-1.png"
,"Images/runner-2.png")
obstacle1= loadImage("Images/logobstacle.png")
obstacle2= loadImage("Images/fireobstacle.png")
}



function setup() {
  createCanvas(800,600);
  path = createSprite(400,250)
  path.addImage(pathImage)
  path.scale = 4;
  path.velocityY = -2;
  player = createSprite(400,500)
  player.addAnimation("running",playerAnimation)
  player.scale =0.1;
 // player.velocityY = -2;
}

function draw() {
  background("white"); 
  if(path.y<0){
    path.y = path.height/2

  }
   spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
    if (frameCount % 100 === 0){
      var obstacle = createSprite(550,100,10,40);
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
        obstacle.scale = 0.5;
        obstacle.velocityY = 2;
                break;
        case 2: obstacle.addImage(obstacle2);
        obstacle.scale = 0.3;
        obstacle.velocityY = 2;
                break;
 
                
                
}
}


}