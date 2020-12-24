
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Constraint = Matter.Constraint;

var boyImage;
var num = 3

function preload()
{
 	boyImage = loadImage("boy.png");
}

function setup() {
	 createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(600, 690);

	tree1 = new tree(930, 400);

	mango1 = new mango(820, 240, 5);
	mango2 = new mango(890, 210, 5);
	mango3 = new mango(980, 180, 5);
	mango4 = new mango(1040, 230, 5);
	mango5 = new mango(1130, 290, 5);
	mango6 = new mango(840, 310, 5);
	mango7 = new mango(760, 310, 5);
	mango8 = new mango(940, 280, 5);
	mango9 = new mango(1030, 330, 5);

	myStone = new stone(100, 500, 10);
	shooter =  new launcher(myStone.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("SkyBlue");
  push ()
  strokeWeight(num);
  line(120, 500, myStone.body.position.x, myStone.body.position.y);
  pop ();
  image(boyImage, 100, 450, 150, 300);
  
  tree1.display();
  ground1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  myStone.display();

  detectCollision(myStone, mango1)
  detectCollision(myStone, mango2)
  detectCollision(myStone, mango3)
  detectCollision(myStone, mango4) 
  detectCollision(myStone, mango5)
  detectCollision(myStone, mango6)
  detectCollision(myStone, mango7)
  detectCollision(myStone, mango8)
  detectCollision(myStone, mango9)

  drawSprites();
  fill ("DarkGreen");
  textSize(20);
  text("Press space to Retry", 50, 30)
  }
 


function mouseDragged(){
	myStone.body.position.x = mouseX;
	myStone.body.position.y = mouseY;
}

function mouseReleased(){
	shooter.throw();
	num = 0;

}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(myStone.body, {x: 100, y: 500})
    shooter.attach(myStone.body);
    num = 3;
  }
}

function detectCollision(object1, object2){

  var aPos = object1.body.position;
  var bPos = object2.body.position;

	if(aPos.x - bPos.x< object1.radius + object2.radius && 
    bPos.x - aPos.x < object1.radius + object2.radius &&
    aPos.y - bPos.y< object1.radius + object2.radius && 
    bPos.y - aPos.y < object1.radius + object2.radius ){

    Matter.Body.setStatic(object2.body, false);
  }
}





