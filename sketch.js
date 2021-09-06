var world;
var player;
var enemy;
var gold;
var lama;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
worldImage = loadImage("world.png");
playerImage = loadImage("player.png");
enemyImage = loadImage("enemy.png");
goldImage = loadImage("gold.png");
lamaImage = loadImage("lootlama.png");

}

function setup() {
 createCanvas (800,600);
 World=createSprite(20,20,20,20);
 World.addImage(worldImage);

 player = createSprite(600,400,20,20);
 player.addImage(playerImage);
 player.scale=0.3;

 goldG=new Group();
 lamaG=new Group();
 enemyGroup=new Group();
}

function draw() {
 if(gameState===PLAY){
player.x = World.mouseX;





createEnemy();
Createlama();
createGold();
 }
     

 drawSprites();
 
}

function createEnemy() {
    if (World.frameCount % 200 == 0) {
    var enemy = createSprite(Math.round(random(50, 350),40, 10, 10));
    enemy.addImage(enemyImage);
    enemy.scale=0.12;
    enemy.velocityY = 3;
    enemy.lifetime = 150;
    enemyGroup.add(enemy);
    }
  }

  function createLama() {
    if (World.frameCount % 200 == 0) {
    var lama = createSprite(Math.round(random(50, 350),40, 10, 10));
    lama.addImage(lamaImage);
    lama.scale=0.3;
    lama .velocityY = 3;
    lama .lifetime = 150;
    lamaG.add(lama);
    }
  }