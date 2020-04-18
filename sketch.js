var fixedRect, movingRect;
 var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green"
  movingRect = createSprite(300,200,40,90);
  movingRect.shapeColor = "green"
gameObject1 = createSprite(100,200,30,80);
gameObject2 = createSprite(300,200,50,40);
gameObject1.shapeColor = "blue"
gameObject2.shapeColor = "black"
gameObject1.velocityX =  3
gameObject2.velocityX = -3

gameObject3 = createSprite(100,200,30,80);
gameObject4 = createSprite(100,100,50,40);
gameObject3.shapeColor = "orange"
gameObject4.shapeColor = "pink"
gameObject3.velocityY =  -3
gameObject4.velocityY = 3
}

function draw() {
  background(255,255,255);
 // gameObject1.y =  mouseY ;
 // gameObject1.x = mouseX ;

  if (isTouching(gameObject1,gameObject2)){
gameObject1.shapeColor = "red"
gameObject2.shapeColor = "red"
  }
  else {
  	gameObject1.shapeColor = "blue"
  	gameObject2.shapeColor = "black"
  }
  bounceoff(gameObject3,gameObject4)
  bounceoff(gameObject1,gameObject2)
  drawSprites();
} 
function  isTouching(object1,object2){
	if (object1.x - object2.x < object2.width/2 + object1.width/2
 && object2.x - object1.x < object2.width/2 + object1.width/2 
 && object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2) 
  	{
  	 return true

  	 }
  	  else {
  	   return false
  	     }

}
function bounceoff(object1,object2){
	if (object1.x - object2.x < object2.width/2 + object1.width/2
 && object2.x - object1.x < object2.width/2 + object1.width/2)
 {
 object1.velocityX = object1.velocityX*(-1)
 object2.velocityX = object2.velocityX*(-1)
 } 
 if(object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2) {

  	object1.velocityY = object1.velocityY*(-1)
 object2.velocityY = object2.velocityY*(-1)

 }
}