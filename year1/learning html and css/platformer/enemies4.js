/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const enemyNumber = 20;
const enemyArayy = [];

class Enemy{
    constructor (){
        this.image =  new Image();
        this.image.src = 'resources/enemies/enemy3.png'
        this.velocity=Math.random()*4+1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        const sizer = Math.random()*3+2;
        this.width=this.spriteWidth/sizer;
        this.height=this.spriteHeight/sizer;
        this.x=Math.random()*(CANVAS_WIDTH-this.width);
        this.y=Math.random()*(CANVAS_HEIGHT-this.height);
        this.flapRate=Math.floor(Math.random()*3+2);
        this.frame = 0;
        this.conuter = 0;
        this.angle=0;
        this.angleSpeed = Math.random() * 2+1.5;
        this.xRange=Math.random()*200+50;
    }

    update(){
        this.x =canvas.width/2*Math.cos(this.angle*Math.PI/180)+(canvas.width/2 - this.width/2);
        this.y =canvas.height/2*Math.sin(this.angle*Math.PI/90)+(canvas.height/2 - this.height/2);
        this.angle+=this.angleSpeed;
        if(this.x*this.width<0) this.x=CANVAS_WIDTH;
        this.conuter++;
        this.frame=(Math.floor(this.conuter/this.flapRate))%5;
    }

    draw(){
        //ctx.fillRect(this.x,this.y,this.width,this.height);    
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
};

for(let i=0;i<enemyNumber;i++){
    enemyArayy.push(new Enemy());
}
console.log(enemyArayy);
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    enemyArayy.forEach(enemy=>{
        enemy.update();
        enemy.draw();   
    });
    requestAnimationFrame(animate);
}
animate();