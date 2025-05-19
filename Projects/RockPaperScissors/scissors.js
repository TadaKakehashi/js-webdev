const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const scoreUpdate = document.getElementById('score');

let user ="";
let isPlay = true;
let score = 0;
let compScore = 0;

rock.addEventListener('click',function(){
    user ="Rock";
    playGame();
});

paper.addEventListener('click',function(){
    user ="Paper";
    playGame();
});

scissors.addEventListener('click',function(){
    user ="Scissors";
    playGame();
});


function updateScore(){
    scoreUpdate.innerHTML = `Player Score: ${score} : Computer Score: ${compScore}`;
}

function playGame(){
    const choice = ["Rock","Paper","Scissors"];
    const computer = choice[Math.floor(Math.random()*3)];

    let display = document.getElementById('display');

    if(user === computer){
        display.innerHTML = `Its a Draw!`;
        score += 1;
        compScore += 1;
        updateScore();
    }
    else if(
        (user === "Rock" && computer === "Scissors") ||
        (user === "Paper" && computer === "Rock") ||
        (user === "Scissors" && computer === "Paper")
    ){
        display.innerHTML = "You Win!";
        score += 1;
        updateScore();
    }
    else{
        display.innerHTML = "You Lose!";
        compScore += 1;
        updateScore();
    }
}
