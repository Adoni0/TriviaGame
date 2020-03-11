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
        $('#question_div').html(`<h1>${questionAsked[currentQuestion].question}</h1>`)
        
        for(var i = 0; i < questionAsked[currentQuestion].answerChoices.length; i++){
            $('#choices_div').append(`<button class='select-answer' id='buttonID'></button>`)   
        }
    }
}
    
$('#startButton').on('click', function(){
    startGame.countDown()
})
    
    // var secondsRemaining = 30;
    // setInterval( function() {
    //     updateStatus(secondsRemaining);
    //     secondsRemaining--;
    //     document.getElementById('choices_div').addEventListener('click', function(){
    //         //on click check if user guess = correct answer
    //         if(userGuess != correctAnswer){
    //             wrongAnswer++;
    //             document.createElement('div'); //add an id and text to div
    //         } else if (secondsRemaining = 0){
    //             wrongAnswer ++;
    //             document.createElement('div');
    //         }
    //         else{
    //             rightAnswer++;
    //             var answerBox = document.createElement('div');
    //             answerBox.id = 'text-box';
    //             $('#text-box').text('Correct!')
    //         }
    //     })
        
    // }, 1000 );

    // function updateStatus(){
    //     $('#timer').text(secondsRemaining)
    // }









//start game screen, on button click run startGame function  and go to different page
//set time interval for 30 seconds per question
//have new screen appear showing correct answer with image
//final screen showing number of correct and incorrect answers and option to restart the game
//start over button on last page, resets the game (using a resetGame function)

