// timer
var timeLeft = document.querySelector(".timer");
var timer = function(time) {
  timeLeft.innerText ="You have " + time + " seconds remaining.";
  setTimeout(() => {
    if (time > 0) {
      time--;
      return timer(time);
    } else {
    //  alert("You have run out of time! :( ")
    };
  }, 1000);
};
// how long the user has to complete the quiz
timer();


// submit button
var submit = document.querySelector(".btn")
submit.innerHTML = "<input type='submit' name='submit'>";
var userAnswer = submit.onclick = function(){
  // if ans correct, next question
  // if ans !correct, time = time - 5;

}



// quiz container
var quizEl = document.querySelector(".quiz");

// answers container
var answersEl = document.querySelector(".answers")


// quiz question container
var questionEl = document.querySelector(".question")
function beginQuiz(questions){  
  
    // quizEl.innerHTML = quizQuestions.question;
    // var userAnswers = [];
    // quiz questions with possible answers
    // questions and answers in object
    // push selected answer to userAnswers array

    quizEl.textContent = "What is the correct syntax for writing a function?"
    answersEl.innerHTML = "<input type='radio' name='answer'> 1: function() <br> <input type='radio' name='answer'> 2: function{} <br> <input type='radio' name='answer'>  3: function[] <br> <input type='radio' name='answer'>  4: function<>"
    quizQuestions;
  };

// end of quiz when time runs out or user answers all
function endQuiz() {
};


  
var quizQuestions = [ 
  // { qid: 1,
  //   questionPrompt: "question",
  //   choice: [a, b, c, d],
  //   verify: [1, 0, 0, 0]

  //   // answers: 
  //   //   answersEl.innerHTML = "<input type='radio' name='answer'> 1: function() <br> <input type='radio' name='answer'> 2: function{} <br> <input type='radio' name='answer'>  3: function[] <br> <input type='radio' name='answer'>  4: function<>"
  // },
];
  


  
    // question: "To create an array, you must wrap the elements of it with ",
    // answers: {
    //   1:"{}",
    //   2:"[]",
    //   3:"<>",
    //   4:"\/"      
    // },

 
// display quiz results function
function results () {
};

beginQuiz(quizQuestions);



