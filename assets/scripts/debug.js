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
