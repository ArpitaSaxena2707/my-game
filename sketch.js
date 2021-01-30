      var spaceimage,space;
      var redrocket,redrocketimage,bluerocket,blurrocketimage;
      var star,starimage;
      var r1,r2;
      var stargroup;
      var score1=0;
      var score2=0;
      var winning;
      function preload(){
        spaceimage=loadImage("images/space.jpg")
        redrocketimage=loadImage("images/red rocket.png")
        bluerocketimage=loadImage("images/blue rocket.png")
        starimage=loadImage("images/Star.png")
        winning=loadImage("images/win.jpg")
      }


         function setup() {
  createCanvas(1600,800);
 space=createSprite(800,400,1600,600)
 space.addImage(spaceimage);
 space.velocityX=-2;
 space.scale=2;
 redrocket=createSprite(500,700,20,20)
 redrocket.addImage(redrocketimage)
 redrocket.scale=0.04;
 bluerocket=createSprite(500,100,20,20)
bluerocket.addImage(bluerocketimage)
bluerocket.scale=0.25;
stargroup=createGroup();

}

function draw() {
  background(255,255,255);
  if(space.x<800){
    space.x=900;
  }
  stars()
  if(keyDown("up")){
     redrocket.y=redrocket.y-10;
  }  
  if(keyDown("down")){
    redrocket.y=redrocket.y+10;
  }
  if(keyDown("left")){
    redrocket.x=redrocket.x-10;
  }
  if(keyDown("right")){
    redrocket.x=redrocket.x+10;
  }
  if(keyDown("w")){
    bluerocket.y=bluerocket.y-10;
  }
  if(keyDown("s")){
    bluerocket.y=bluerocket.y+10;
  }
  if(keyDown("a")){
    bluerocket.x=bluerocket.x-10;
  }
  if(keyDown("d") ){
    bluerocket.x=bluerocket.x+10;
  }
 if(stargroup.isTouching(redrocket)){
   stargroup.destroyEach();
   score1=score1+1;
 }
if(stargroup.isTouching(bluerocket)){
  stargroup.destroyEach();
  score2=score2+1;
} 
if(score1==10){

  redrocket.destroy()
  bluerocket.destroy()
  stargroup.destroyEach()
 space.addImage(winning)
 space.x=800
 space.y=400 
 space.scale=0.7
  textSize(35)
  stroke("black")
  fill("black")
  text("Red Rocket WON!!!",150,50)
}
if(score2==10){
  redrocket.destroy()
  bluerocket.destroy()
  stargroup.destroyEach()
  space.addImage(winning)
  space.x=800
  space.y=400 
  space.scale=0.7
  textSize(35)
  stroke("green")
  fill("green")
  text("Blue Rocket WON!!!",150,50)
}
  drawSprites();
  textSize(15)
  stroke("white")
  fill("white")
  text("Blue Rocket:"+score2,100,100)
  text("Red Rocket:"+score1,100,200)
}
function stars(){
 if( frameCount%150==0){
  r1=random(20,1400)
  r2=random(20,600)
  star=createSprite(r1,r2,10,10)
  star.addImage(starimage)
  star.lifetime=150;
  star.scale=0.3;
  stargroup.add(star);
 }
}