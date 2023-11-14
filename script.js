const canvas = document.getElementById("ca");
const ctx = canvas.getContext("2d");

function startApp() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('maincontent').style.display = 'block';
}

function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const width1 = 100;
const height1 = 150;
const color1 = "blue";
let x1 = 40;
let y1 = 200;
let speed1 = 3;
let intervalId;

const width2 = 100;
const height2 = 150;
const color2 = "green";
let x2 = 40;
let y2 = 0;
let speed2 = 3;


setInterval(drawSquares, 100);

function drawSquares() {
    resetCanvas();

    ctx.fillStyle = color1;
    ctx.fillRect(x1, y1, width1, height1);

    ctx.fillStyle = color2;
    ctx.fillRect(x2, y2, width2, height2);
}

/* 4. Movement */
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

function startMoving(direction) {
    if (!intervalId) {
        intervalId = setInterval(() => {
            moveSquare(direction);
            drawSquares();
        }, speed1);
    }
}

function stopMoving() {
    clearInterval(intervalId);
    intervalId = null;
}

function moveSquare(direction) {
    if (direction === "right") {
        x1 += speed1;
    } else if (direction === "left") {
        x1 -= speed1;
    } else if (direction === "up") {
        y1 -= speed1;
    } else if (direction === "down") {
        y1 += speed1;
    }
}