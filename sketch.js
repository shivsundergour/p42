var iss,spacecraft,bgimg,issimg,scimg,sc2img,sc3img,sc4img,box;
var hasdocked = false ;
function preload(){
bgimg = loadImage("spacebg.jpg")
scimg = loadImage("spacecraft1.png")
issimg = loadImage("iss.png")
sc2img = loadImage("spacecraft2.png")
sc3img = loadImage("spacecraft3.png")
sc4img = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.65
  box = createSprite(288,135,30,30)
  box.visible = false ;
 
}
function draw() {
  background(bgimg);  
  if(!hasdocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    if(spacecraft.isTouching(box)){
       hasdocked = true ;
    }
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2
      spacecraft.addImage(scimg)
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(sc2img)
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x + 2
      spacecraft.addImage(sc4img)
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x - 2
      spacecraft.addImage(sc3img)
    }
    console.log(spacecraft.x)
    console.log(spacecraft.y)
  }
  drawSprites();
  if(hasdocked===true){
    spacecraft.x =288;
    spacecraft.y =186;
    textSize(30)
    fill("red")
    text("docking successful !",250,300)
  }
}