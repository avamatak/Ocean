var emojis = ['🐟','🐟','🌿','🌿','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐟','🐠','🐟','🐡','🐟','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐠','🐟','🐡','🐟','🐟','🐟','🐡','🐟','🐟','🐡','🐟','🐠','🐟','🐡','🐟','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐟','🐠','🐟','🐡','🐟','🐟','🐡','🐠','🐟','🐡','🐟','🐟'];
var emoji =  [];
function setup() {
  createCanvas(400, 400);
  background(20,50,110);
  
  for(var i = 0; i < emojis.length; i++){
    emoji[i] = new 
    Emoji(random(width), random(height),random(10,50), emojis[i]);
  }
}

function draw() {
  background(20,50,110);
  textSize(100);
  text(emojis[2],100,390);
  textSize(100);
   text(emojis[3],250,390);
  for(var i = 0; i < emoji.length; i++){
    emoji[i].move();
    emoji[i].show();
  }
}
class Emoji{
  constructor(x,y,size,emoji){
    this.x = x;
    this.y = y;
    this.size = size;
    this.emoji = emoji;
    this.speed = .6
  }
  move(){
    this.x += random(-this.speed, -this.speed);
    this.y += random(-this.speed, this.speed)
  }
  
  show(){
    textSize(this.size);
    text(this.emoji,this.x,this.y);
  }
}