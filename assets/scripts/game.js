var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

//Sneik Visual Parameters
var snakeSize = 10;
var snakeColor = "#008000";

//Food Visual Parameters
var foodSize = 10;
var foodColor = "#800000";

//MinionBlock Parameters
var minionSize = 10;
var minionColor = "#000080"

//Map Parameters
var rows = 48;
var columns = 72;
var grid = 10;

/* Location Variables */
var x = 0;
var y = 0;

//Controller Parameters

document.addEventListener("keydown", keyDownHandler, false);

/* Keys */
var up = false;
var down = false;
var left = false;
var right = false;



/* 
Direction
0 = No Direction (GameStart) 
1 = Up
2 = Down
3 = Left
4 = Right
*/

var direction = 0;

//Difficulty Parameters
var speed = 5;
var blockProbability = 0;
var blockNumber = 0;

//Gameplay Parameters

var snakeTrail = [];
var start = false;
var gameover = false;
var score = 0;
var length = 1;

/* Food Variables */
var eaten = false;
var specialFood = false;
var appear = false;


/***     Keyboard Functions     ***/

function keyDownHandler(e){
    if(e.key == "Up" || e.key == "ArrowUp" || e.key == "w"){
        if(direction != 2){direction = 1;}
    }
    else if(e.key == "Down" || e.key == "ArrowDown" || e.key == "s"){
        if(direction != 1){direction = 2;}
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a"){
        if(direction != 4){direction = 3;}
    }
    else if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d"){
        if(direction != 3){direction = 4;}
    }
}


/***       Snake Functions      ***/

function startProcess(){
    x = Math.floor((Math.random() * ((columns - 1)- 0) + 0)*10);
    y = Math.floor((Math.random() * ((rows - 1)- 0) + 0)*10);
    x = Math.round(x/10)*10;
	y = Math.round(y/10)*10;
	
	start = true;
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

function printFood(){
    ctx.beginPath();
    ctx.rect(foodX, foodY, foodSize, foodSize);
    ctx.fillStyle = foodColor;
    ctx.fill();
    ctx.closePath();
}

function eatFood(){
    if(x == foodX && x <= foodX+foodSize && y == foodY && y <= foodY+foodSize){
        score++;
        appear = false;
		lengthUpdate();
		speedUpdate();
    }
}

function trailStart(){
	snakeTrail.push({x: x, y: y});
}

function updateTrail(){
	snakeTrail.push({x: x, y: y});
	while(snakeTrail.length > length){
		snakeTrail.shift();
	}
}

function lengthUpdate(){
	var Tscore = score*2;
	if(Tscore%3 == 0 && Tscore/3 > 0){
		length+=2;
		
	}
}
function speedUpdate(){
	if(score%5){
		speed++;
	}
}
/***      Blocks Functions      ***/

/***     Gameplay Functions     ***/

function gameOver(){
    if(x < 0 || y < 0 || x > canvas.width-snakeSize || y > canvas.height-snakeSize){
        gameover = true;
        direction = 0;
        alert("Game over, your score was: " + score);
        location.reload();
        clearInterval(interval); 
    }
    /*for()
        tail = lose;
    */
}

/***         Debugger           ***/
    function debuggerTest(){
        var dirText;
        switch(direction){
            case 1:
                dirText = "Up";
                break;
            case 2:
                dirText = "Down";
                break;
            case 3:
                dirText = "Left";
                break;
            case 4:
                dirText = "Right";
                break;
            case 0:
                dirText = "None";
                break;
        }
        document.getElementById('scr').innerHTML = score;
        document.getElementById('snX').innerHTML = x;
        document.getElementById('snY').innerHTML = y;
        document.getElementById('fdX').innerHTML = foodX;
        document.getElementById('fdY').innerHTML = foodY;
        document.getElementById('len').innerHTML = length;
        document.getElementById('dir').innerHTML = dirText;
    }

/***           Draw             ***/

function startText(){
    ctx.font = "30px Arial"
    ctx.fillStyle = snakeColor;
    ctx.textAlign = "center";
    ctx.fillText("Press a direction key to start the game", canvas.width/2, canvas.height/2);
}

function draw(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    gameOver();
    if(direction == 0){
        if(!start){
            startProcess();
        }
        startText();
    }
	trailStart();
    printSnake();
    foodAppearance();
    printFood();
    eatFood();
	updateTrail();
	snakeDirection();
    debuggerTest();
}

var interval = setInterval(draw, 100);