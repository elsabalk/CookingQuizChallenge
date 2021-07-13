//set timer
var timerDisplayEl = document.getElementById("time");
var startButtonEl = document.getElementById("startButton");


var questionBlockEl = document.getElementById("questions");



function startTimer() {
    quizLoop();
    var counter = 45;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('Sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
startButtonEl.addEventListener("click", startTimer)



var questionArray = [
    {
        question: "Which pasta is shaped like a bowtie?",
        choices: ["Rotini", "Pappardelle", "Farfalle", "Bucatini"],
        answer: "Farfalle"
    },
    
    {
        question: "What are the main ingredients in a roux?",
        choices: ["Flour and Butter", "Flour and Water", "Flour and Egg", "Flour and Milk"],
        answer: "Flour and Butter"
    }
    {
        question: "Which country does Havarti cheese originate from?",
        choices: ["Germany", "Italy", "France", "Denmark"],
        answer: "Denmark"
    },
    {
        question: "How is steak tartare cooked?",
        choices: ["Raw", "Well Done", "Medium", "Rare"],
        answer: "Raw"
    },
    {
        question: "What shape is a julienned fruit or vegetable?",
        choices: ["Cube", "Matchstick", "Round", "Disc"],
        answer: "Matchstick"
    },]
    

