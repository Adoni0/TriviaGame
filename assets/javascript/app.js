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
var currentQuestion = 0;
var timer;



var startGame = {
    countDown: function(){
        timeRemaining--;
        $('#timer').text(timeRemaining);
        if(timeRemaining === 0){
            startGame.endGame();
        }
        // startGame.displayQuestion();
    },
    displayQuestion: function(){
        $('#answer-display').text('');
        timer = setInterval(this.countDown, 1000)
        $('#question_div').html(`<h2>${questionAsked[currentQuestion].question}</h2>`)
        
        for(var i = 0; i < questionAsked[currentQuestion].answerChoices.length; i++){
            $('#choices_div').append(`<button class='select-answer' id='buttonID' data-name = ${questionAsked[currentQuestion].answerChoices[i]}>${questionAsked[currentQuestion].answerChoices[i]}</button>`)   
        }

    },

    displayNextQuestion: function(){
        clearInterval(timer);
        timeRemaining = 30;
        $('#timer').text(timeRemaining);
        currentQuestion++;
        startGame.displayQuestion();
    }, 
    
    endGame: function(){
        clearInterval(timer);
        $('#timer').html('<h3>You\'re out of time!</h3>')
        wrongAnswer++;
    }

}
    
$('#startButton').on('click', function(){
    startGame.displayQuestion();
    this.remove('#Start-game');
})
  
$(document).on('click', '.select-answer', function(){
    // alert($(this).attr('data-name'));
    console.log(questionAsked[currentQuestion].correctAnswer)
    $('#timer').text('');
    $('#question_div').empty();
     $('#choices_div').empty();
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
  
//add gif image to answer display id



