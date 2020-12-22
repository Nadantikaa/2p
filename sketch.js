
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,mango1,mango2,mango3,mango4,mango5,chain;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	
	rock = new stone(320,225);
	chain = new SlingShot(rock.body,{x:320 , y:225});
	mango1 = new mango(900,150,8);
	mango2 = new mango(950,120,10);
	mango3 = new mango(1000,100,7);
	mango4 = new mango(950,60,9);
	mango5 = new mango(1050,60,6);
	mango6 = new mango(1100,40,6);
	mango7 = new mango(1000,80,8);
	
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}



function draw() {
	
	  

    rectMode(CENTER);
    background("lightblue");
    push();
	rect(width/2,400,width,20);
	
	
	drawSprites();
	
	text ('press space and collect more yummy mangoes',45,30);
    
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);

	chain.display();
	rock.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	detectcollision(rock,mango1);
	detectcollision(rock,mango2);
	detectcollision(rock,mango3);
	detectcollision(rock,mango4);
	detectcollision(rock,mango5);




	
	
}
function detectcollision(lrock,lmango){
var distance = dist(lrock.body.position.x,lrock.body.position.y,lmango.body.position.x,lmango.body.position.y)
if(distance <= 50){
Body.setStatic(lmango.body,false);
}
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}

function keyPressed(){
if (keyCode === 32){
Matter.Body.setPosition(rock.body,{x:320,y:255});
chain.attach(rock.body);
}
}