
function setup() {
  createCanvas(windowWidth-20,windowHeight-20);
Lbutton=createButton("⬅");
Rbutton=createButton("----ᐳ");
Lbutton.position(windowWidth/20,windowHeight*7/8);
Rbutton.position(windowWidth*9/10,windowHeight*7/8);
Bot=createSprite(windowWidth/2,windowHeight*6/7);
}

function draw() {
  background(255);  
 
drawSprites();
}
