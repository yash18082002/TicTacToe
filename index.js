let num = 0;
let win = 0;
const isGameOver = function () {
    if (num === 9) {
        return 1;
    }
    else if (win >= 1) {
        return 1;
    }
    else {
        return 0;
    }
}
const move = function () {
    if (isGameOver() === 1) {
        alert('Game is over, reload the page to play a new game.');
        return;
    }
    if (this.innerText === 'X' || this.innerText === 'O') {
        return;
    }
    if (num % 2 === 0) {
        this.innerText = 'X';
        num++;
    }
    else {
        this.innerText = 'O';
        num++;
    }
    checkWin();
}
const boxes = document.querySelectorAll('.box');
boxes.forEach(function (e) {
    e.addEventListener('click', move);
})

const checkWin = function () {
    let winConditions = [
        { value: boxes[0].innerText + boxes[1].innerText + boxes[2].innerText, tiles: [0, 1, 2] },
        { value: boxes[3].innerText + boxes[4].innerText + boxes[5].innerText, tiles: [3, 4, 5] },
        { value: boxes[6].innerText + boxes[7].innerText + boxes[8].innerText, tiles: [6, 7, 8] },
        { value: boxes[0].innerText + boxes[3].innerText + boxes[6].innerText, tiles: [0, 3, 6] },
        { value: boxes[1].innerText + boxes[4].innerText + boxes[7].innerText, tiles: [1, 4, 7] },
        { value: boxes[2].innerText + boxes[5].innerText + boxes[8].innerText, tiles: [2, 5, 8] },
        { value: boxes[0].innerText + boxes[4].innerText + boxes[8].innerText, tiles: [0, 4, 8] },
        { value: boxes[2].innerText + boxes[4].innerText + boxes[6].innerText, tiles: [2, 4, 6] }
    ];
    winConditions.forEach(function (e) {
        if (e.value === 'XXX') {
            win++;
            e.tiles.forEach(function (i) {
                boxes[i].classList.toggle('cyan');
            })
        }
        if (e.value === 'OOO') {
            win++;
            e.tiles.forEach(function (i) {
                boxes[i].classList.toggle('yellow');
            })
        }
    });
    return win;
}