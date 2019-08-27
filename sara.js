   // function checkScores(){
     //   alert ("hi world");//
    
function checkScores() {

    let score = 0;

     //answers
    let firstAnswer = document.querySelector('input#3- fornt end ,back end,dataBase').checked;
    let secondAnswer = document.querySelector('input#"HTML stands for Hyper Text Markup Language').checked;
    let thirdAnswer = document.querySelector('input#AllOfThem').checked;
    let forthAnswer = document.querySelector('input#300MB').checked;
    let fithAnswer = document.querySelector('input#DNS').checked;
    let sixthAnswer = document.querySelector('input#fireFox').checked;

    let answers = [firstAnswer, secondAnswer, thirdAnswer, forthAnswer, fifthAnswer, sixthAnswer]
    for (let i = 0; i < answers.length; i++) {

        if (answers[i] == true) {
            score += 1;
        }
    }
    if (score == 7) {
        alert("Congratulations!! You did a great job. You have scored " + score + " out of 7");

    } else {
        alert("You have scored " + score + " out of 7");
    }
}
   /* function submitAnswers() {
        var total = 5;
        var score = 0;
        
        //Get User Input
        var q1 = document.forms["quizForm"]["q1"].value;
        var q2 = document.forms["quizForm"]["q2"].value;
        var q3 = document.forms["quizForm"]["q3"].value;
        var q4 = document.forms["quizForm"]["q4"].value;
        var q5 = document.forms["quizForm"]["q5"].value;
        
        //Validation	
        for(i=1; i<=total; i++) {
            if(eval('q'+i) === null || eval('q'+i) === '') {
                alert('You missed question '+ i);
                return false;
            }
        }
        
        //Set Correct Answers
        var answers = ["b","a","d","b","d"];
        
        //Check Answers
        for(i=1; i<=total; i++) {
            if(eval('q'+i) === answers[i-1]) {
                score++;
            }
        }	
        
        //Display Results
        var results = document.getElementById('results');
        results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
        alert('You scored '+score+' out of '+total);
    
        return false;
    }
    