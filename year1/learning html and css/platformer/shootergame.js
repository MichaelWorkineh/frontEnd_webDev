/** @type {canvasHTML}  */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=window.innerWidth;
const CANVAS_HEIGHT=canvas.height=window.innerHeight;

const collusionCanvas = document.getElementById('collusionCanvas');
const collusionCtx = collusionCanvas.getContext('2d');
collusionCanvas.width = window.innerWidth;
collusionCanvas.height = window.innerHeight;

let score=0;
let shoots=0;
let timeToNextRaven = 0;
let RavenIntervl = 500;
let lastTime = 0;
let gameOver = false;

let gunShot = new Audio();
gunShot.src = 'resources/shots/rifle.mp3';

ctx.font='90px impact';

let raven = [];
function drawScore(){
    ctx.fillStyle='rgba(189, 140, 152,0.5)';
    ctx.fillText('Score: '+score,50,75);
    ctx.fillText('Shoots: '+shoots,canvas.width-450,75);
}

function endCard(grade){
    ctx.fillStyle='rgba(189, 0, 0,0.8)';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER SON!',canvas.width/2,canvas.height/2);
    ctx.fillText('RATING: '+grade,canvas.width/2,canvas.height/2+200);
}

let explosions = [];
class Explosion {
    constructor(x,y,size){
        this.image = new Image();
        this.image.src = "resources/boom (1).png";
        this.spriteWidth = 200;
        this.spriteHeight = 179;
        this.size = size;
        this.x = x;
        this.y = y;
        this.frame = 0;
        this.sound = new Audio();
        this.sound.src = "resources/crow1-5986.mp3";
        this.timeSinceLastFrame = 0;
        this.frameInterval = 200;
        this.markedForDeletion = false;
    }
    update(deltaTime){
        if(this.frame==0) this.sound.play();
        this.timeSinceLastFrame += deltaTime;
        if(this.timeSinceLastFrame>=this.frameInterval){
            this.frame++;
            this.timeSinceLastFrame=0;
        }
        if(this.frame>5) this.markedForDeletion=true;
    }
    draw(){
        ctx.drawImage(this.image,this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y-this.size/4,this.size,this.size);
    }
} 

window.addEventListener('click',function(e){
    if ((gunShot.paused)&&(!gameOver)) {    
        shoots++;
        gunShot.play();
        let colorDetecter = collusionCtx.getImageData(e.x,e.y,1,1);
        console.log(colorDetecter);
        const pixelColor = colorDetecter.data;
        raven.forEach(object=>{
            if(object.randomColors[0]=== pixelColor[0]&&object.randomColors[1]=== pixelColor[1]&&object.randomColors[2]=== pixelColor[2]){
                object.markedForDeletion=true;
                score++;
                explosions.push(new Explosion(object.x,object.y,object.width));
            }
        })
    }
});

class Raven {
    constructor(){
        this.spriteWidth = 271;
        this.spriteHeight = 194;
        this.crowSize=Math.random() * 3+1.5;
        this.width = this.spriteWidth/this.crowSize;
        this.height = this.spriteHeight/this.crowSize;
        this.x=canvas.width;
        this.y=Math.random() * (canvas.height-this.height);
        this.directionX=Math.random() * 3 +3;
        this.directionY=Math.random() * 3 -2.5;
        this.markedForDeletion = false;
        this.image = new Image();
        this.image.src = "resources/enemies/raven.png";//6
        this.frame=0;
        this.counter=0;
        this.timeSinceFlap=0;
        this.flapInterval=Math.random() * 50 + 50;
        this.randomColors = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
        this.color = 'rgb('+this.randomColors[0]+','+this.randomColors[1]+','+this.randomColors[2]+')';
    }

    update(deltaTime){
        this.x-=this.directionX;
        this.y+=this.directionY;
        /*
        if(this.y<0||this.y>CANVAS_HEIGHT-this.height){
            this.directionY*=-1;
        }
         */
        
        this.timeSinceFlap+=deltaTime;
        if(this.timeSinceFlap>=this.flapInterval){
            this.counter+=1;
            this.frame=(this.counter)%6;
            this.timeSinceFlap=0;
        }
        if(this.x<0-this.width) this.markedForDeletion=true;

        if(shoots>=10) gameOver=true;
    }

    draw(){
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        collusionCtx.fillStyle = this.color;
        collusionCtx.fillRect(this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image, this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height);
    }
}

function animate(timestamp){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    collusionCtx.clearRect(0,0,collusionCanvas.width,collusionCanvas.height);
    drawScore();
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextRaven+=deltaTime;
    //console.log(deltaTime);
    if(timeToNextRaven > RavenIntervl){
        raven.push(new Raven());
        timeToNextRaven=0;
        raven.sort(function (a,b){
            return a.width-b.width;
        });
    }
    [...raven, ...explosions].forEach(object=>object.update(deltaTime));
    [...raven, ...explosions].forEach(object=>object.draw());
    raven = raven.filter(object => !object.markedForDeletion);
    explosions = explosions.filter(object => !object.markedForDeletion);
    //console.log(raven);
        if(!gameOver) requestAnimationFrame(animate);
        else{
            let value=0;
            if(score/shoots>=0.8) value='A';
            else if((score/shoots<0.8)&&(score/shoots>=0.7)) value='B';
            else if((score/shoots<0.7)&&(score/shoots>=0.6)) value='c';
            else value='you\'r BAD at this!';
            endCard(value);
        }
}
animate(0);
