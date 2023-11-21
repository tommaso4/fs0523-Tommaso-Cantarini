"use strict";
const btnPLayer1 = document.querySelector('#btnPLayer1');
const inputPl1 = document.querySelector('#lowerNum1');
const inputPl2 = document.querySelector('#lowerNum2');
btnPLayer1 === null || btnPLayer1 === void 0 ? void 0 : btnPLayer1.addEventListener('click', (e) => {
    e.preventDefault();
    const strPl1 = inputPl1 === null || inputPl1 === void 0 ? void 0 : inputPl1.value;
    const numPl1 = parseInt(strPl1);
    const strPl2 = inputPl2 === null || inputPl2 === void 0 ? void 0 : inputPl2.value;
    const numPl2 = parseInt(strPl2);
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const diff1 = numPl1 - randomNum;
    const diff2 = numPl2 - randomNum;
    if (numPl1 == randomNum && numPl2 == randomNum) {
        alert('Both player had gess the right number');
    }
    else if (numPl1 == randomNum) {
        alert('Player1 had gess the right number');
    }
    else if (numPl2 == randomNum) {
        alert('Player2 had gess the right number');
    }
    else if (diff1 > diff2) {
        alert('Player2 is nearest to Player1');
    }
    else if (diff1 < diff2) {
        alert('Player1 is nearest to Player2');
    }
    else {
        alert('Both player are nearby at the same way');
    }
    emptyValue(inputPl1, inputPl2);
});
function emptyValue(inputPl1, inputPl2) {
    if (inputPl1) {
        inputPl1.value = '';
    }
    if (inputPl2) {
        inputPl2.value = '';
    }
}
