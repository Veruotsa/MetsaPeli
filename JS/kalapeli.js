const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.drop-zone');
const checkBtn = document.getElementById('check-btn');
const retryBtn = document.getElementById('retry');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

const originalParents = new Map();
draggables.forEach(draggable => {
    originalParents.set(draggable, draggable.parentElement);
});

const interval = setInterval(() => {
    if (timerActive) {
        seconds++;
        timerDisplay.innerText = seconds;
    }
}, 1000);

let tries = 0;
let seconds = 0;
let timerActive = true;

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
    });

    container.addEventListener('drop', e => {
        const draggable = document.querySelector('.dragging');
        if (container.children.length === 0) {
            container.appendChild(draggable);
        }
    });
});

checkBtn.addEventListener('click', () => {
    timerActive = false;

    let correctCount = 0;
    tries++;

    containers.forEach(container => {
        const child = container.firstElementChild;
        if (child) {
            if (child.id === container.getAttribute('data-correct')) {
                container.className = 'drop-zone correct';
                correctCount++;
            } else {
                container.className = 'drop-zone wrong';
            }
        }
    });

    scoreDisplay.innerText = correctCount + " / 5 (Yritykset: " + tries + ")";

    localStorage.setItem('kalaPeliPisteet', correctCount);
    localStorage.setItem('kalaPeliYritykset', tries);
});

retryBtn.addEventListener('click', () => {

    seconds = 0;
    timerDisplay.innerText = seconds;
    timerActive = true;

    draggables.forEach(draggable => {
        const originalParent = originalParents.get(draggable);
        originalParent.appendChild(draggable);
    });


    containers.forEach(container => {
        container.className = 'drop-zone';
    });

    scoreDisplay.innerText = "0 / 5 (Yritykset: " + tries + ")";
});