var moving;
var Alpha
var Beta
var fixed;

function setup() {
  createCanvas(800,400);
   fixed = createSprite(400, 200, 50, 50);
   moving = createSprite(400,200,50,50);
   Alpha = createSprite(100,200,50,50);
   Beta = createSprite(200,200,50,50);
   
}

function draw() {
  background(255,255,255);  
  moving.x = mouseX;
  moving.y = mouseY;

if(isTouching(moving,Beta)){

 moving.shapeColor = "red";
Beta.shapeColor = "blue";
}
if(isTouching(moving,Alpha)){
  
  moving.shapeColor = "white";
Alpha.shapeColor = "black";
}
if(isTouching(moving,fixed)){

  moving.shapeColor = "orange";
fixed.shapeColor = "cyan";
}

  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x<object1.width/2 + object2.width/2 
    && object2.x - object1.x< object1.width/2 + object2.width/2
    && object1.y - object2.y< object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
      return true
  }

  else{
 return false
  }

}