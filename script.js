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


startButton.addEventListener('click', function() {
    resetQuiz();
    menuDiv.style.display = 'none';
    quizDiv.style.display = 'block';
    startQuiz();
});

backToMenuButton.addEventListener('click', function() {
    endScreen.style.display = 'none';
    menuDiv.style.display = 'block';
    localStorage.clear() // Clear state when returning to menu
});
quitButton.addEventListener('click', function() {
    confirmationMenu.style.display = 'block';
});
confirmQuitButton.addEventListener('click', function() {
   confirmationMenu.style.display = 'none';
    resetQuiz();
   quizDiv.style.display = 'none';
   menuDiv.style.display = 'block';
   localStorage.clear() // Clear state when quitting
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

function showMenu() {
    menuDiv.style.display = 'block';
    quizDiv.style.display = 'none';
    endScreen.style.display = 'none';
    confirmationMenu.style.display = 'none';
    rulesScreen.style.display = 'none';
}


function startQuiz() {
    const savedState = localStorage.getItem("quizState");
      if (savedState) {
        const state = JSON.parse(savedState);
        questions = state.questions;
        currentQuestionIndex = state.currentQuestionIndex;
        score = state.score;
         if (currentQuestionIndex < questions.length) {
             loadQuestion();
           quizDiv.style.display = 'block';
          menuDiv.style.display = 'none';
         } else {
            endQuiz();
        }

    } else {
      questions = shuffleArray([...originalQuestions]);
       loadQuestion();
    }
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
          listItem.addEventListener("click", () => checkAnswer(index, currentQuestion.correctAnswer, currentQuestion.options, shuffledOptions));
        optionsListElement.appendChild(listItem);
    });
    feedbackTextElement.textContent = "";
    nextButton.style.display = 'none';
  updateScoreDisplay();
}

function updateScoreDisplay() {
 scoreDisplayElement.textContent = score;
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
   updateScoreDisplay();
    nextButton.style.display = 'inline-block';
    saveGameState();
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
        endQuiz();
    }
   saveGameState();
}


function endQuiz() {
    document.querySelector(".quiz-container").style.display = "none";
    endScreen.style.display = "block";
    finalScore.textContent = `Ваш итоговый счет: ${score}`;
    localStorage.clear()
}

function restartQuiz() {
    document.querySelector(".quiz-container").style.display = "block";
    endScreen.style.display = "none";
    resetQuiz();
    startQuiz();
    localStorage.clear()
}


function resetQuiz() {
   currentQuestionIndex = 0;
   score = 0;
    updateScoreDisplay()
    const listItems = optionsListElement.children;

    // Remove styling from old answers
    Array.from(listItems).forEach((listItem) => {
        listItem.classList.remove("selected", "correct", "incorrect");
    });
}

function saveGameState(){
    const gameState = {
       questions,
        currentQuestionIndex,
       score,
    };
    localStorage.setItem("quizState", JSON.stringify(gameState))
}


 // Initial Check to see if we have state
  const savedState = localStorage.getItem("quizState");
  if (savedState) {
    startQuiz();
  } else {
     showMenu();
}


nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);