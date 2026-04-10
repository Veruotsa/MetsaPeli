const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

let parit = 0;

let Card1 = null;
let Card2 = null;
let lukitus = false;

// numeroiden sekoitus
let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

function shuffle(numbers) {
    let i = numbers.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = temp;
    }
    console.log(numbers);
}
shuffle(numbers);


// iso höskä joka tarkistaa onko kortit samat ja palauttaa ne jos ei
function flipCard() {
    if (lukitus) return;

    if (this === Card1) return;

    console.log("click " + this.id);

    this.src = "../Kuvat/Kasvit/" + numbers[this.id - 1] + ".png";

    if (!Card1) {
        Card1 = this;
        return;
    }

    Card2 = this;
    lukitus = true;

    if (numbers[Card1.id - 1] === numbers[Card2.id - 1]) {
        Card1.removeEventListener("click", flipCard);
        Card2.removeEventListener("click", flipCard);
        lukitus = false;
        Card1 = null;
        Card2 = null;
        parit++;
        document.getElementById("paritTeksti").textContent = "Parit: " + parit;
        // peli loppuu
        if (parit === 8) {
            stopTimer();
            pistelasku();
        }
    } else {
        setTimeout(() => {
            Card1.src = "../Kuvat/kortti.png";
            Card2.src = "../Kuvat/kortti.png";
            lukitus = false;
            Card1 = null;
            Card2 = null;
        }, 1000);
    }
};

// ajastin
let running = false;
let startTime = 0;
let timer = 0;

function startTimer() {
    running = true;
    startTime = performance.now();
    requestAnimationFrame(loop);
}

function loop(t) {
    if (!running) return;
    timer = (t - startTime) / 1000;
    const elapsed = timer.toFixed(0);
    document.getElementById("timer").textContent = elapsed + " s";
    requestAnimationFrame(loop);
}

function stopTimer() {
    running = false;
}

startTimer();

// piste funktio
function pistelasku() {
    let pisteet = 10;

    if (timer <= 25) {
        pisteet = 10;
    } else {
        pisteet = Math.max(1, 10 - (timer - 25) * 0.2);
    }

    document.getElementById("paritTeksti").textContent =
    "Pisteet: " + Math.round(pisteet);
}