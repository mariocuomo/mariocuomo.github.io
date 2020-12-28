let secondsToCountDown = 30;
var gameStarted=false;
var x;
var y;
var counter = 0;
var upper_bound=3;
var level;

const interval = setInterval(() => {
    document.querySelector('.timer').innerHTML = secondsToCountDown
  
    if (secondsToCountDown == 0) {
      secondsToCountDown=0;
      endGame();
    }
    
    if(gameStarted && secondsToCountDown>0){
        secondsToCountDown--;
    }
        
}, 1000);


function endGame() {
    var gm = document.getElementById("gameDiv");
    var cnclsn = document.getElementById("conclusion");
    var score = document.getElementById("score");

    gm.style.display = "none";
    cnclsn.style.display = "block";
    score.textContent = counter;

    if(counter<=15)
        level = "basic";
    if(counter>=16 && counter<=29)
        level = "medium";
    if(counter>29)
        level = "pro";
    
    document.getElementById(level).style.display="block";    
}

function addBonus() {
    if(counter%5===0)
        secondsToCountDown+=4;
}

function addDifficulty() {
    switch (counter) {
        case 4:
            document.getElementById("star_1").classList.add('checked');
            upper_bound=6;
            break;
        case 8:
            document.getElementById("star_2").classList.add('checked');
            upper_bound=8;
            break;
        case 15:
            document.getElementById("star_3").classList.add('checked');
            upper_bound=10;
            break;
        case 30:
            upper_bound=15;
            document.getElementById("star_4").classList.add('checked');
            break;
        case 40:
            upper_bound=20;
            document.getElementById("star_5").classList.add('checked');
            break;
        default:
            break;
        }
}

function createMathTable() {
    x = Math.floor(Math.random() * upper_bound)+1;
    y = Math.floor(Math.random() * upper_bound)+1;
    document.getElementById("question").textContent= x + " x "+ y;
    document.getElementById("inpt").value = '';
}

function verifyInput(inpt) {
    if(x*y == inpt.value){
        counter++;
        document.getElementById("audio").play();

        var scoreGame = document.getElementById("scoreGame");
        scoreGame.textContent = counter;

        addBonus();
        addDifficulty();
        createMathTable();
    }
}

function startGame(btn) {
    var gm = document.getElementById("gameDiv");
    
    btn.style.display = "none";
    gm.style.display = "block";

    gameStarted=true;
    createMathTable();
}

function retryGame(){
    secondsToCountDown = 30;
    counter = 0;
    upper_bound=3;
    document.getElementById("star_1").classList.remove('checked');
    document.getElementById("star_2").classList.remove('checked');
    document.getElementById("star_3").classList.remove('checked');
    document.getElementById("star_4").classList.remove('checked');
    document.getElementById("star_5").classList.remove('checked');

    var gm = document.getElementById("gameDiv");  
    gm.style.display = "block";
    var cnclsn = document.getElementById("conclusion");
    cnclsn.style.display = "none";

    var scrGm = document.getElementById("scoreGame");
    scrGm.textContent=0;

    document.getElementById(level).style.display="none";    
    level="";
    
    createMathTable();
}

function showRules() {
    var rp = document.getElementById("ruleParagraph");
    var sh = document.getElementById("show_hide");

    if (rp.style.display === "none") {
        rp.style.display = "block";
        sh.textContent='[-]';
    } else {
        rp.style.display = "none";
        sh.textContent='[+]';
    }
}