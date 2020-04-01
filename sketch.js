var fixedRect,fixedRect2, movingRect, movingRect2;

var collisionDistanceX, actualDistanceX , collisionDistanceY , actualDistanceY;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 0, 100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 2;
  movingRect = createSprite(200, 400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -2;

  fixedRect2 = createSprite(0, 200, 100, 50);
  fixedRect2.shapeColor = "red";
  fixedRect2.velocityX = 2;
  movingRect2= createSprite(400, 200, 80, 30);
  movingRect2.shapeColor = "red";
  movingRect2.velocityX = -2;
}


function draw() {
  background(0); 

bounceOff(fixedRect,movingRect);

bounceOff(fixedRect2,movingRect2);


  drawSprites();
}

