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
    }


];

var timeRemaining = 30;
var rightAnswer = 0;
var wrongAnswer = 0;
var userGuess;
var currentQuestion = 0; //refrences the indicies of questionAsked
var timer;



var startGame = {
    countDown: function () {
        timeRemaining--;
        // $('#timer').text(timeRemaining);
        $('#timer').html('<i class="fa fa-clock-o fa-2x" aria-hidden="true"></i> ' + ' ' + timeRemaining);
        if (timeRemaining === 0) {
            startGame.endGame();
            $('#timer').text('');
            $('#question_div').empty();
            $('#choices_div').empty();
            $("#answer-display").text('You\'re out of time! Correct answer is ' + questionAsked[currentQuestion].correctAnswer);
            var elem = document.createElement('img');
            elem.setAttribute('src', questionAsked[currentQuestion].image);
            document.getElementById('answer-display').appendChild(elem);
            setTimeout(startGame.displayNextQuestion, 3000); //waits 3 secs then runs displayNextQuestion function
        }
    },
    //displays question and multiple choice answers to screen
    displayQuestion: function () {
        console.log('current question: ' + currentQuestion);
        if (currentQuestion >= 6) {
            clearInterval(timer);
            finalTally();
        }

        $('#answer-display').text('');
        timer = setInterval(this.countDown, 1000)
        $('#question_div').html(`<h2>${questionAsked[currentQuestion].question}</h2>`)

        for (var i = 0; i < questionAsked[currentQuestion].answerChoices.length; i++) {
            $('#choices_div').append(`<button class='select-answer' data-name = ${questionAsked[currentQuestion].answerChoices[i]}>${questionAsked[currentQuestion].answerChoices[i]}</button>`)
        }

    },
    //reset countdown timer and move on to next question in questionAsked array
    displayNextQuestion: function () {

        clearInterval(timer);
        timeRemaining = 30;
        $('#timer').text(timeRemaining);
        currentQuestion++;
        startGame.displayQuestion();


    },

    //function called in countdown function
    endGame: function () {
        clearInterval(timer);
        wrongAnswer++;
    }

}

$('#startButton').on('click', function () {
    startGame.displayQuestion();
    // this.remove('.home-screen');
    $('.home-screen').css('display', 'none')
    $('.questions').css({
        'height': '500px', 'width': '600px',
        'background-color': 'tan', 'border-style': 'ridge', 'border-radius': '20px'
    })
})

//displays whther chosen answer choice is correct or incorrect and appends gif
$(document).on('click', '.select-answer', function () {
    // alert($(this).attr('data-name'));
    console.log(questionAsked[currentQuestion].correctAnswer);
    clearInterval(timer);
    $('#timer').text('');
    $('#question_div').empty();
    $('#choices_div').empty();
    $('#Start-game').remove();
    if ($(this).attr('data-name') === questionAsked[currentQuestion].correctAnswer) {
        // console.log('correct!')
        $("#answer-display").text('Correct!');
        rightAnswer++;
        var elem = document.createElement('img');
        elem.setAttribute('src', questionAsked[currentQuestion].image);
        document.getElementById('answer-display').appendChild(elem);
    } else {
        wrongAnswer++;
        console.log('Wrong answer counter: ' + wrongAnswer);
        $("#answer-display").html('Oops! Correct answer is ' + questionAsked[currentQuestion].correctAnswer + '<br/>');
        elem = document.createElement('img');
        elem.setAttribute('src', questionAsked[currentQuestion].image);
        document.getElementById('answer-display').appendChild(elem);
    }
    setTimeout(startGame.displayNextQuestion, 3000)
});


//add function for displaying end game score tally with a button to restart game(without reloading the page)

function finalTally() {

    $('#timer').text('');
    $('#answer-display').empty();

    $('#question_div').html('Correct Answers: ' + rightAnswer +
        '<br/>' + 'Incorrect Answers: ' + wrongAnswer
        + '<button class=\'restart\'>Restart Game?</button>');


}

$(document).on('click', '.restart', () => {
    // $('#question_div').empty();
    currentQuestion = 0;
    $('.restart').remove();
    rightAnswer = 0;
    wrongAnswer = 0;

    timeRemaining = 30;

    startGame.displayQuestion();

})



