var timerDisplayEl = document.getElementById("time");
var startButtonEl = document.getElementById("startButton");

var quizContainerEl = document.getElementById("questionOne");
var nextQuestionEl = document.getElementById("nextQuestion");
var submitButton = document.getElementById("quizSubmit");
var quizAnswersButton = document.getElementById("quizAnswers");


startButtonEl.addEventListener("click", startTimer);

function startTimer()
{
	startButtonEl.remove();
	var counter = 90;
	setInterval(function()
	{
		counter--;
		if (counter >= 0)
		{
			span = document.getElementById("count");
			span.innerHTML = counter;
		}
		if (counter === 0)
		{
			alert("Sorry, you ran out of time");
			clearInterval(counter);
		}
	}, 1000);

	startButtonEl.classList.add("hide");

	var questionOne = [
		{
			question: "Which pasta is shaped like a bowtie?",
			choices: ["Rotini", "Pappardelle", "Farfalle", "Bucatini"],
			answer: "Farfalle",
		},

		{
			question: "Which country does Havarti cheese originate from?",
			choices: ["Germany", "Italy", "France", "Denmark"],
			answer: "Denmark",
		},

		{
			question: "What are the main ingredients in a roux?",
			choices: ["Flour and Butter", "Flour and Water", "Flour and Egg", "Flour and Milk"],
			answer: "Flour and Butter",
		},

		{
			question: "How is steak tartare cooked?",
			choices: ["Raw", "Well Done", "Medium", "Raw"],
			answer: "Raw",
		},

		{
			question: "What shape is a julienned fruit or vegetable?",
			choices: ["Cube", "Matchstick", "Round", "Disk"],
			answer: "Matchstick",
		},
	];

  question1();
  //question2();
  //question3();
  function question1(){

		//Create the element using the createElement method.
		var myDiv = document.createElement("div");
		myDiv.id = "div_id1";
		myDiv.innerHTML = `

    
    <div>
    <p class="question">1. ${questionOne[0].question}</p>

    <ul>
    <input class="answer" type="radio" name="q1" value="1">
      <label id="correctString1">${questionOne[0].choices[0]}</label>
    <br>
      <input class="answer" type="radio" name="q1" value="0">
      <label>${questionOne[0].choices[1]}</label>
      <br>
      <input class="answer" type="radio" name="q1" value="0">
      <label>${questionOne[0].choices[2]}</label>
      <br>
      <input class="answer" type="radio" name="q1" value="0">
      <label>${questionOne[0].choices[3]}</label>
    </ul>
  </div>`
		document.body.appendChild(myDiv);

    }
    

	function question2()
	{
		//Create the element using the createElement method.
		var myDiv2 = document.createElement("div");
		myDiv2.id = "div_id2";
		myDiv2.innerHTML = 
	` <div>
  <p class="question">2. ${questionOne[1].question}</p>

  <ul>
  <input class="answer" type="radio" name="q1" value="1">
    <label id="correctString1">${questionOne[1].choices[0]}</label>
  <br>
    <input class="answer" type="radio" name="q1" value="0">
    <label>${questionOne[1].choices[1]}</label>
    <br>
    <input class="answer" type="radio" name="q1" value="0">
    <label>${questionOne[1].choices[2]}</label>
    <br>
    <input class="answer" type="radio" name="q1" value="0">
    <label>${questionOne[1].choices[3]}</label>
  </ul>
</div>`
  //nextQuestionEl.addEventListener("click", question2);
		document.body.appendChild(myDiv2);

	}

}