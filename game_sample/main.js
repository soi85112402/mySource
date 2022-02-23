const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.


const hero = {
    x : 0,
    y : 0,
    width : 20,
    height : 40,
    draw(){
        ctx.fillStyle = "blue"; 
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function requestAnimation(){
    window.requestAnimationFrame(requestAnimation);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hero.x++;
    hero.draw();
}

requestAnimation();