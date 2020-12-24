var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(30,200,100,10);
  bullet.shapeColor = "blue";
  bullet.velocityX = 3;
  wall = createSprite(1500,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,38);
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor= "red";
    }

    if(damage<10){
      wall.shapeColor= "green";
    }
  }


  drawSprites();
} 

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
 return false
}