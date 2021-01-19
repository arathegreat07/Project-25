
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(30, 350, 20);
	ground = new Ground(400, 600, 800, 15);
	dustbin = new Dustbin(650, 580, 205, 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
  ground.display();
  dustbin.display();
  paper.display();
  
}

function keyPressed() {

	 if(keyCode === 32) {

		 Matter.Body.applyForce(paper.body, paper.body.position, {x: 66, y: -66});
	 }
}



