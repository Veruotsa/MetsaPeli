
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.drop-zone');
const checkBtn = document.getElementById('check-btn');
const scoreDisplay = document.getElementById('score');
let tries = 0;

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
        container.appendChild(draggable);
    });
});

checkBtn.addEventListener('click', () => {
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
    
    if (correctCount === 5) {
        alert("Hienoa! Kaikki oikein!");
    }
});