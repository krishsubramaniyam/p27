
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

  drawSprites();
 
}



