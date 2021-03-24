
var engine,world;
var weight,speed
var car,wall 

function setup() {
  createCanvas(1600,400);
  fill(80,80,80);
  wall=createSprite(1500,200,60,height/2);  
  
  car=createSprite(50,200,50,50);
  speed=random(55,90);
  weight=random(400,1500)

  
  car.velocityX=speed
  
  
}

function draw() {

  
  if(car.isTouching(wall)){
    for(var x = 0;x<1;x=x+1){
    deformation();
    }
    car.velocityX=0
    
  }
  background(255,255,255);  
  drawSprites();
}

function deformation(){
if((0.5*weight*speed*speed)/22500==0){
 car.shapeColor=color(0,0,0)
}else if((0.5*weight*speed*speed)/22500<100&&(0.5*weight*speed*speed)/22500>0){
  car.shapeColor=color(0,255,0)
}else if((0.5*weight*speed*speed)/22500>100&&(0.5*weight*speed*speed)/22500<180){
  car.shapeColor=color(220,220,0)
}else if((0.5*weight*speed*speed)/22500>180){
  car.shapeColor=color(255,0,0);
}

}