let kortti1state = 0;
let kortti2state = 0;
let kortti3state = 0;
let kortti4state = 0;
let kortti5state = 0;
let kortti6state = 0;
let kortti7state = 0;
let kortti8state = 0;
let kortti9state = 0;
let kortti10state = 0;
let kortti11state = 0;
let kortti12state = 0;
let kortti13state = 0;
let kortti14state = 0;
let kortti15state = 0;
let kortti16state = 0;

//kortti state 1 tarkoittaa että käännetty, ja kun on 2 käännettyä ne kääntyy takaisin

let turnedCards = 0;

let waitTimer = false;

let Card1 = null;
let Card2 = null;

let kortti1 = document.querySelector("#kortti1");
kortti1.addEventListener('click', turncard1);

function turncard1() {
    if (waitTimer) return;
    if (kortti1state == 1) return;

    kortti1.src = "../Kuvat/Kasvit/2.png";
    kortti1state = 1;
    turnedCards++;
    checkturned();
}

let kortti2 = document.querySelector("#kortti2");
kortti2.addEventListener('click', turncard2);

function turncard2() {
    if (waitTimer) return;
    if (kortti2state == 1) return;

    kortti2.src = "../Kuvat/Kasvit/6.png";
    kortti2state = 1;
    turnedCards++;
    checkturned();
}

let kortti3 = document.querySelector("#kortti3");
kortti3.addEventListener('click', turncard3);

function turncard3() {
    if (waitTimer) return;
    if (kortti3state == 1) return;

    kortti3.src = "../Kuvat/Kasvit/7.png";
    kortti3state = 1;
    turnedCards++;
    checkturned();
}

let kortti4 = document.querySelector("#kortti4");
kortti4.addEventListener('click', turncard4);

function turncard4() {
    if (waitTimer) return;
    if (kortti4state == 1) return;

    kortti4.src = "../Kuvat/Kasvit/4.png";
    kortti4state = 1;
    turnedCards++;
    checkturned();
}

let kortti5 = document.querySelector("#kortti5");
kortti5.addEventListener('click', turncard5);

function turncard5() {
    if (waitTimer) return;
    if (kortti5state == 1) return;

    kortti5.src = "../Kuvat/Kasvit/5.png";
    kortti5state = 1;
    turnedCards++;
    checkturned();
}

let kortti6 = document.querySelector("#kortti6");
kortti6.addEventListener('click', turncard6);

function turncard6() {
    if (waitTimer) return;
    if (kortti6state == 1) return;

    kortti6.src = "../Kuvat/Kasvit/8.png";
    kortti6state = 1;
    turnedCards++;
    checkturned();
}

let kortti7 = document.querySelector("#kortti7");
kortti7.addEventListener('click', turncard7);

function turncard7() {
    if (waitTimer) return;
    if (kortti7state == 1) return;

    kortti7.src = "../Kuvat/Kasvit/1.png";
    kortti7state = 1;
    turnedCards++;
    checkturned();
}

let kortti8 = document.querySelector("#kortti8");
kortti8.addEventListener('click', turncard8);

function turncard8() {
    if (waitTimer) return;
    if (kortti8state == 1) return;

    kortti8.src = "../Kuvat/Kasvit/6.png";
    kortti8state = 1;
    turnedCards++;
    checkturned();
}

let kortti9 = document.querySelector("#kortti9");
kortti9.addEventListener('click', turncard9);

function turncard9() {
    if (waitTimer) return;
    if (kortti9state == 1) return;

    kortti9.src = "../Kuvat/Kasvit/3.png";
    kortti9state = 1;
    turnedCards++;
    checkturned();
}

let kortti10 = document.querySelector("#kortti10");
kortti10.addEventListener('click', turncard10);

function turncard10() {
    if (waitTimer) return;
    if (kortti10state == 1) return;

    kortti10.src = "../Kuvat/Kasvit/5.png";
    kortti10state = 1;
    turnedCards++;
    checkturned();
}

