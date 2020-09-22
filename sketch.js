var moving
var still




function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 200, 50, 50);
still = createSprite(200,200,50,50)

moving.shapeColor = "green"
still.shapeColor = "green"
}

function draw() {
  background("maroon");  
  moving.x = mouseX;
  moving.y = mouseY;
  
  if(moving.x - still.x <= moving.width/2 + still.width/2 
    && still.x - moving.x <= moving.width/2 + still.width/2 &&
    still.y - moving.y <= moving.height/2 + still.height/2 &&
    moving.y - still.y <= moving.height/2 + still.height/2){
   
      moving.shapeColor = "black"
    still.shapeColor = "white"
    }
  else{
    moving.shapeColor = "green"
    still.shapeColor = "green"
  }
  
  
    drawSprites();
}