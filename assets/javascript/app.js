//global variables
var questionAsked = [
    {
        question: 'Lemurs are native to only one country on earth, name that country.',
        answerChoices: {
            a: 'Australia',
            b: 'Madagascar',
            c: 'Mexico',
            d: 'Chad'
        },
        correctAnswer: 'b'
    },
    {
        question: 'The cheetah is the fastest land animal; what is the second fastest?',
        answerChoices: {
            a: 'Sloth',
            b: 'Tiger',
            c: 'Antelope',
            d: 'Bear'
        },
        correctAnswer: 'c'
    },
    {
        question: 'What colour are flamingos when they are born?',
        answerChoices: {
            a: 'Grey',
            b: 'Pink',
            c: 'White',
            d: 'Traffic Cone Orange'
        },
        correctAnswer: 'a'
    },
    {
        question: 'Which animal is also known as a "Sand Rat" or "Desert Kangaroo"?',
        answerChoices: {
            a: 'Gerbil',
            b: 'Mongoose',
            c: 'Honey Badger',
            d: 'Polar Bear'
        },
        correctAnswer: 'a'
    },
    {
        question: 'The horn of a rhinoceros is made of which material?',
        answerChoices: {
            a: 'Ivory',
            b: 'Gold',
            c: 'Cartilage',
            d: 'Keratin'
        },
        correctAnswer: 'd'
    },
    {
        question: 'How many knees does an elephant have?',
        answerChoices: {
            a: 'Three',
            b: 'Four',
            c: 'Eight',
            d: 'Twenty'
        },
        correctAnswer: 'b'
    }
];

var chosenQuestion = '';
var answerChoices = [];
var rightAnswer = ['Madagascar', 'Antelope', 'Grey', 'Gerbil', 'Keratin', '4'];
var timeRemaining = '';
var correctAnswer = 0;
var wrongGuess = 0;
var isCorrect = false;

function startGame(){
    var chosenQuestion = questionAsked[Math.floor(Math.random() * questionAsked.length)]
    wrongGuess = 0;
    correctGuess = 0;

    function showQuestions(questionAsked){

    }

}

//need a start game function that is called later in the code
//start game screen, on button click run startGame function  and go to different page
//set time interval for 30 seconds per question
//variable for questions asked
//variable for answer choices
//have new screen appear showing correct answer with image
//final screen showing number of correct and incorrect answers and option to restart the game
//start over button on last page, resets the game (using a resetGame function)

//Q1: Lemurs are native to only one country on earth, name that country. answer-Madagascar

https://media.giphy.com/media/Dv2xIMaJsisDe/giphy.gif

//Q2: The cheetah is the fastest land animal; what is the second fastest? answer-Antelope
https://media.giphy.com/media/QhW73JpTi6Oic/giphy.gif

//Q3: What colour are flamingos when they are born? answer-Grey
https://media.giphy.com/media/ygbGMpSxSkyo8/giphy.gif

//Q4: Which animal is also known as a "Sand Rat" or "Desert Kangaroo"? answer -Gerbil
https://media.giphy.com/media/4C4Zxqs5QibUQ/giphy.gif

//Q5: The horn of a rhinoceros is made of which material? answer-Keratin
https://media.giphy.com/media/8gUuSM6DgGLtYIBsOK/giphy.gif

//Q6: How many knees does an elephant have? answer-4
https://media.giphy.com/media/YSfb5vx87BpAU1P9MG/giphy.gif
