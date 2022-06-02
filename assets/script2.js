// timer
//start when the quiz starts
var timer = function(time) {
  let timeLeft = document.querySelector(".timer");
  timeLeft.innerText = "You have " + time + " seconds remaining."
  setTimeout(() => {
    if (time > 0) {
      time--;
      timer(time);
    } else {
      alert("You have run out of time! :( ")
    };
  }, 1000);
};

// subtract time when user answers incorrectly
function subtractTime () {
  time -= 5;
};

// quiz 
let questionCount = 0;
let quiz = document.querySelector(".quiz");
let startBtn = quiz.innerHTML = "<input type='submit' value='Start quiz' class='start'>"
document.querySelector(".start").addEventListener("click", function(){
  beginQuiz();
})



function beginQuiz () {
  timer(5);
  // quiz questions
  const quizQuestions = [    
    { 
      question: "To create an array, you must wrap the elements of it with: ",
      a: "{}",
      b: "[]",
      c: "<>",
      d: "\/",      
      correctAns: "b"
    },

    {
      question: "What can you use to set a 5 second delay for a function?",
      a: "setTimeout(function{}, 5)", 
      b: "setTimeOut(function{}, 5000)",
      c: "setTimeout(function{}, 5)",
      d: "setTimeout(function{}, 5000)",
      correctAns: "d"
    }
  ];
  
  // add radio buttons
  for (var i = 0; i < quizQuestions.length; i++) {
    quizQuestions[i].a.innerHTML = "<input type='radio' name='answer'>" 
    };

  const questions = document.querySelector(".quiz")
  const question = quizQuestions[questionCount].question;
  const a = quizQuestions[questionCount].a;
  const b = quizQuestions[questionCount].b;
  const c = quizQuestions[questionCount].c;
  const d = quizQuestions[questionCount].d;
  questions.append(question, a, b, c, d)
  questions.addEventListener('click', function(event) {
    if(event.target === quizQuestions[questionCount].correctAns){
      alert('correct!')
      questionCount++;
    } else {
     subtractTime();
    };
  })
};

function app() { 
  while(questionCount < 3) {
    beginQuiz();
  }
};