console.log("JS käynnistyi");
const animals = [
  { img: "../Kuvat/karhu.png", answer: "karhu" },
  { img: "../Kuvat/ilves.jpg", answer: "ilves" },
  { img: "../Kuvat/ahma.jpg", answer: "ahma" },
  { img: "../Kuvat/susi.jpg", answer: "susi" },
  { img: "../Kuvat/orava.jpg", answer: "orava" },
  { img: "../Kuvat/kettu2.jpg", answer: "kettu" }
];

animals.sort(() => Math.random() - 0.5);

let currentIndex = 0;
let currentScore = 0;

const image = document.getElementById("animalImage");
const input = document.getElementById("answerInput");
const playTime = document.getElementById("time");
const questionCounter = document.getElementById("questionCounter");
const scoreDisplay = document.getElementById("score");

let lastScore = localStorage.getItem("score");
let lastTime = localStorage.getItem("elainPeliAika")

if (lastScore === null){
  scoreDisplay.innerText = "Edelliset pisteet: 0 pistettä ajassa 0 sekuntia";
} else {
  scoreDisplay.innerText = 'Edelliset pisteet: ${lastScore} pistettä ajassa ${lastTime} sekuntia';
}


function showNewImage() {
  image.src = animals[currentIndex].img;
  questionCounter.textContent = `${currentScore}/6`;
}
showNewImage();


let seconds = 0;


setInterval(() => {
  seconds++;
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  document.getElementById("time").textContent = `${min}:${sec}`;
}, 1000);

document.getElementById("checkBtn").addEventListener("click", checkAnswer);
document.getElementById("resetBtn").addEventListener("click", reset);

function reset(){
  localStorage.setItem("elainPeliPisteet", 0);
  localStorage.setItem("elainPeliAika", 0);
  scoreDisplay.innerText = "Edelliset pisteet: 0 pistettä ajassa 0 sekuntia";
  currentIndex = 0;
  currentScore = 0;
  animals.sort(() => Math.random() - 0.5);
  showNewImage();
  input.value = "";
  seconds = 0;
}

function checkAnswer() {
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = animals[currentIndex].answer;

  if (userAnswer === correctAnswer) {
    currentScore++;
    currentIndex++;
    

    if (currentIndex < animals.length) {
      showNewImage();
      input.value = "";
    } else {
      localStorage.setItem("elainPeliPisteet", currentScore);
      localStorage.setItem("elainPeliAika", seconds);
      scoreDisplay.innerText = `Edelliset pisteet: ${currentScore} pistettä ajassa ${seconds} sekuntia`;
      currentIndex = 0;
      currentScore = 0;
      animals.sort(() => Math.random() - 0.5);
      showNewImage();
      input.value = "";
      seconds = 0;

    }
  } else {
    alert("Väärin, Yritä uudestaan!");
    input.value = "";
  }
}