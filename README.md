<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CS2 Quiz Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="main-menu" id="main-menu">
      <h2>CS2 Quiz Game</h2>
      <div class="menu-buttons">
        <button id="start-button">Начать викторину</button>
        <button id="rules-button">Правила</button>
      </div>
    </div>
    <div class="quiz-container" style="display: none">
        <div class="score-display">
            Счет: <span id="score">0</span>
        </div>
        <button id="quit-button">Назад в меню</button>
        <h2 id="question-text"></h2>
        <ul id="options-list">
            <!-- Question options will go here as list items -->
        </ul>
        <div class="feedback" id="feedback-text"></div>
        <button id="next-button" style="display:none">Следующий вопрос</button>
    </div>
    <div class="confirmation-menu" id="confirmation-menu" style="display: none">
      <h2>Вы уверены, что хотите вернуться в меню?</h2>
      <button id="confirm-quit-button">Да</button>
      <button id="cancel-quit-button">Нет</button>
    </div>
      <div class="rules-screen" id="rules-screen" style="display: none">
        <h2>Правила Игры</h2>
        <p>
          **Правила викторины CS2**<br><br>
           **Цель:** Эта викторина предназначена для проверки ваших знаний о Counter-Strike 2 (CS2).<br><br>
            **Вопросы:**<br>
            * Викторина содержит ряд вопросов с множественным выбором о различных аспектах CS2.<br>
            * Вопросы отображаются по одному.<br>
            * Порядок вопросов рандомизирован каждый раз, когда вы играете.<br><br>
              **Варианты ответов:**<br>
            * Каждый вопрос имеет четыре варианта ответа.<br>
            * Только один ответ является правильным.<br>
            * Порядок вариантов ответов рандомизирован для каждого вопроса.<br><br>
             **Подсчет очков:**<br>
            * Вы получаете одно очко за каждый правильный ответ.<br>
            * Ваш счет отображается в верхней части экрана игры.<br><br>
              **Геймплей:**<br>
            * Выберите свой ответ, нажав на вариант ответа.<br>
            * После выбора ответа вы увидите, верен ли ваш выбор.<br>
            * Нажмите "Следующий вопрос", чтобы перейти к следующему вопросу, если кнопка доступна.<br><br>
              **Завершение игры:**<br>
            * Викторина заканчивается после того, как на все вопросы были даны ответы.<br>
            * Ваш итоговый счет отображается в конце.<br><br>
              **Навигация:**<br>
            * Вы можете вернуться в главное меню в любое время, используя кнопку "Назад в меню" во время викторины или после ее окончания.<br>
            * Вы можете перезапустить викторину с экрана окончания.<br><br>
              **Выход:**<br>
            * Вы можете использовать кнопку "Назад в меню" внутри викторины, что откроет диалоговое окно подтверждения.<br>
            * Нажатие "Да" вернет вас в главное меню.<br>
            * Нажатие "Нет" закроет диалог.<br><br>
             **Рандомизация:**<br>
            * Как вопросы, так и варианты ответов перемешиваются, чтобы каждый раз игра была свежей.<br><br>
           Наслаждайтесь! Получайте удовольствие от проверки своих знаний CS2!
      </p>
        <button id="close-rules-button">Закрыть</button>
    </div>
   <div id="end-screen" style="display:none;">
        <h2>Викторина завершена</h2>
        <p id="final-score">Ваш итоговый счет: 0</p>
        <button id="restart-button">Перезапустить викторину</button>
        <button id="back-to-menu-button">Назад в меню</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
body {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
}

.quiz-container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 600px;
    text-align: center;
}

.score-display {
  text-align: right;
  padding-bottom: 10px;
}

h2 {
    margin-bottom: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background-color: #e8e8e8;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;
}

li:hover {
    background-color: #d0d0d0;
}
.selected {
  background-color: #c0c0c0 !important;
}
.correct {
  background-color: lightgreen !important;
}
.incorrect {
  background-color: lightcoral !important;
}

