var nothing
function setup() {
  createCanvas(1280,609);
  nothing = createSprite(100,200,100,100);
  nothing.shapeColor = "red";
}

function draw() 
{
  background("orange");
if(keyIsDown(RIGHT_ARROW)){
nothing.x=nothing.x+5;  

}
if(keyIsDown(LEFT_ARROW)){
  nothing.x=nothing.x-5;  
  
  }
  if(keyIsDown(UP_ARROW)){
    nothing.y=nothing.y-5;  
    
    }
    if(keyIsDown(DOWN_ARROW)){
      nothing.y=nothing.y+5;  
      
      }
drawSprites();
}




