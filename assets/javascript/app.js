//global variables
var questionAsked = [
    {
        question: 'Lemurs are native to only one country on earth, name that country.',
        answerChoices: ['Australia', 'Madagascar', 'Mexico', 'Chad'],
        image: 'https://media.giphy.com/media/Dv2xIMaJsisDe/giphy.gif',
        correctAnswer: 1    
    },
       
    {
        question: 'The cheetah is the fastest land animal; what is the second fastest?',
        answerChoices: ['Sloth', 'Tiger', 'Antelope', ' Grizzly Bear'],
        image: 'https://media.giphy.com/media/QhW73JpTi6Oic/giphy.gif',
        correctAnswer: 2
    },
    
    {
        question: 'What colour are flamingos when they are born?',
        answerChoices: ['Grey', 'Pink', 'White', 'Traffic Cone Orange'],
        image: 'https://media.giphy.com/media/ygbGMpSxSkyo8/giphy.gif',    
        correctAnswer: 0  
    },
    
    {
        question: 'Which animal is also known as a "Sand Rat" or "Desert Kangaroo"?',
        answerChoices: ['Gerbil', 'Mongoose', 'Honey Badger', 'Polar Bear'],
        image: 'https://media.giphy.com/media/4C4Zxqs5QibUQ/giphy.gif',     
        correctAnswer: 0
    },
    
    {
        question: 'The horn of a rhinoceros is made of which material?',
        answerChoices: ['Ivory', 'Gold', 'Cartilage', 'Keratin'],
        image: 'https://media.giphy.com/media/8gUuSM6DgGLtYIBsOK/giphy.gif',
        correctAnswer: 3
    },
        
    {
        question: 'How many knees does an elephant have?',
        answerChoices: ['Three', 'Four', 'Eight', 'Twenty'],
        image: 'https://media.giphy.com/media/YSfb5vx87BpAU1P9MG/giphy.gif',
        correctAnswer: 1
     },
       
        
];

var answerChoices = [];
var correctAnswer = ['Madagascar', 'Antelope', 'Grey', 'Gerbil', 'Keratin', '4'];
var timeRemaining = '';
var rightAnswer = 0;
var wrongAnswer = 0;
var isCorrect = false;

function startGame(){
    questionAsked = [];
    wrongGuess = 0;
    correctGuess = 0;

    var secondsBetweenActions = 30;
    var secondsRemaining = secondsBetweenActions;
    setInterval( function() {
        updateStatus(secondsRemaining);
        secondsRemaining--;
        if( secondsRemaining === 0 ) { //if time runs out, 
            doAction();
            secondsRemaining = secondsBetweenActions;
        }
    }, 1000 );

    function updateStatus(){
        $('#timer').text(secondsRemaining)
    }

    function doAction(){
        var userGuess = document.on('click', e)
        if(userGuess = correctAnswer){
            //have 'Correct!' displayed into a div
        }
    }

}




//start game screen, on button click run startGame function  and go to different page
//set time interval for 30 seconds per question
//have new screen appear showing correct answer with image
//final screen showing number of correct and incorrect answers and option to restart the game
//start over button on last page, resets the game (using a resetGame function)

