const COLORS = ['green', 'red', 'yellow', 'blue'];
let userColors = [];
let gameColors = [];
let power = false;
let level = 0;

$(document).on('keypress', () => {
    if(!power){
        nextLevel();
        power = true;
    }
});

$('.btn').on('click', (e) => {
    if(power){
        let userClicked = e.target.id;
        userColors.push(userClicked);
        console.log(userColors);
        checkAnswer(userColors.length - 1);
        animation(e.target.id)
    }
});

function checkAnswer(currentLevel) {  
    if(userColors[currentLevel] == gameColors[currentLevel]){
        if(userColors.length == gameColors.length){
            nextLevel();
        }
    } else {
        $('#level-title').text('Game Over! Press Any Key To Restart');
        $('body').css('backgroundColor', 'red');
        setTimeout(() => {
            $('body').css('backgroundColor', '#001327');
        }, 200)
        startOver();
    }
}

function nextLevel() {  
    level++;
    $('#level-title').text(`Level ${level}`);
    userColors = [];
    let randomColor = COLORS[Math.floor(Math.random() * 4)];
    gameColors.push(randomColor);
    $("#" + randomColor).fadeIn(200).fadeOut(200).fadeIn(200);
    console.log(gameColors);
}

function startOver() {  
    gameColors = [];
    level = 0;
    power = false;
}

function animation(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
      $("#" + color).removeClass("pressed");
    }, 100);
}