const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,ground2,ground3;
var whiteground;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

var division1;

function setup() {
  createCanvas(480,600);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(300,595,600,10);
    ground1 = new Ground(5,290,10,600);
    ground2 = new Ground(300,5,600,10);
    ground3 = new Ground(475,300,10,600);
    whiteground = new Division(240,585,460,10);

    for(var i=0;i<=width;i=i+80){
      divisions.push(new Division(i,height-divisionHeight/2, 10, divisionHeight));
    }

    for(var p=50; p<=width;p=p+50){
      plinkos.push(new Plinko(p,75,3*PI));
    }
  

}

function draw() {
  background(0);
  Engine.update(engine);

 
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  whiteground.display();

  //divisions.display();

  for (var i = 0; i < divisions.length; i++) {
     divisions[i].display();
    }

  for (var p = 50; p < width; p++){
    plinkos[p].display();
  }
  drawSprites();
}