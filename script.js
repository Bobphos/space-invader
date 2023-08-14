const canvas = document.getElementById("ca");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
let x = 10;
let y = 10;
const width = 100;
const height = 150;

setInterval(drawSquare, 1000);

function drawSquare() {
    resetCanvas();
    ctx.fillRect(x, y, width, height);
}

function resetCanvas(){
 ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('keydown', (event) => {
  console.log(`key pressed: ${event.key}`);
    if (event.key === 'd' || event.key === 'D'){
        x++;
        drawSquare();
    } else if (event.key === "a" || event.key === "A"){
        x--;
        drawSquare()
    } else if (event.key === "w"||event.key === "W"){
        y--;
        drawSquare()
    } else if (event.key === "s"||event.key ==="S"){
        y++;
        drawSquare()
    }
});






