var fixedrectangle,movingrectangle;

function setup() {
  createCanvas(800,400);
 fixedrectangle= createSprite(200, 200, 50, 50);
 movingrectangle=createSprite(400,200,60,40);
 movingrectangle.shapeColor="purple"
 fixedrectangle.shapeColor="purple"
}

function draw() {
  background(160,180,95);

  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;

  if(movingrectangle.x-fixedrectangle.x < fixedrectangle.width/2 + movingrectangle.width/2
    &&fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2 + movingrectangle.height/2 &&
    fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2 + movingrectangle.height/2){
  movingrectangle.shapeColor="red"
  fixedrectangle.shapeColor="red"
  }
  else{
    movingrectangle.shapeColor="purple"
    fixedrectangle.shapeColor="purple"
  }
  drawSprites();
}