const animals = [
  { image: "../kuvat/karhu.png", answer: "karhu" },
  { image: "../kuvat/ilves.jpg", answer: "ilves" },
  { image: "../kuvat/ahma.jpg", answer: "ahma" },
  { image: "../kuvat/susi.jpg", answer: "susi" },
  { image: "../kuvat/orava.jpg", answer: "orava" },
  { image: "../kuvat/kettu2.jpg", answer: "kettu" }
];

animals.sort(() => Math.random() - 0.5);

let currentIndex = 0;
let score = 0;

const animalImage = document.getElementById("animalimage");
const answerInput = document.getElementById("answerInput");
const playTime = document.getElementById("time");
const questionCounter = document.getElementById("questionCounter");
//const answerAlert = document.getElementById("answerAlert");

animalImage.src = animals[currentIndex].image;




let seconds = 0;
setInterval(() => {
  seconds++;
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const seconds = String(seconds % 60).padStart(2, '0');
  document.getElementById("time").textContent = `${minutes}:${seconds}`;
}, 1000);


function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = animals[currentIndex].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    score++;
    currentIndex++;

    questionCounter.textContent = `${score}/6`;
    //answerAlert.textContent = "Correct!";
    //answerAlert.style.color = "green";

    if (currentIndex < animals.length) {
      animalImage.src = animals[currentIndex].image;
      answerInput.value = "";
    } else {
      //feedbackEl.textContent = "Finished! 🎉";
    }
  } else {
    //feedbackEl.textContent = "Wrong, try again!";
    //feedbackEl.style.color = "red";
  }
}