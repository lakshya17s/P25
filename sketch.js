
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 
box2 = new Box(605,600,100,20);

ball = new Ball(100,400);

ground = new Ground(400,600);
;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(400);
  textSize(10);
  text("OBJECTIVE IS TO MAKE THE PAPER BALL REACH THE DUSTBIN",10,300)

  
 
  ball.display();
  box2.display();
  ground.display();
  
 
 
  KEYSSS();
  
    drawSprites();
 
}
function KEYSSS(){


if(keyDown("UP_ARROW")){
  Matter.Body.applyForce(ball.body,ball.body.position,{x :15,y :-25});
}
}




