/* eslint-env browser */
var CLOSED = false;
var OPEN = false;

function Nav() {
    if (CLOSED) {
        document.getElementById("mySidebar").style.width = '0px';
        document.getElementById("mySidebar").style.border = '0vw solid black';
        document.getElementById("box").style.margin = '2vw 1.25vw 1.25vw';
        CLOSED = false;
        OPEN = true;

        document.getElementById("second-sidebar").style.width = "0px";

    } else {
        document.getElementById("mySidebar").style.width = "12vw";
        CLOSED = true;
        document.getElementById("mySidebar").style.border = '0.75vw solid black';
        document.getElementById("second-sidebar").style.width = '12vw';
        document.getElementById("box").style.margin = '2vw 3.25vw 1.25vw';
    }

}

var options = ['Music', 'Art', 'Board Games', 'Football', 'Basketball', 'Hide and Seek', 'Fitness'];

var imgs = ['Images/Entertainment/music.jpg', 'Images/Entertainment/art.jpg', 'Images/Entertainment/boardGames.jpg', 'Images/Entertainment/football.jpg', 'Images/Entertainment/basketball.jpg', 'Images/Entertainment/hide-and-seek.jpg', 'Images/Entertainment/fitness.png'];

function entertainment() {
  
   var rand = Math.floor(Math.random() * options.length);

    document.getElementById('text').innerHTML = options[rand];
    document.getElementById('optionsImgs').src = imgs[rand];
    console.log(rand);
}

var questions = [
            'What is the most important thing needed to survive?', //0
            'How long can you survive without food?', //1
            'Which of the following will help you survive best?', //2
            'What should you not do in the event of a nuclear explosion nearby?', //3
            'What is the most dangerous part of a nuclear bomb?', //4
            'How many types of radiation can occur from fallout that nuclear bombs emit?', //5
            'How far underground is recommended to build a nuclear bunker?', //6
            'What material should you build a bunker with?', //7
            'What should you must have in a bunker?', //8
        ];

var answers = [
            ['Food', 'Water', 'Warmth', 'Entertainment'], //[0][0-3]
            ['3 hours', '3 days', '3 weeks', '2 weeks'], //[1][0-3]
            ['Experience', 'A positive mental attitude', 'Skill', 'Luck'], //[2][0-3]
            ['Go outside', 'Stay put', 'Get away from the blast', 'Seek shelter'], //[3][0-3]
            ['The fireball', 'The blast wave', 'The radiation', 'The size'], //[4][0-3]
            ['2', '4', '6', '3'], //[5][0-3]
            ['3m', '2m', '1m', '3ft'], //[6][0-3]
            ['Plastic', 'Aluminium', 'Concrete', 'Lead'], //[7][0-3]
            ['Ventilation', 'Generator', 'Water filter', 'All of these'] //[8][0-3]
        ];

var score = 0;
var randQ = -1;
var stop = false;
var correct = false;
var colorChange0 = 'white';
var colorChange1 = 'white';
var colorChange2 = 'white';
var colorChange3 = 'white';
var resetBtn = false;

function loadQuestion() {
    randQ++;
    document.getElementById('question').innerHTML = questions[randQ];
    console.log(randQ);
    for (var i = 0; i < 4; i++) {
        document.getElementById('aText' + i).innerHTML = answers[randQ][i];
    }
    allOrange();
    button0();
}

function correctAnswer() {
    document.getElementById('result').innerHTML = 'Correct';
    correct = true;
    document.getElementById('result').style.color = 'green';
    score++;
    stop = true;
}

function incorrectAnswer() {
    document.getElementById('result').innerHTML = 'Incorrect';
    document.getElementById('result').style.color = 'red';
    stop = true;
    correct = true;
}

function check() {
    if (stop == false) {
        if (randQ == 0) {
            if (answer == 1) {
                correctAnswer();
                allOrange();
                colorChange1 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange1 = 'green';
                incorrectCheck();
            }
        }
        if (randQ == 1) {
            if (answer == 2) {
                correctAnswer();
                allOrange();
                colorChange2 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange2 = 'green';
                incorrectCheck();
            }
        }
        if (randQ == 2) {
            if (answer == 1) {
                correctAnswer();
                allOrange();
                colorChange1 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange1 = 'green';
                incorrectCheck();
            }
        }
        if (randQ == 3) {
            if (answer == 0) {
                correctAnswer();
                allOrange();
                colorChange0 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange0 = 'green';
                incorrectCheck();
            }
        }
        if (randQ == 4) {
            if (answer == 2) {
                correctAnswer();
                allOrange();
                colorChange2 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange2 = 'green';
                incorrectCheck();
            }
        }
        if (randQ == 5) {
            if (answer == 3) {
                correctAnswer();
                allOrange();
                colorChange3 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange3 = 'green';
                incorrectCheck();
            }
        }
        if (randQ == 6) {
            if (answer == 0) {
                correctAnswer();
                allOrange();
                colorChange0 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange0 = 'green';
                incorrectCheck();
            }
        }
        if (randQ == 7) {
            if (answer == 2) {
                correctAnswer();
                allOrange();
                colorChange2 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange2 = 'green';
                incorrectCheck();
            }
        }
        if (randQ == 8) {
            if (answer == 3) {
                correctAnswer();
                allOrange();
                colorChange3 = 'green';
            } else {
                incorrectAnswer();
                allOrange();
                colorChange3 = 'green';
                incorrectCheck();
            }
            if(randQ >=8){
                document.getElementById('nextBtn').innerHTML = 'Results';
                document.getElementById('nextBtn').style.display = 'block';
                
            }
        }
    }
}


function next() {
    if(resetBtn == true){
       window.location.href='info.html';
    }
    if(randQ <=7){
        
        if (correct == true) {
            
            if(randQ >=7){
                document.getElementById('nextBtn').style.display = 'none';

            }
            loadQuestion();
            document.getElementById('result').innerHTML = "";
            correct = false;
            for (var i = 0; i < 4; i++) {
                document.getElementById('answer' + i).style.backgroundColor = 'orange';
            }
            stop = false;
        }
    } else {
        for(i = 0; i < 4; i++){
        document.getElementById('answer'+i).style.display = 'none';
        }
        document.getElementById('answer-buttons').style.display = 'none';
         document.getElementById('result').style.display = "none";
        document.getElementById('question').style.display = 'none';
        document.getElementById('score').style.fontSize = '40px';
        document.getElementById('score').innerHTML = 'Well done, you got ' + score;
        
        document.getElementById('nextBtn').innerHTML = "Try Again?"; 
        resetBtn = true;
    }  
}

function button0() {
    if (stop == true) {
        document.getElementById('answer0').style.backgroundColor = colorChange0;
        document.getElementById('answer1').style.backgroundColor = colorChange1;
        document.getElementById('answer2').style.backgroundColor = colorChange2;
        document.getElementById('answer3').style.backgroundColor = colorChange3;
    }
}

function incorrectCheck() {
    if (answer == 0) {
        colorChange0 = 'red';
    }
    if (answer == 1) {
        colorChange1 = 'red';
    }
    if (answer == 2) {
        colorChange2 = 'red';
    }
    if (answer == 3) {
        colorChange3 = 'red';
    }
}

function allOrange() {
    colorChange0 = 'orange';
    colorChange1 = 'orange';
    colorChange2 = 'orange';
    colorChange3 = 'orange';
}

window.onload = function () {
    loadQuestion();
}
