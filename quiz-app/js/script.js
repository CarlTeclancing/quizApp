
const quizData = [
  {
    question: 'What is the oldest programing language?',
    a: 'python',
    b: 'java',
    c: 'c++',
    d: 'javascript',
    correct: 'c'
  },
  {
    question: 'which programing language is the must popular?',
    a: 'python',
    b: 'java',
    c: 'c++',
    d: 'javascript',
    correct: 'd'
  },
  {
    question: 'who ammongs the list is one of the world best programers?',
    a: 'Bill Gates',
    b: 'Jeff Besus',
    c: 'Mark zug',
    d: 'none of the above',
    correct: 'c'
  },
  {
    question:'what is your main aim of learning programing?',
    a: 'For hacking reasons',
    b: 'self estim',
    c: 'To get a job',
    d: 'To build and brand your softwares ',
    correct: 'd'
  }
];


const question = document.getElementById("questions");
const answerEl = document.querySelectorAll("answerEl");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn =  document.getElementById("Submit");
var demo = document.getElementById("demo");

let currentquiz = 0;
let score = 0;
loadquiz();

function loadquiz(){
  getSelected()
  deselectAnswer();

  const currentquizData = quizData[currentquiz];

  question.innerText = currentquizData.question;
  a_text.innerText = currentquizData.a;
  b_text.innerText = currentquizData.b;
  c_text.innerText = currentquizData.c;
  d_text.innerText = currentquizData.d;
currentquiz++;

  if(currentquiz === 4){
    submitBtn.addEventListener("click", function(){
      document.getElementById("demo").innerText = "your score is "+ score + " of " + currentquiz;
    });


  
}
}


//this function gets the sellected answer to proceed or store in amemory
function getSelected(){
  let answer = undefined;
 
   answerEl.forEach((answer) =>{
      if(answerEl.checked){
        answer =  answerEl.id;
        
      }if(answer === quizData.correct){
          score++;
         }else{
           score = 0;
         }
   });
   return answer;
}
//this fucntion desellect the answer to and loads the next questions
function deselectAnswer(){
  var answerEl = document.getElementsByName("answerEl");
  answerEl.forEach((answerEl) =>{
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () =>{

    loadquiz();
    deselectAnswer();
    getSelected();

});



   

