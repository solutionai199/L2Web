var CLOSED = false;
var OPEN = false;

function Nav() {
    console.log('working?')
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

var score = 0;

var questions = [
            'What is the most important thing needed to survive?', //0
            'How long can you survive without food?', //1
            'Which of the following will help you survive best?', //2
            'What should you not do in the event of a nuclear explosion nearby?', //3
            'What is the most dangerous part of a nuclear bomb?', //4
            'How many types of radiation can fallout from a nuclear bomb emit?', //5
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

var randQ = 0;
var stop = false;
var correct = false;

function loadQuestion() {
    randQ = Math.floor(Math.random() * questions.length);
    document.getElementById('question').innerHTML = questions[randQ];

    for (var i = 0; i < 4; i++) {
        document.getElementById('aText' + i).innerHTML = answers[randQ][i];
    }
}


function correctAnswer() {
    document.getElementById('result').innerHTML = 'Correct';
    correct = true;
    document.getElementById('result').style.color = 'green';
    score++;
    document.getElementById('score').innerHTML = 'Score = ' + score;
    stop = true;
}

function incorrectAnswer() {
    document.getElementById('result').innerHTML = 'Incorrect';
    document.getElementById('result').style.color = 'red';
}

function check() {
    if (stop == false) {
        if (randQ == 0) {
            if (answer == 1) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
        if (randQ == 1) {
            if (answer == 2) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
        if (randQ == 2) {
            if (answer == 1) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
        if (randQ == 3) {
            if (answer == 0) {
                correctAnswer();
            } else {
               incorrectAnswer();
            }
        }
        if (randQ == 4) {
            if (answer == 2) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
        if (randQ == 5) {
            if (answer == 3) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
        if (randQ == 6) {
            if (answer == 0) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
        if (randQ == 7) {
            if (answer == 2) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
        if (randQ == 8) {
            if (answer == 3) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }
    }
}


function next() {
    if (correct == true) {
        loadQuestion();
        document.getElementById('result').innerHTML = "";
        correct = false;
        for (var i = 0; i < 4; i++) {
            document.getElementById('answer' + i).style.backgroundColor = 'orange';
        }
        stop = false;
    }
}

function button0() {
    if (stop == false) {
        document.getElementById('answer0').style.backgroundColor = 'grey';
        document.getElementById('answer1').style.backgroundColor = 'orange';
        document.getElementById('answer2').style.backgroundColor = 'orange';
        document.getElementById('answer3').style.backgroundColor = 'orange';
    }
}

function button1() {
    if (stop == false) {
        document.getElementById('answer0').style.backgroundColor = 'orange';
        document.getElementById('answer1').style.backgroundColor = 'grey';
        document.getElementById('answer2').style.backgroundColor = 'orange';
        document.getElementById('answer3').style.backgroundColor = 'orange';
    }
}

function button2() {
    if (stop == false) {
        document.getElementById('answer0').style.backgroundColor = 'orange';
        document.getElementById('answer1').style.backgroundColor = 'orange';
        document.getElementById('answer2').style.backgroundColor = 'grey';
        document.getElementById('answer3').style.backgroundColor = 'orange';
    }
}

function button3() {
    if (stop == false) {
        document.getElementById('answer0').style.backgroundColor = 'orange';
        document.getElementById('answer1').style.backgroundColor = 'orange';
        document.getElementById('answer2').style.backgroundColor = 'orange';
        document.getElementById('answer3').style.backgroundColor = 'grey';
    }
}


window.onload = function () {
    loadQuestion();
}
