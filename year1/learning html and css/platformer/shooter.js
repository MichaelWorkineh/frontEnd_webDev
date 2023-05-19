/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 700;
const CANVAS_HEIGHT = canvas.height = 500;
const canvasPosition = canvas.getBoundingClientRect();

const explosiones = [];

class Explosion{
    constructor(x,y){
        this.spriteWidth=200;
        this.spriteHeight=179;
        this.width=this.spriteWidth*(0.5);
        this.height=this.spriteHeight*(0.5);
        this.x=x-this.width/2;
        this.y=y-this.height/2;
        this.image=new Image();
        this.image.src='resources/boom (1).png';
        this.frame = 0;
        this.counter=0;
    }
    update(){
        this.counter+=1;
        this.frame=(Math.floor(this.counter/5));
    }
    draw(){
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }

};

window.addEventListener('click',function(e){
    createAnimation(e);
});

function createAnimation(e){
    let positionX = e.x-canvasPosition.left;
    let postionY = e.y-canvasPosition.top;
    explosiones.push(new Explosion(positionX,postionY));
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    for(let i=0;i<explosiones.length;i++){
        explosiones[i].draw();
        explosiones[i].update();
        if(explosiones[i].frame>5){
            explosiones.splice(i, 1);
            i--;
        }
    }
    //ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    requestAnimationFrame(animate);
}
animate();