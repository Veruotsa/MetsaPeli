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

cardlist = []

let kortti1 = document.querySelector("#kortti1");
kortti1.addEventListener('click', turncard1);

function turncard1() {
    kortti1.src = "../Kuvat/kissankello.png";
    kortti1state = 1;
}

let kortti2 = document.querySelector("#kortti2");
kortti2.addEventListener('click', turncard2);

function turncard2() {
    kortti2.src = "../Kuvat/kissankello.png";
    kortti2state = 1;
}

let kortti3 = document.querySelector("#kortti3");
kortti3.addEventListener('click', turncard3);

function turncard3() {
    kortti3.src = "../Kuvat/kissankello.png";
    kortti3state = 1;
}

let kortti4 = document.querySelector("#kortti4");
kortti4.addEventListener('click', turncard4);

function turncard4() {
    kortti4.src = "../Kuvat/kissankello.png";
    kortti4state = 1;
}

let kortti5 = document.querySelector("#kortti5");
kortti5.addEventListener('click', turncard5);

function turncard5() {
    kortti5.src = "../Kuvat/kissankello.png";
    kortti5state = 1;
}

let kortti6 = document.querySelector("#kortti6");
kortti6.addEventListener('click', turncard6);

function turncard6() {
    kortti6.src = "../Kuvat/kissankello.png";
    kortti6state = 1;
}

let kortti7 = document.querySelector("#kortti7");
kortti7.addEventListener('click', turncard7);

function turncard7() {
    kortti7.src = "../Kuvat/kissankello.png";
    kortti7state = 1;
}

let kortti8 = document.querySelector("#kortti8");
kortti8.addEventListener('click', turncard8);

function turncard8() {
    kortti8.src = "../Kuvat/kissankello.png";
    kortti8state = 1;
}

let kortti9 = document.querySelector("#kortti9");
kortti9.addEventListener('click', turncard9);

function turncard9() {
    kortti9.src = "../Kuvat/kissankello.png";
    kortti9state = 1;
}

let kortti10 = document.querySelector("#kortti10");
kortti10.addEventListener('click', turncard10);

function turncard10() {
    kortti10.src = "../Kuvat/kissankello.png";
    kortti10state = 1;
}

let kortti11 = document.querySelector("#kortti11");
kortti11.addEventListener('click', turncard11);

function turncard11() {
    kortti11.src = "../Kuvat/kissankello.png";
    kortti11state = 1;
}

let kortti12 = document.querySelector("#kortti12");
kortti12.addEventListener('click', turncard12);

function turncard12() {
    kortti12.src = "../Kuvat/kissankello.png";
    kortti12state = 1;
}
let kortti13 = document.querySelector("#kortti13");
kortti13.addEventListener('click', turncard13);

function turncard13() {
    kortti13.src = "../Kuvat/kissankello.png";
    kortti13state = 1;
}

let kortti14 = document.querySelector("#kortti14");
kortti14.addEventListener('click', turncard14);

function turncard14() {
    kortti14.src = "../Kuvat/kissankello.png";
    kortti14state = 1;
    turnedcards++;
}

let kortti15 = document.querySelector("#kortti15");
kortti15.addEventListener('click', turncard15);

function turncard15() {
    kortti15.src = "../Kuvat/kissankello.png";
    kortti15state = 1;
    turnedcards++;
}

let kortti16 = document.querySelector("#kortti16");
kortti16.addEventListener('click', turncard16);

function turncard16() {
    kortti16.src = "../Kuvat/kissankello.png";
    kortti16state = 1;
    list.push(kortti16);
}

function cardTimeout() {
    setTimeout(returnCards, 2000);
    clearTimeout(cardTimeout);
}

function returnCards() {
    if (kortti1state == 1) {
        kortti1.src = "../Kuvat/kortti.png";
        kortti1state = 0;
    }
}

function checkturned() {
    if (length.cardlist.length >= 2) {
        cardTimeout(returnCards());
        clearTimeout(cardTimeout);
    }
}