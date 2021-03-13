var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var flag=0;
var gameenter=0;
var player,form,game;
var player1,player2;
var bullet1,bullet2;
var players;
var bubbles,bubbles1;
var bubbleGroup;
var bullets;
var bulletGroup;
var bubbleBlue_img, bubbleRed_img, bubbleGreen_img, bubbleYellow_img, bubblePink_img, bubbleGrey_img;
var bullet_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("images/bckgrnd.png");
  player1_img = loadImage("images/hunter-1.png");
  player2_img = loadImage("images/hunter-2.png");
  bullet1_img = loadImage("images/bullet2.png");
  bullet2_img = loadImage("images/bullet.png");
  bubbleBlue_img = loadImage("images/bubble.blue.png");
  bubbleRed_img = loadImage("images/bubble.red.png");
  bubbleGreen_img = loadImage("images/bubble.green.png");
  bubbleYellow_img = loadImage("images/bubble.yellow.png");
  bubblePink_img = loadImage("images/bubble.pink.png");
  bubbleGrey_img = loadImage("images/bubble.grey.png");
  bubbleGroup = new Group();
  hitSound=loadSound("hit.wav");
  gunSound=loadSound("gunshot.wav");
  gameOver=loadSound("gameover.wav");

}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
  bulletGroup=new Group();
  bubbles1Group=new Group();
}

function draw() {
  background(back_img);
  
  if (gameState === 1) {
   
    clear(); 
    game.play();
  }
  else if (gameState === 2&& playerCount===2) {
    flag++;
    game.update(2);
    
    game.end();
    
  }
  else if (playerCount === 2) {
    game.update(1);
  }

}

