/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
let a ;
for (const k in pets) {
  a = pets[k];
  console.log(a);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

function arrSorted(arr) {
  let sortedArr = arr.sort();
  return sortedArr
}

console.log(arrSorted(pets));

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let newArr = pets.slice(0)
let arrReversed = newArr.reverse()
console.log(arrReversed)
console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let firstItem = pets.shift()
pets.push(firstItem)
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function genRandonString(length) {
   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var charLength = chars.length;
   var result = '';
   for ( var i = 0; i < length; i++ ) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
   }
   return result;
}

function genRandonNumber(length) {
  var chars = '0123456789';
  var charLength = chars.length;
  var result = '';
  for ( var i = 0; i < length; i++ ) {
     result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

function getLicense(a,b) {
  let number = genRandonNumber(a);
    let str = genRandonString(b);
    let newLincense = str + number;
    return newLincense;
}


cars.forEach(element => {
  let newLincense = getLicense(7,2);
  element.newLincensePlate = newLincense;
});

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newItemCars = cars[0];
cars.unshift(newItemCars);

cars.forEach(element => {
  element.trims.pop()
});

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
cars.forEach(element => {
  let myTrims = element.trims.splice(0,1).toString()
  justTrims.push(myTrims)
});
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

cars.forEach(element => {
  if (element.color[0] == 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
});

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let myIndex = numericArray.indexOf(32);
let i = 0;

while (i < myIndex) {
    console.log(numericArray[i]);
  i++
  }
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let newArrPosNumber = [];

for (i = 0; i < charactersArray.length; i++) { 
  switch(charactersArray[i]) { 
          case 'g':  
            let idx = 'g'.charCodeAt(0) - 96;
            newArrPosNumber.push(idx);  
            break       
          case 'n':  
            let idx2 = 'n'.charCodeAt(0) - 96;
            newArrPosNumber.push(idx2); 
            break        
          case 'u':  
            let idx3 = 'u'.charCodeAt(0) - 96;
            newArrPosNumber.push(idx3);     
            break    
          case 'z':  
            let idx4 = 'z'.charCodeAt(0) - 96;
            newArrPosNumber.push(idx4);   
            break      
          case 'd':  
            let idx5 = 'd'.charCodeAt(0) - 96;
            newArrPosNumber.push(idx5);
            break         
          default:
          break;
      }
  }

console.log(newArrPosNumber);