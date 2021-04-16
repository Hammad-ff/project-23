var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    
	boxLeft=createSprite(260,610,20,100);
	boxLeft.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(110,610,20,100,{isStatic:true});
	World.add(world,boxLeftBody);

	boxBase=createSprite(370,650,200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody=Bodies.rectangle(190,635,200,20,{isStatic:true});
	World.add(world,boxBottomBody);

	boxRight=createSprite(480,610,20,100);
	boxRight.shapeColor=color(255,0,0);

	boxRightBody=Bodies.rectangle(270,610,20,100,{isStatic:true});
	World.add(world,boxRightBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  Matter.Body.setStatic(packageBody,false);
    
  }
}



