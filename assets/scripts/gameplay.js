/***       Snake Functions      ***/

function startProcess(){
    x = Math.floor((Math.random() * ((columns - 1)- 0) + 0)*10);
    y = Math.floor((Math.random() * ((rows - 1)- 0) + 0)*10);
    x = Math.round(x/10)*10;
	y = Math.round(y/10)*10;
	
	start = true;
}

function snakeDirection(){
    if(direction == 1){
        pastdirection = direction;
        y-=grid;
    }
    if(direction == 2){
        pastdirection = direction;
        y+=grid;
    }
    if(direction == 3){
        pastdirection = direction;
        x-=grid;
    }
    if(direction == 4){
        pastdirection = direction;
        x+=grid;
    }
}

/***       Food Functions       ***/

function foodAppearance(){
    if(!appear){
        foodX = Math.floor((Math.random() * ((columns - 1)- 0) + 0)*10);
        foodY = Math.floor((Math.random() * ((rows - 1)- 0) + 0)*10);
		foodX = Math.round(foodX/10)*10;
		foodY = Math.round(foodY/10)*10;
		if(x > foodX && x < foodX+foodSize && y > foodY && y < foodY+foodSize){
            foodAppearance();
        }
        appear = true;
    }
}

function eatFood(){
    if(x == foodX && x <= foodX+foodSize && y == foodY && y <= foodY+foodSize){
        score++;
        appear = false;
		lengthUpdate();
    }
}

function trailStart(){
	if(snakeTrail.length < length){
		snakeTrail.push({x: x, y: y});
	}
}

function updateTrail(){
	snakeTrail.push({x: x, y: y});
	while(snakeTrail.length > length){
		snakeTrail.shift();
	}
}

function lengthUpdate(){
		length++;
}

/***     Gameplay Functions     ***/

function gameOver(){
    if(x < -10 || y < -10 || x > canvas.width || y > canvas.height){
        gameover = true; 
    }
	if(length > 1){
		for(var n=1; n<length; n++){
			if(x == snakeTrail[n].x && x <= snakeTrail[n].x+snakeSize && y == snakeTrail[n].y && y <= snakeTrail[n].y+snakeSize){
				gameover = true;
			}
		}
	}
	if(gameover){
		direction = 0;
        alert("Game over, your score was: " + score);
        location.reload();
        clearInterval(interval);
	}
}