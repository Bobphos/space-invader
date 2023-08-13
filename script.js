const canvas = document.getElementById("ca");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
let x = 0;
let y = 20;
const width = 100;
const height = 150;

// setInterval(drawSquare, 10)

function drawSquare() {
    resetCanvas()
    ctx.fillRect(x, y, width, height);
}
drawSquare()

function resetCanvas(){
 ctx.clearRect(0,0, canvas.width, canvas.height);
}

document.addEventListener('keydown', (event) => {
//   console.log(`key pressed: ${event.key}`);
    if (event.key === 'w' || event.key === 'W'){
        // Mudar a coordenada, aumentar ou diminuir x
        x++;
        // Desenhar o quadrado
        ctx.fillRect(x, y, width, height);
    }
});



