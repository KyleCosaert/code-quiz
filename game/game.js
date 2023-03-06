var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

// questions for code quiz
let questions = [
    {
        question: 'JavaScript Question: What is the difference between null and undefined in JavaScript?',
        choice1: 'Null is a value that represents intentional non-existence while undefined represents a value that has not been assigned to a variable or object property.',
        choice2: 'Null creates a non existing number that can only be translated in latin.',
        choice3: 'Gives you your zodiac sign',
        choice4: 'Null does mean undefined',
        answer: 'Null is a value that represents intentional non-existence while undefined represents a value that has not been assigned to a variable or object property.',
    },
    {
        question: 'HTML Question: What is the purpose of the <head> tag in HTML?',
        choice1: 'ask someone else please',
        choice2: 'links the js files',
        choice3: 'provide information about the HTML document such as the title, metadata, scripts, and links to external stylesheets',
        choice4: 'looks really pretty',
        answer: 'provide information about the HTML document such as the title, metadata, scripts, and links to external stylesheets',
    },
    {
        question: 'CSS Question: What is the box model in CSS?',
        choice1: 'at least 3',
        choice2: 'ask me again later',
        choice3: 'I do not know',
        choice4: 'describes how elements are displayed on a web page',
        answer: 'describes how elements are displayed on a web page',
    },
    {
        question: 'JavaScript Question: What is a closure in JavaScript?',
        choice1: 'A closure is a function that has access to variables in its outer lexical scope even after the outer function has returned.',
        choice2: 'A concusion',
        choice3: 'Something that has to do with closing',
        choice4: 'blah blah blah',
        answer: 'A closure is a function that has access to variables in its outer lexical scope even after the outer function has returned.',
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

// generating a new question
getNewQuestion = () => {
    if(availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end/end.html');
    }
    // increments the current question number by 1
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}`

    // generates a random questions
    var questionIdex = Math.floor(Math.random() * availableQuestion.length)
    currentQuestion = availableQuestion[questionIdex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestion.splice(questionIdex, 1)

    acceptingAnswers = true;

}

// click listener for correct answer
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()