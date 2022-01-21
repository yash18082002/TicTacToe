// const screen = document.querySelector('.container');
// screen.addEventListener('click', function () {
//     screen.classList.toggle('clicked');
//     console.log(screen.className);
// })
let num = 0;
const isGameOver = function () {
    if (num === 9) {
        return 1;
    }
    else {
        return 0;
    }
}
const move = function () {
    if (isGameOver() === 1) {
        alert('Game is over, reload the page to play a new game.');
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
}
const boxes = document.querySelectorAll('.box');
boxes.forEach(function (e) {
    e.addEventListener('click', move);
})

// const checkWin = function(){
//     let winConditions = [
//         boxes[0].innerText + boxes[1].innerText + boxes[2].innerText, 
//         boxes[3].innerText + boxes[4].innerText + boxes[5].innerText, 
//         boxes[6].innerText + boxes[7].innerText + boxes[8].innerText, 
//         boxes[0].innerText + boxes[3].innerText + boxes[6].innerText, 
//         boxes[1].innerText + boxes[4].innerText + boxes[7].innerText, 
//         boxes[2].innerText + boxes[5].innerText + boxes[8].innerText, 
//         boxes[0].innerText + boxes[4].innerText + boxes[8].innerText,
//         boxes[2].innerText + boxes[4].innerText + boxes[6].innerText
//     ];
//     winConditions.forEach(function(e){
//         if(e === 'XXX'){
//             return 1;
//         }
//     });
// }