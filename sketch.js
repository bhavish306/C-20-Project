var car,wall;
var speed,weight;
var deformation;

function setup(){
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,50, height/2);

  speed = random(55,90);
  weight = random(400,1500);
}

function draw(){
  
  background("black");

  car.velocityX = speed;
  deformation = ((0.5*car.velocityX*weight*car.velocityX)/22500);

  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    if(deformation < 101){
      car.shapeColor = "green";
    }

    else if(deformation < 181){
      car.shapeColor = "yellow";
    }

    else if(deformation < 10000000000){
      car.shapeColor = "red";
    }
  }

  else{
    car.shapeColor = "white";
  }

    stroke(car.shapeColor);
    fill(car.shapeColor);
    textSize(20);
    text(`Deformation = ${round(deformation)}`, 100,100);
  
  drawSprites();
}