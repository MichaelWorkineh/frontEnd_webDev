/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 700;
const CANVAS_HEIGHT = canvas.height = 500;
const canvasPosition = canvas.getBoundingClientRect();

const explosiones = [];

class Explosion{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.spriteWidth=200;
        this.spriteHeight=179;
        this.width=this.spriteWidth*(0.5);
        this.height=this.spriteHeight*(0.5);
        this.image=new Image();
        this.image.src='resources/boom (1).png';
        this.frame = 0;
    }
    update(){
        this.frame+=1;
    }
    draw(){
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
};
window.addEventListener('click',function(e){
    let positionX = e.x-canvasPosition.left-25;
    let postionY = e.y-canvasPosition.top-25;
});