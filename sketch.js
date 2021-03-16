
var engine,world;
var weight,speed,calculation
var car,wall 

function setup() {
  createCanvas(1600,400);
  fill(80,80,80);
  wall=createSprite(1500,200,60,height/2);  
  
  car=createSprite(50,200,50,50);
  speed=random(55,90);
  weight=random(400,1500)
  
  car.velocityX=speed
  deformation();
  
}

function draw() {

  calculation=(0.5*weight*speed*speed)/22500
  if(car.isTouching(wall)){
    car.velocityX=0
    
  }
  background(255,255,255);  
  drawSprites();
}

function deformation(){
if(calculation==0){
 car.shapecolor =color(0,0,0)
}else if(calculation<100&&calculation>0){
  car.shapecolor =color(0,255,0)
}else if(calculation>100&&calculation<180){
  car.shapecolor =color(220,220,0)
}else if(calculation>180){
  car.shapecolor =color(255,0,0)
}

}