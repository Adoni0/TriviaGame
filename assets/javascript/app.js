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
        this.displayQuestion();
    },
    displayQuestion: function(){
        timer = setInterval(this.countDown, 1000)
        $('#question_div').html(`<h2>${questionAsked[currentQuestion].question}</h2>`)
        
        for(var i = 0; i < questionAsked[currentQuestion].answerChoices.length; i++){
            $('#choices_div').append(`<button class='select-answer' id='buttonID' data-name = ${questionAsked[currentQuestion].answerChoices[i]}>${questionAsked[currentQuestion].answerChoices[i]}</button>`)   
        }

        // $('.select-answer').on('click', function(){
        //     $('#question_div').remove();
        //     $('#choices_div').remove();
        //     document.html('<div id=show-result></div>')
            
        //     if(userGuess === questionAsked[currentQuestion].correctAnswer){
        //         $('#show-result').text('Correct');
        //         rightAnswer++;
        //         //add image gif
        //     }
        //     else{
        //         $('#show-result').text('Oops! Correct answer was Madagascar.');
        //         wrongAnswer++;
        //     }
            
        // })
    },
    
    //set check for if the user guess equals correct answer
    //if correct answer is clicked, hide start game button and display new div showing 'Correct!' with gif image

    displayNextQuestion: function(){
        timeRemaining = 30;
        $('#timer').text(timeRemaining);
        currentQuestion = 1;
        this.displayQuestion();
    }, 
    
    endGame: function(){
        clearInterval(timer);
        $('#timer').html('<h3>You\'re out of time!</h3>')
        wrongAnswer++;
    }

}
    
$('#startButton').on('click', function(){
    startGame.countDown();
    this.remove('#Start-game');
})
  

    

//have new screen appear showing correct answer with image
//final screen showing number of correct and incorrect answers and option to restart the game
//start over button on last page, resets the game (using a resetGame function)

