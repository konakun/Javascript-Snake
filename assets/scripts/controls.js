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