let kortti11 = document.querySelector("#kortti11");
kortti11.addEventListener('click', turncard11);

function turncard11() {
    if (waitTimer) return;
    if (kortti11state == 1) return;

    kortti11.src = "../Kuvat/Kasvit/7.png";
    kortti11state = 1;
    turnedCards++;
    checkturned();
}

let kortti12 = document.querySelector("#kortti12");
kortti12.addEventListener('click', turncard12);

function turncard12() {
    if (waitTimer) return;
    if (kortti12state == 1) return;

    kortti12.src = "../Kuvat/Kasvit/3.png";
    kortti12state = 1;
    turnedCards++;
    checkturned();
}

let kortti13 = document.querySelector("#kortti13");
kortti13.addEventListener('click', turncard13);

function turncard13() {
    if (waitTimer) return;
    if (kortti13state == 1) return;

    kortti13.src = "../Kuvat/Kasvit/2.png";
    kortti13state = 1;
    turnedCards++;
    checkturned();
}

let kortti14 = document.querySelector("#kortti14");
kortti14.addEventListener('click', turncard14);

function turncard14() {
    if (waitTimer) return;
    if (kortti14state == 1) return;

    kortti14.src = "../Kuvat/Kasvit/1.png";
    kortti14state = 1;
    turnedCards++;
    checkturned();
}

let kortti15 = document.querySelector("#kortti15");
kortti15.addEventListener('click', turncard15);

function turncard15() {
    if (waitTimer) return;
    if (kortti15state == 1) return;

    kortti15.src = "../Kuvat/Kasvit/8.png";
    kortti15state = 1;
    turnedCards++;
    checkturned();
}

let kortti16 = document.querySelector("#kortti16");
kortti16.addEventListener('click', turncard16);

function turncard16() {
    if (waitTimer) return;
    if (kortti16state == 1) return;

    kortti16.src = "../Kuvat/Kasvit/4.png";
    kortti16state = 1;
    turnedCards++;
    checkturned();
}

function returnCards() {

    if (kortti1state === 1) { kortti1.src = "../Kuvat/kortti.png"; kortti1state = 0; }
    if (kortti2state === 1) { kortti2.src = "../Kuvat/kortti.png"; kortti2state = 0; }
    if (kortti3state === 1) { kortti3.src = "../Kuvat/kortti.png"; kortti3state = 0; }
    if (kortti4state === 1) { kortti4.src = "../Kuvat/kortti.png"; kortti4state = 0; }
    if (kortti5state === 1) { kortti5.src = "../Kuvat/kortti.png"; kortti5state = 0; }
    if (kortti6state === 1) { kortti6.src = "../Kuvat/kortti.png"; kortti6state = 0; }
    if (kortti7state === 1) { kortti7.src = "../Kuvat/kortti.png"; kortti7state = 0; }
    if (kortti8state === 1) { kortti8.src = "../Kuvat/kortti.png"; kortti8state = 0; }
    if (kortti9state === 1) { kortti9.src = "../Kuvat/kortti.png"; kortti9state = 0; }
    if (kortti10state === 1) { kortti10.src = "../Kuvat/kortti.png"; kortti10state = 0; }
    if (kortti11state === 1) { kortti11.src = "../Kuvat/kortti.png"; kortti11state = 0; }
    if (kortti12state === 1) { kortti12.src = "../Kuvat/kortti.png"; kortti12state = 0; }
    if (kortti13state === 1) { kortti13.src = "../Kuvat/kortti.png"; kortti13state = 0; }
    if (kortti14state === 1) { kortti14.src = "../Kuvat/kortti.png"; kortti14state = 0; }
    if (kortti15state === 1) { kortti15.src = "../Kuvat/kortti.png"; kortti15state = 0; }
    if (kortti16state === 1) { kortti16.src = "../Kuvat/kortti.png"; kortti16state = 0; }

    turnedCards = 0;
    waitTimer = false;
}

function checkturned() {
    if (turnedCards == 2) {
        waitTimer = true;
        setTimeout(returnCards, 1500);
    }
}