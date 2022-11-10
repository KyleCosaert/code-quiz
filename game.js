var question = document.querySelector('#question');
var choices = Array.from.document.querySelectorAll('#choices-text');
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let question = [
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '12',
        choice4: '.4',
        answer: 2,
    },
    {
        question: 'What is 2 + 50?',
        choice1: '2',
        choice2: '4',
        choice3: '52',
        choice4: '.4',
        answer: 52,
    },
    {
        question: 'What is 5 + 23?',
        choice1: '2',
        choice2: '4',
        choice3: '12',
        choice4: '28',
        answer: 28,
    },
    {
        question: 'What is 33 + 33?',
        choice1: '66',
        choice2: '4',
        choice3: '12',
        choice4: '.4',
        answer: 66,
    },
]

var SCORE_POINTS = 100;
var MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...questions];
    getNewQuestion();
}

// video is at 38:50

getNewQuestion = () => {

}