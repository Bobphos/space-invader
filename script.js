const canvas = document.getElementById("ca");
const ctx = canvas.getContext("2d");


ctx.fillStyle = "green";
let x = 40;
let y = 200;
const width = 100;
const height = 150;
let speed = 3;
let intervalId;


ctx.fillStyle = "blue";
ctx.fillRect(20, 100, 50, 75);

function drawSquare2(){
    ctx.fillStyle = "blue";
resetCanvas();
ctx.fillRect(20, 100, 50, 75);
}

function drawSquare() {
    ctx.fillStyle= "red";
    resetCanvas();
    ctx.fillRect(x, y, width, height);
}

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
setInterval(1000);
function startMoving(direction) {
    if (!intervalId) {
        intervalId = setInterval(() => {
            moveSquare(direction);
            drawSquare();
        }, speed);
    }
}

function stopMoving() {
    clearInterval(intervalId);
    intervalId = null;
}

function moveSquare(direction) {
    if (direction === "right") {
        x += speed;
    } else if (direction === "left") {
        x -= speed;
    } else if (direction === "up") {
        y -= speed;
    } else if (direction === "down") {
        y += speed;
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
        case 'D':
            startMoving("right");
            break;
        case 'a':
        case 'A':
            startMoving("left");
            break;
        case 'w':
        case 'W':
            startMoving("up");
            break;
        case 's':
        case 'S':
            startMoving("down");
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
        case 'D':
        case 'a':
        case 'A':
        case 'w':
        case 'W':
        case 's':
        case 'S':
            stopMoving();
            break;
    }
});

drawSquare();
drawSquare2();



