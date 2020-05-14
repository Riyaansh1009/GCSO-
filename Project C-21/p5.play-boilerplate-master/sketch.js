var wall,thickness;
var bullet,speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
 speed = random (223,321);
 weight = random (30,52);
 thickness = random(22,83);


 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = "blue";
 bullet = createSprite(10, 200, 50, 50);
 bullet.velocityX = speed;
 bullet.shapeColor = "yellow";
}

function draw() {
  background(0);
  text(speed,10,20);  
  text(weight,10,40);
  
  if(hasCollided(bullet,wall)){
      bullet.velocityX = 0
      var damage = (0.5*weight*speed*speed)/(wall.width*wall.width*wall.width);
      text(damage,10,50)
  

    if(damage < 10){
      bullet.shapeColor = rgb(0,255,0);
    }
  
  
  if(damage > 10){
    bullet.shapeColor = rgb(255,0,0)
  }
 

  
  
  drawSprites();
}}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}