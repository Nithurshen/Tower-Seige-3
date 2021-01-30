const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, polygon, ground;
var stand1;
var polygon;
var slingShot;
var polygonImg;
var bg = "morning.jpeg";
var backgroundImg;

function preload(){

  polygonImg = loadImage("polygon.png");

  getBackgroundImg();

}

function setup(){

  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390, 300, 250, 10);
   
  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);

  block8 = new Block(330, 235, 30, 40);
  block9 = new Block(360, 235, 30, 40);
  block10 = new Block(390, 235, 30, 40);
  block11 = new Block(420, 235, 30, 40);
  block12 = new Block(450, 235, 30, 40);

  block13 = new Block(360, 195, 30, 40);
  block14 = new Block(390, 195, 30, 40);
  block15 = new Block(420, 195, 30, 40);

  block16 = new Block(390, 155, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
  
  slingShot = new Slingshot(this.polygon, { x : 100, y : 200 });

}

function draw(){

  if(backgroundImg)

  background(backgroundImg); 
 
  ground.display();
  stand1.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");

  block13.display();
  block14.display();
  block15.display();

  fill("grey");

  block16.display();

  fill("gold");

  imageMode(CENTER);

  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();
  
}

function mouseDragged(){

  Matter.Body.setPosition(this.polygon, { x : mouseX, y : mouseY });

}

function mouseReleased(){

  slingShot.fly();

}

function keyPressed(){

  if(keyCode === 32){

      slingShot.attach(this.polygon);

  }

}

async function getBackgroundImg(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){

      bg = "night.jpg";
      
  }

  else{

      bg = "morning.jpeg";

  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);

}
