function startText(){
    ctx.font = "30px Arial"
    ctx.fillStyle = snakeColor;
    ctx.textAlign = "center";
    ctx.fillText("Press a direction key to start the game", canvas.width/2, canvas.height/2);
}

function printSnake(){
    ctx.beginPath();
	for(var n=0; n<length; n++){
		ctx.rect(snakeTrail[n].x, snakeTrail[n].y, snakeSize, snakeSize);
		ctx.fillStyle = snakeColor;
		ctx.fill();
		ctx.closePath();
	}
}

function printFood(){
    ctx.beginPath();
    ctx.rect(foodX, foodY, foodSize, foodSize);
    ctx.fillStyle = foodColor;
    ctx.fill();
    ctx.closePath();
}

function scoreUpdate(){
	document.getElementById('score').innerHTML = score;
}