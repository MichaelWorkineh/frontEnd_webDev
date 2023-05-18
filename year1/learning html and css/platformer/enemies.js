/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const enemyNumber = 40;
const enemyArayy = [];

class Enemy{
    constructor (){
        this.image =  new Image();
        this.image.src = 'resources/enemies/enemy1.png'
        this.velocity=Math.random()*4 -2;
        this.spriteWidth = 293;
        this.spriteHeight = 155
        const sizer = Math.random()*3+2;
        this.width=this.spriteWidth/sizer;
        this.height=this.spriteHeight/sizer;
        this.x=Math.random()*(CANVAS_WIDTH-this.width);
        this.y=Math.random()*(CANVAS_HEIGHT-this.height);
        this.flapRate=Math.floor(Math.random()*3+2);
        this.frame = 0;
        this.conuter = 0;
    }

    update(){
        this.x+=Math.random()*12 -6;
        this.y+=Math.random()*12 -6;
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