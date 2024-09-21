function main() {
    var canvas = document.getElementById("glcanvas");
    if(!canvas){
        console.log("canvas not exist");
        return;
    }

    var ctx = canvas.getContext("2d");

    ctx.fillStyle = 'rgba(150,0,200,1.0)';
    ctx.fillRect(150,100,150,150);

    var redbutton = document.getElementById("redButton");

    redbutton.addEventListener('click', function(){

        ctx.fillStyle = 'rgba(255,0,0,1.0)';
        ctx.fillRect(150,100,150,150);
    });

    var greenbutton = document.getElementById("greenButton");
    greenbutton.addEventListener('click', function(){

        ctx.fillStyle = 'rgba(0,255,0,1.0)';
        ctx.fillRect(150,100,150,150);
    });

    var bluebutton = document.getElementById("blueButton");
    bluebutton.addEventListener('click', function(){

        ctx.fillStyle = 'rgba(0,0,255,1.0)';
        ctx.fillRect(150,100,150,150);
    });
}