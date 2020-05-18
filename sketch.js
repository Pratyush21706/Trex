var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,obstacles,clouds,clouds_anime,obstacles_anime1,obstacles_anime2,obstacles_anime3,obstacles_anime4,obstacles_anime5,obstacles_anime6;
var cloudsGroup,obstaclesGroup;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  obstacles_anime1 = loadImage("obstacle1.png");
    obstacles_anime2 = loadImage("obstacle2.png");
    obstacles_anime3 = loadImage("obstacle3.png");
    obstacles_anime4 = loadImage("obstacle4.png");
    obstacles_anime5 = loadImage("obstacle5.png");
    obstacles_anime6 = loadImage("obstacle6.png");
  
  
  trex_collided = loadImage("trex_collided.png");
  clouds_anime = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("black");
  spawnClouds();
spawnObstacles ();
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
  console.log(mouseY)
}

function spawnClouds (){
if(frameCount%50 ===0){
  clouds = createSprite(500,random(50,125),20,20);
  clouds.addImage(clouds_anime);
  clouds.scale = 0.7;
  clouds.velocityX = -5;
  clouds.lifetime = 134;
  clouds.depth = trex.depth-1;
cloudsGroup.add(clouds);
}
}
function spawnObstacles (){
if(frameCount%60 ===0){
  obstacles = createSprite(500,160,20,20);
  obstacles.velocityX = -5;
  var randomN = Math.round(random(1,6));
  switch(randomN){
    case 1: obstacles.addImage(obstacles_anime1);
      break;
       case 2: obstacles.addImage(obstacles_anime2);
      break;
       case 3: obstacles.addImage(obstacles_anime3);
      break;
       case 4: obstacles.addImage(obstacles_anime4);
      break;
       case 5: obstacles.addImage(obstacles_anime5);
      break;
       case 6: obstacles.addImage(obstacles_anime6);
      break;
      default:break;
  }
      obstacles.scale = 0.5;
  obstacles.lifetime = 134;
  obstacles.depth = trex.depth-1;
cloudsGroup.add(obstacles);
}
}
