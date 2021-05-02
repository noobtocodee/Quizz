window.onload = function(){
    show(0);
  
}

let questions = [
    {
        id: 1,
        question: "What's the name of Thor's Hammer?",
        answer: "Mjolnir",
        options: [
            "Hammer",
            "Mjolnir",
            "Stormbreaker",
            "Axe"
        ]
    },
    {
        id: 2,
        question:"The Flerkens are extremely dangerous aliens which resembles?",
        answer:"Cats",
        options: [
            "Dogs",
            "Aliens",
            "Reptiles",
            "Cats"
        ]
    },
    {
        id: 3,
        question:"Who is Black Panther’s sister?",
        answer:"Shuri",
        options: [
            "Wanda",
            "Natasha",
            "Shuri",
            "Martha"
        ]
    },
    {
        id: 4,
        question:"How many Infinity Stones are there?",
        answer:"Six",
        options: [
            "Five",
            "Six",
            "Four",
            "Seven"
        ]
    },
    {
        id: 5,
        question:"What type of doctor is Stephen Strange?",
        answer:"Neurosurgeon",
        options: [
            "Neurosurgeon",
            "Cardiothoracic Surgeon",
            "Plastic Surgeon",
            "Trauma Surgeon"
        ]
    },  {
        id: 6,
        question:"What is the name of Iron Man’s A.I. butler before vision",
        answer:"JARVIS",
        options: [
            "HOMER",
            "ALFRED",
            "MARVIN",
            "JARVIS"
        ]
    },  {
        id: 7,
        question:"What is Deadpool’s real name?",
        answer:"Wade Wilson",
        options: [
            "Steve Rogers",
            "Tony Stark",
            "Wade Wilson",
            "Loki"
        ]
    },  {
        id: 8,
        question:"What is the only Marvel film not to have a post-credit scene?",
        answer:"Avengers: Endgame",
        options: [
            "The Winter Soldier",
            "Thor: The Dark World",
            "Avengers: Endgame",
            "Captain Marvel"
        ]
    },  {
        id: 9,
        question:"Which of the infinity stones is hidden on Vormir?",
        answer:"Soul Stone",
        options: [
            "Soul Stone",
            "Time Stone",
            "Mind Stone",
            "Power Stone"
        ]
    },  {
        id: 10,
        question:"What is Loki's title?",
        answer:"God of Mischief",
        options: [
            "God of Peace",
            "God of Mischief",
            "God of Thunder",
            "Ruler of the Aesir Gods"
        ]
    },

]

function submitForm(e){
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;
   
       //storing name in session storage
    sessionStorage.setItem("name", name);
    location.href ="quiz.html"
}

var question_count = 0;

// var numm = 0;
// var wrongnumm = 0;
 var points = 0;
function next(){
   
    let userAnswer = document.querySelector("li.option.active").innerHTML;
    // console.log(userAnswer); 
    if(userAnswer == questions[question_count].answer){
        // numm = numm + 1;
        points = points + 10;
       
        sessionStorage.setItem("points", points);
       
    }else{
        // wrongnumm = wrongnumm + 1;
        points = points;
        sessionStorage.setItem("points", points);
    }
   
    if(question_count == questions.length - 1 ){
       
        sessionStorage.setItem("time", ` ${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
       sessionStorage.setItem("points", points);
    //  location.href = "end.html";
      if(points <= "40"){
       location.href = "Endfail.html";
      }else{
        location.href = "end.html";
      }
        return;
    }
    question_count++;
    show(question_count); 
   
}


function show(count){

    var question = document.getElementById("questions");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML =`<h2>Q${question_count + 1}. ${questions[count].question}</h2>
    <ul class="options_group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
</ul>`; 
  toggleActive();

}

function toggleActive(){
    let option = document.querySelectorAll("li.option");

    for(let i=0; i< option.length; i++){
        option[i].onclick = function(){
            for(let j=0; j< option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

let dt = new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time % (100 * 60))/ 1000);
let minutes = Math.floor((time % (1000 * 60 * 60))/(1000*60));

let timex = 0;

let mytime = setInterval(function() {
    if(seconds < 59){ 
        seconds++;
    } else {
        minutes++;    
        seconds = 0;
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
  document.querySelector(".time").innerHTML = formatted_min + " : " + formatted_sec;
}, 1000)

