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
    if (this.innerHTML[15] === 'X' || this.innerHTML[15] === 'O') {
        return;
    }
    if (num % 2 === 0) {
        this.innerHTML = '<img class="d0 X" src="./imgs/cross.png" alt="x">';
        num++;
    }
    else {
        this.innerHTML = '<img class="d0 O" src="./imgs/o.png" alt="o">';
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
        { value: boxes[0].innerHTML[15] + boxes[1].innerHTML[15] + boxes[2].innerHTML[15], tiles: [0, 1, 2] },
        { value: boxes[3].innerHTML[15] + boxes[4].innerHTML[15] + boxes[5].innerHTML[15], tiles: [3, 4, 5] },
        { value: boxes[6].innerHTML[15] + boxes[7].innerHTML[15] + boxes[8].innerHTML[15], tiles: [6, 7, 8] },
        { value: boxes[0].innerHTML[15] + boxes[3].innerHTML[15] + boxes[6].innerHTML[15], tiles: [0, 3, 6] },
        { value: boxes[1].innerHTML[15] + boxes[4].innerHTML[15] + boxes[7].innerHTML[15], tiles: [1, 4, 7] },
        { value: boxes[2].innerHTML[15] + boxes[5].innerHTML[15] + boxes[8].innerHTML[15], tiles: [2, 5, 8] },
        { value: boxes[0].innerHTML[15] + boxes[4].innerHTML[15] + boxes[8].innerHTML[15], tiles: [0, 4, 8] },
        { value: boxes[2].innerHTML[15] + boxes[4].innerHTML[15] + boxes[6].innerHTML[15], tiles: [2, 4, 6] }
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