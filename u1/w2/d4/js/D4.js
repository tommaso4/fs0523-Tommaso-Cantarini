/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

let side1 = 20;
let side2 = 20;

function areaRectangle(s1, s2) {
    let area = s1 * s2;
    return console.log(area);
}

areaRectangle(side1, side2);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {

    let sum;

    if (n1 != n2) {

        sum = n1 + n2;

    } else {

        sum = (n1 + n2) * 3;

    }
    return sum;
}

let result = crazySum(side1, side2);

console.log(result);


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {

    let difference;
    let myNum = 19;

    if (n1 <= 19) {

        difference = n1 - myNum;
    } else {

        difference = (n1 - myNum) * 3;
    }

    return difference;
}

let resultDifference = crazyDiff(side1);
console.log(resultDifference);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {

    if (n > 20 && n <= 100 || n == 400) {
        return console.log(true);
    }else{
        return console.log(false);
    }
}

boundary(4099);


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {

    let newStr;
    let myStr = 'EPICODE';

    if (str === myStr) {

        newStr = str;
    } else {

        newStr = str + myStr;
    }

    return newStr;
}

let clientStr = 'You are studing in: ';
let resultStr = epify(clientStr) + '!!';

console.log(resultStr);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {

    if (num % 3 == 0 || num % 7 == 0) {
        console.log('The number is a multiple of 3 or 7');
    } else {
        console.log('The number isn\'t a multiple of 3 or 7');
    }
}

check3and7(side1);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {

    let reverseStringStr = '';

    for (let i = str.length - 1; i >= 0; i--) {

        reverseStringStr += str[i];
    }
    return console.log(reverseStringStr);
}

let strTest = 'ciao';

reverseString(strTest);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

let str2 = 'hello world!!';

function upperFirst(str) {
    
    let myArray = str.split(' ');
    
    for (let i = 0; i < myArray.length; i++) {

        let firstLetter = myArray[i].charAt(0).toUpperCase();
        let restLetter = myArray[i].slice(1).toLowerCase();

        myArray[i] = firstLetter + restLetter;
    }

    let newStr = myArray.join(' ');
    return newStr;
}


// function upperFirst2 (str){
//     let newStr2 = str
//     .toLowerCase()
//     .split(' ')
//     .map(words =>{
//     return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
//     })
//     .join(' ');

//     return newStr2;
// }

// console.log(upperFirst2(str2));

console.log(upperFirst(str2));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {

    let newStr = str.slice(1,str.length -1);

    return newStr;
}

console.log(cutString(str2));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    
    let myArray = [];

    for (let index = 0; index < n; index++) {
        
        let myRandomNum = Math.floor(Math.random() * 10);
        myArray.push(myRandomNum);
    }
    return myArray;
}

console.log(giveMeRandom(5));
