const cards = document.querySelectorAll(".card");

const cardNumber = this.id;

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});

let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

let Card1 = null;
let Card2 = null;
let lukitus = false;

// numeroiden sekoitus
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

function flipCard() {
    console.log("click" + this.id);
    this.src = "../Kuvat/Kasvit/" + numbers[this.id] + ".png";
};