.feedback {
    margin-top: 20px;
    font-weight: bold;
}
#end-screen{
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 600px;
    text-align: center;
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}
.main-menu {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 600px;
    text-align: center;
}
.menu-buttons {
    display: flex;
    justify-content: center;
    gap: 10px; /* Space between buttons */
}
.confirmation-menu {
   background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 600px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.rules-screen {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 80%;
    max-width: 600px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
@media (max-width: 768px) {
    .quiz-container {
        width: 95%;
    }
    #end-screen {
      width: 95%;
    }
    .main-menu {
        width: 95%;
    }
    .confirmation-menu {
        width: 95%;
    }
    .rules-screen {
       width: 95%;
    }
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const originalQuestions = [
    {
        question: "Какое оружие по умолчанию у Контр-Террористов в первом раунде?",
        options: ["M4A4", "MP9", "USP-S", "Glock-18"],
        correctAnswer: 2
    },
    {
        question: "Какой из этих карт НЕТ в Активном Мап Пуле?",
        options: ["Mirage", "Dust II", "Cache", "Inferno"],
        correctAnswer: 2
    },
    {
        question: "Каково основное назначение дымовой гранаты?",
        options: ["Ослепить врагов", "Вызвать огненный урон", "Создать временное укрытие", "Замедлить движение врагов"],
        correctAnswer: 2
    },
    {
        question: "Сколько стоит светошумовая граната?",
        options: ["$300", "$200", "$100", "$500"],
        correctAnswer: 1
    },
    {
        question: "Какое оружие известно высокой точностью и останавливающей силой, но низкой скорострельностью?",
        options: ["AK-47", "AWP", "M4A1-S", "FAMAS"],
        correctAnswer: 1
    },
    {
        question: "Как называется внутриигровая голосовая команда для информирования товарищей по команде о вашем местоположении?",
        options: ["Go Go Go", "Roger That", "Affirmative", "Reporting in"],
        correctAnswer: 3
    },
    {
        question: "Какой из этих вариантов не является распространенным вызовом на карте Mirage?",
        options: ["Mid", "A Site", "B Site", "Garage"],
        correctAnswer: 3
    },
    {
        question: "Какова максимальная сумма денег, которую может иметь игрок в матче?",
        options: ["$10,000", "$16,000", "$20,000", "Без ограничений"],
        correctAnswer: 1
    },
    {
        question: "Какая граната может быть использована для тушения коктейля Молотова/зажигательной?",
        options: ["Светошумовая граната", "Дымовая граната", "HE граната", "Ложная граната"],
        correctAnswer: 1
    },
    {
        question: "Как называется стандартный стартовый пистолет Террористов?",
        options: ["USP-S", "P2000", "Glock-18", "Five-SeveN"],
        correctAnswer: 2
    },
    {
        question: "Какой из следующих вариантов является винтовкой, обычно используемой на стороне CT?",
        options: ["AK-47", "M4A4", "SG 553", "Galil AR"],
        correctAnswer: 1
    },
    {
        question: "Какое оружие известно своей способностью убивать с одного выстрела в голову даже бронированных противников?",
        options: ["MP9", "P90", "AWP", "M249"],
        correctAnswer: 2
    },
    {
        question: "Каково назначение техники 'Присесть при ходьбе'?",
        options: ["Для увеличения скорости", "Для уменьшения шума шагов", "Для более высокого прыжка", "Для улучшения прицеливания"],
        correctAnswer: 1
    },
    {
        question: "Как называется экономическая система в игре, где вы зарабатываете деньги за убийство врагов и выигрыш раундов?",
        options: ["Система покупки", "Денежный поток", "Экономика", "Система дохода"],
        correctAnswer: 2
    },
    {
        question: "Какая граната лучше всего подходит для проверки углов и выявления врагов?",
         options: ["Дымовая граната", "Коктейль Молотова", "Светошумовая граната", "Ложная граната"],
        correctAnswer: 2
    },
     {
        question: "Как называется оружие, которое является более дешевой версией AK-47, часто используемое в эко-раундах?",
        options: ["FAMAS", "Galil AR", "AUG", "SG 553"],
        correctAnswer: 1
    },
    {
       question: "На какой карте есть большая открытая зона, известная как 'Длина А'?",
       options: ["Inferno", "Overpass", "Dust II", "Nuke"],
        correctAnswer: 2
    },
    {
       question: "Что означает 'клатч' в CS2?",
        options: ["Установить бомбу", "Выиграть раунд последним оставшимся в живых игроком", "Обезвредить бомбу", "Сделать хэдшот"],
        correctAnswer: 1
    },
     {
        question: "Что за распространенная стратегия, когда несколько игроков одновременно атакуют сайт?",
        options: ["Кемпинг", "Ротация", "Флангование", "Раш"],
        correctAnswer: 3
    },
     {
         question: "Что означает термин 'эко-раунд'?",
        options: ["Раунд, где у игроков много денег для покупки", "Раунд, где у игроков очень мало денег и они не могут много купить", "Раунд без денег", "Раунд, когда вы получаете специальные способности"],
        correctAnswer: 1
    }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

const questionTextElement = document.getElementById("question-text");
const optionsListElement = document.getElementById("options-list");
const scoreDisplayElement = document.getElementById("score");
const feedbackTextElement = document.getElementById("feedback-text");
const nextButton = document.getElementById("next-button");
const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const restartButton = document.getElementById("restart-button");
const menuDiv = document.getElementById('main-menu');
const quizDiv = document.querySelector('.quiz-container');
const startButton = document.getElementById('start-button');
const backToMenuButton = document.getElementById('back-to-menu-button');
const quitButton = document.getElementById('quit-button');
const confirmationMenu = document.getElementById('confirmation-menu');
const confirmQuitButton = document.getElementById('confirm-quit-button');
const cancelQuitButton = document.getElementById('cancel-quit-button');
const rulesButton = document.getElementById('rules-button');
const rulesScreen = document.getElementById('rules-screen');
const closeRulesButton = document.getElementById('close-rules-button');

// New Function
function showMenu(){
  menuDiv.style.display = 'block';
  quizDiv.style.display = 'none';
  endScreen.style.display = 'none';
  confirmationMenu.style.display = 'none';
  rulesScreen.style.display = 'none';
}


startButton.addEventListener('click', function() {
    resetQuiz();
    menuDiv.style.display = 'none';
    quizDiv.style.display = 'block';
    startQuiz();
});

backToMenuButton.addEventListener('click', function() {
    endScreen.style.display = 'none';
    menuDiv.style.display = 'block';
});
quitButton.addEventListener('click', function() {
    confirmationMenu.style.display = 'block';
});
confirmQuitButton.addEventListener('click', function() {
   confirmationMenu.style.display = 'none';
    resetQuiz();
   quizDiv.style.display = 'none';
    menuDiv.style.display = 'block';

});
 cancelQuitButton.addEventListener('click', function() {
   confirmationMenu.style.display = 'none';
});

rulesButton.addEventListener('click', function() {
   rulesScreen.style.display = 'block';
});
closeRulesButton.addEventListener('click', function() {
   rulesScreen.style.display = 'none';
});

// Show menu on page load
showMenu();


function startQuiz() {
    questions = shuffleArray([...originalQuestions]);
    loadQuestion();
}


function loadQuestion() {
    hasAnswered = false;
    const currentQuestion = questions[currentQuestionIndex];
    questionTextElement.textContent = currentQuestion.question;
    optionsListElement.innerHTML = "";

    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    shuffledOptions.forEach((option, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = option;
         listItem.addEventListener("click", () => checkAnswer(index, currentQuestion.correctAnswer, currentQuestion.options, shuffledOptions ));
        optionsListElement.appendChild(listItem);
    });
    feedbackTextElement.textContent = "";
    nextButton.style.display = 'none';
}


function checkAnswer(selectedOptionIndex, originalCorrectAnswerIndex, originalOptions, shuffledOptions) {
   if (hasAnswered) return;
    hasAnswered = true;
    const currentQuestion = questions[currentQuestionIndex];
    const listItems = optionsListElement.children;
    const correctIndex = shuffledOptions.indexOf(originalOptions[originalCorrectAnswerIndex])


    Array.from(listItems).forEach((listItem, index) => {
        if (index === selectedOptionIndex) {
            listItem.classList.add("selected");
        }
        if (index === correctIndex) {
            listItem.classList.add("correct");
        } else if (index === selectedOptionIndex && index !== correctIndex) {
            listItem.classList.add("incorrect");
        }
    });

    if (selectedOptionIndex === correctIndex) {
        score++;
        feedbackTextElement.textContent = "Верно!";
    } else {
        feedbackTextElement.textContent = "Неверно.";
    }
    scoreDisplayElement.textContent = score;
    nextButton.style.display = 'inline-block';
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.querySelector(".quiz-container").style.display = "none";
    endScreen.style.display = "block";
    finalScore.textContent = `Ваш итоговый счет: ${score}`;
}

function restartQuiz() {
    document.querySelector(".quiz-container").style.display = "block";
    endScreen.style.display = "none";
    resetQuiz();
    startQuiz();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplayElement.textContent = 0;
    const listItems = optionsListElement.children;

    // Remove styling from old answers
    Array.from(listItems).forEach((listItem) => {
        listItem.classList.remove("selected", "correct", "incorrect");
    });
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
