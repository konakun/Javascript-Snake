function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if(direction == 0){
        if(!start){
			trailStart();
            startProcess();
        }
        startText();
    }
	gameOver();
    printSnake();
    foodAppearance();
    printFood();
    eatFood();
	updateTrail();
	snakeDirection();
	scoreUpdate();
    debuggerTest();
}

var interval = setInterval(draw, 100);