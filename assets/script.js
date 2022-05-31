// timer
var timeLeft = document.querySelector(".timer");
var timer = function(time) {
  timeLeft.innerText ="You have " + time + " seconds remaining.";
  setTimeout(() => {
    if (time > 0) {
      time--;
      return timer(time);
    } else {
      // alert("You have run out of time! :( ")
    };
  }, 1000);
};
// how long the user has to complete the quiz
timer();



// quiz container
var quizEl = document.querySelector(".quiz");

// quiz question container
// var questionEl = document.querySelector(".question")

var generateQuiz = function() {
  // for loop to loop through questions and store answers
  var quizQuestions = [
    {
      question: "What is the correct syntax for writing a function?",
      answers: {
        a: "function()",
        b: "function{}",
        c: "function[]", 
        d: "function<>"
      },
    },
  
    { 
      question: "To create an array, you must wrap the elements of it with ",
      answers: {
        a:"{}",
        b:"[]",
        c:"<>",
        d:"\/"      
      },
    },
  
    { 
      question: "",
      answers: {
        a:"",
        b:"",
        c:"",
        d:""
      },
    },

    { 
      question: "",
      answers: {
        a:"",
        b:"",
        c:"",
        d:""
      },
    }
  ];
  quizEl.innerHTML= quizQuestions;
};

generateQuiz();





// // // user answer?
// var answers = question.answer[letter];
// userAnswers.push(answers);



// submit answers button
var submit = document.querySelector(".btn")
submit.innerHTML = "<input type='submit' name='submit'>";

