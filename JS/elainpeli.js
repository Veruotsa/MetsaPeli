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
let score = 0;

const image = document.getElementById("animalImage");
const input = document.getElementById("answerInput");
const playTime = document.getElementById("time");
const questionCounter = document.getElementById("questionCounter");

function showNewImage() {
  image.src = animals[currentIndex].img;
  questionCounter.textContent = `${currentIndex + 1}/6`;
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
function checkAnswer() 
{
  const userAnswer = input.value.trim().toLowerCase();
  const correctAnswer = animals[currentIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
    currentIndex++;
    alert("Oikein!");

    if (currentIndex < animals.length) {
      showNewImage();
      input.value = "";
    } else {
      alert(`Valmista tuli! Sait ${score}/${animals.length} ajassa ${seconds} sekuntia!`);

      currentIndex = 0;
      score = 0;
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