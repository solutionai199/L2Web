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
            'What is the most dangerous part of a necular bomb?' //4
        ];
        
        var answers = [
            ['Food', 'Water', 'Warmth', 'Entertainment'], //[0][0-3]
            ['3 hours', '3 days', '3 weeks', '2 weeks'], //[1][0-3]
            ['Experience', 'A positive mental attitude', 'Skill', 'Luck'], //[2][0-3]
            ['Go outside', 'Stay put', 'Get away from the blast','Seek shelter'], //[3][0-3]
            ['The fireball', 'The blast wave', 'The radiation', 'The size']
        ];
        
        var randQ = 0;
        
        function loadQuestion(){
            randQ = Math.floor(Math.random()*questions.length);
            document.getElementById('question').innerHTML = questions[randQ];
            
            for(var i=0;i<4;i++){
                document.getElementById('aText'+i).innerHTML = answers[randQ][i];
            }
        }
        
    function check(){        
       if(randQ == 0){
              if(answer == 1){
                 document.getElementById('result').innerHTML = 'Correct';
                  correct = true;
                 document.getElementById('result').style.color = 'green';
//                  loadQuestion();
                  score++;
                  document.getElementById('score').innerHTML = 'Score = ' + score;
//                  setTimeout(
//                        function(){
//                             window.location.href='testing.html';
//                      }
//                          , 2000)  
                 }else{
                     document.getElementById('result').innerHTML = 'Incorrect';
                     document.getElementById('result').style.color = 'red';
                 }
              }
         if(randQ == 1){
              if(answer == 2){
                 document.getElementById('result').innerHTML = 'Correct';
                    correct = true;
                 document.getElementById('result').style.color = 'green';
                  score++;
                  document.getElementById('score').innerHTML = 'Score = ' + score;
                 }else{
                     document.getElementById('result').innerHTML = 'Incorrect';
                     document.getElementById('result').style.color = 'red';
                 }
              }
         if(randQ == 2){
              if(answer == 1){
                 document.getElementById('result').innerHTML = 'Correct';
                    correct = true;
                 document.getElementById('result').style.color = 'green';
                  score++;
                  document.getElementById('score').innerHTML = 'Score = ' + score;
                 }else{
                     document.getElementById('result').innerHTML = 'Incorrect';
                     document.getElementById('result').style.color = 'red';
                 }
              }
        if(randQ == 3){
              if(answer == 0) {
                 document.getElementById('result').innerHTML = 'Correct';
                  correct = true;
                 document.getElementById('result').style.color = 'green';
                  score++;
                  document.getElementById('score').innerHTML = 'Score = ' + score;
                 }else{
                     document.getElementById('result').innerHTML = 'Incorrect';
                     document.getElementById('result').style.color = 'red';
                 }
              }
         if(randQ == 4){
              if(answer == 2) {
                 document.getElementById('result').innerHTML = 'Correct';
                  correct = true;
                 document.getElementById('result').style.color = 'green';
                  score++;
                  document.getElementById('score').innerHTML = 'Score = ' + score;
                 }else{
                     document.getElementById('result').innerHTML = 'Incorrect';
                     document.getElementById('result').style.color = 'red';
                 }
              }
    }
        
        var correct = false;
        
        function next(){
            if(correct == true){
            loadQuestion();
            document.getElementById('result').innerHTML = "";
                correct = false;
            }
        }
        
        function button0(){
            document.getElementById('answer0').style.backgroundColor = 'grey';
            document.getElementById('answer1').style.backgroundColor = 'orange';
            document.getElementById('answer2').style.backgroundColor = 'orange';
            document.getElementById('answer3').style.backgroundColor = 'orange';
        }
        function button1(){
            document.getElementById('answer0').style.backgroundColor = 'orange';
            document.getElementById('answer1').style.backgroundColor = 'grey';
            document.getElementById('answer2').style.backgroundColor = 'orange';
            document.getElementById('answer3').style.backgroundColor = 'orange';
        }
        function button2(){
            document.getElementById('answer0').style.backgroundColor = 'orange';
            document.getElementById('answer1').style.backgroundColor = 'orange';
            document.getElementById('answer2').style.backgroundColor = 'grey';
            document.getElementById('answer3').style.backgroundColor = 'orange';
        }
        function button3(){
            document.getElementById('answer0').style.backgroundColor = 'orange';
            document.getElementById('answer1').style.backgroundColor = 'orange';
            document.getElementById('answer2').style.backgroundColor = 'orange';
            document.getElementById('answer3').style.backgroundColor = 'grey';
        }
        
        
        window.onload = function() {
        loadQuestion();
        }
