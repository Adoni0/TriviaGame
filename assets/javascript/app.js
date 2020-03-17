//global variables
var questionAsked = [
    {
        question: 'Lemurs are native to only one country on earth, name that country.',
        answerChoices: ['Australia', 'Madagascar', 'Mexico', 'Chad'],
        image: 'https://media.giphy.com/media/Dv2xIMaJsisDe/giphy.gif',
        correctAnswer: 'Madagascar'    
    },
       
    {
        question: 'The cheetah is the fastest land animal; what is the second fastest?',
        answerChoices: ['Sloth', 'Tiger', 'Antelope', ' Grizzly Bear'],
        image: 'https://media.giphy.com/media/QhW73JpTi6Oic/giphy.gif',
        correctAnswer: 'Antelope'
    },
    
    {
        question: 'What colour are flamingos when they are born?',
        answerChoices: ['Grey', 'Pink', 'White', 'Traffic Cone Orange'],
        image: 'https://media.giphy.com/media/ygbGMpSxSkyo8/giphy.gif',    
        correctAnswer: 'Grey'  
    },
    
    {
        question: 'Which animal is also known as a "Sand Rat" or "Desert Kangaroo"?',
        answerChoices: ['Gerbil', 'Mongoose', 'Honey Badger', 'Polar Bear'],
        image: 'https://media.giphy.com/media/4C4Zxqs5QibUQ/giphy.gif',     
        correctAnswer: 'Gerbil'
    },
    
    {
        question: 'The horn of a rhinoceros is made of which material?',
        answerChoices: ['Ivory', 'Gold', 'Cartilage', 'Keratin'],
        image: 'https://media.giphy.com/media/8gUuSM6DgGLtYIBsOK/giphy.gif',
        correctAnswer: 'Keratin'
    },
        
    {
        question: 'How many knees does an elephant have?',
        answerChoices: ['Three', 'Four', 'Eight', 'Twenty'],
        image: 'https://media.giphy.com/media/YSfb5vx87BpAU1P9MG/giphy.gif',
        correctAnswer: 'Four'
     },
       
        
];

var timeRemaining = 30;
var rightAnswer = 0;
var wrongAnswer = 0;
var userGuess;
var currentQuestion = 0; //refrences the indicies of questionAsked
var timer;



var startGame = {
    countDown: function(){
        timeRemaining--;
        $('#timer').text(timeRemaining);
        if(timeRemaining === 0){
            startGame.endGame();
            $('#timer').text('');
            $('#question_div').empty();
            $('#choices_div').empty();
            $("#answer-display").text('You\'re out of time! Correct answer is ' + questionAsked[currentQuestion].correctAnswer);
        var elem = document.createElement('img');
        elem.setAttribute('src', questionAsked[currentQuestion].image);
        document.getElementById('answer-display').appendChild(elem);
        setTimeout(startGame.displayNextQuestion, 5000); //waits 5 secs then runs displayNextQuestion function
        }
    },
    //displays question and multiple choice answers to screen
    displayQuestion: function(){
        $('#answer-display').text('');
        timer = setInterval(this.countDown, 1000)
        $('#question_div').html(`<h2>${questionAsked[currentQuestion].question}</h2>`)
        
        for(var i = 0; i < questionAsked[currentQuestion].answerChoices.length; i++){
            $('#choices_div').append(`<button class='select-answer' data-name = ${questionAsked[currentQuestion].answerChoices[i]}>${questionAsked[currentQuestion].answerChoices[i]}</button>`)     
        }
        // for(var i = 0; i > questionAsked[5].correctAnswer.length; i++){
        //     finalTally();
        // }
    },
    //reset countdown timer and move on to next question in questionAsked array
    displayNextQuestion: function(){
        clearInterval(timer);
        timeRemaining = 30;
        $('#timer').text(timeRemaining);
        currentQuestion++;
        startGame.displayQuestion();

    }, 
    //function called in countdown function
    endGame: function(){
        clearInterval(timer);
        wrongAnswer++;
    }

}
    
$('#startButton').on('click', function(){
    startGame.displayQuestion();
    this.remove('#Start-game');
})
  //displays whther chosen answer choice is correct or incorrect and appends gif
$(document).on('click', '.select-answer', function(){
    // alert($(this).attr('data-name'));
    console.log(questionAsked[currentQuestion].correctAnswer);
    clearInterval(timer);
    $('#timer').text('');
    $('#question_div').empty();
    $('#choices_div').empty();
    $('#Start-game').remove();
    if($(this).attr('data-name') === questionAsked[currentQuestion].correctAnswer){
        console.log('correct!')
        $("#answer-display").text('Correct!');
        rightAnswer++;
        var elem = document.createElement('img');
        elem.setAttribute('src', questionAsked[currentQuestion].image);
        document.getElementById('answer-display').appendChild(elem);
    } else{
        console.log('wrong')
        wrongAnswer++;
        $("#answer-display").text('Oops! Correct answer is ' + questionAsked[currentQuestion].correctAnswer);
        elem = document.createElement('img');
        elem.setAttribute('src', questionAsked[currentQuestion].image);
        document.getElementById('answer-display').appendChild(elem);
    }
   setTimeout(startGame.displayNextQuestion, 5000)
});
  

//add function for displaying end game score tally with a button to restart game(without reloading the page)

function finalTally(){
    clearInterval(timer);
    $('#timer').remove();
    $('#answer-display').empty();
    $('#answer-display').text('Correct Answers: ' + rightAnswer);
    $('#answer-display').text('Incorrect Answers: ' + wrongAnswer);
    $('#answer-display').appendChild('<button class=\'restart\'>Restart Game?</button>')

    $('.restart').on('click', function(){
        startGame.displayQuestion();
        this.remove('.restart');
    })
}
//I was unable to figure out a way to call my final tally function that was supposed to show the number of correct and incorrect answers
