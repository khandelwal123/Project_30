
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	hexagonImg = loadImage("Hexagon.png");
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400, 390, 800, 20);
	stand = new Ground(400, 320, 220, 20);
	stand2 = new Ground(670, 220, 180, 20);

	block1 = new Box(320, 300, 40, 40);
	block2 = new Box(360, 300, 40, 40);	
	block3 = new Box(400, 300, 40, 40);	
	block4 = new Box(440, 300, 40, 40);	
	block5 = new Box(480, 300, 40, 40);	
	block6 = new Box(340, 260, 40, 40);
	block7 = new Box(380, 260, 40, 40);	
	block8 = new Box(420, 260, 40, 40);
	block9 = new Box(460, 260, 40, 40);
	block10 = new Box(360, 220, 40, 40);
	block11 = new Box(400, 220, 40, 40);
	block12 = new Box(440, 220, 40, 40);
	block13 = new Box(380, 180, 40, 40);
	block14 = new Box(420, 180, 40, 40);
	block15 = new Box(400, 140, 40, 40);

	blocks1 = new Box(610, 200, 40, 40);
	blocks2 = new Box(650, 200, 40, 40);
	blocks3 = new Box(690, 200, 40, 40);
	blocks4 = new Box(730, 200, 40, 40);

	blocks5 = new Box(630, 160, 40, 40);
	blocks6 = new Box(670, 160, 40, 40);
	blocks7 = new Box(710, 160, 40, 40);

	blocks8 = new Box(650, 120, 40, 40);
	blocks9 = new Box(690, 120, 40, 40);

	blocks10 = new Box(670, 80, 40, 40);

	polygon_options = {
		density : 1.2,
		restitution : 0
	}

	polygon = Bodies.circle(100, 200, 20, polygon_options);
	World.add(world, polygon);

	sling = new Sling(this.polygon, {x:100, y:200});
	
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background("black");

	ground.display();
	stand.display();
	stand2.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	blocks1.display();
	blocks2.display();
	blocks3.display();
	blocks4.display();
	blocks5.display();
	blocks6.display();
	blocks7.display();
	blocks8.display();
	blocks9.display();
	blocks10.display();

	imageMode(CENTER);
	image(hexagonImg, polygon.position.x, polygon.position.y, 40, 40);

	stroke("white");
	textSize(30);
	textFont("Times New Roman");
	text("Drag the polygon to destroy the boxes", 165, 30);
	textSize(20);
	text("Press space to hit again", 605, 365);

	drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY}); 
}
  
function mouseReleased(){
	sling.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(this.polygon, {x:100, y:200});
		sling.attach(this.polygon);
	}
  }