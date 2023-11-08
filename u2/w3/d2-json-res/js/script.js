const userArr = []

const btnGetForm = document.querySelector('#btnGetForm')
btnGetForm.addEventListener('click', () => {
    let userName = document.querySelector('#userName').value
    let userObj = {name : userName}
    userArr.push(userObj)
    document.querySelector('#userName').value=''
    localStorage.setItem('userArr', JSON.stringify(userArr))
})

    const btnRemoveForm = document.querySelector('#btnRemoveForm')
    btnRemoveForm.addEventListener('click', () => {
        userArr.pop();
        localStorage.setItem('userArr', JSON.stringify(userArr));
    })




let storedUserArrJson = localStorage.getItem('userArr')
let myUserArr = []
if (storedUserArrJson) {
    myUserArr = JSON.parse(storedUserArrJson)
}

console.log(myUserArr);

// --------------------------------------------- es 2 -----------------------------


function initializeCounter() {
    const initialValue = 0;
    sessionStorage.setItem('counterValue', initialValue.toString());
}

function startCounter() {
    if (!sessionStorage.getItem('counterValue')) {
        initializeCounter();
    }

    let counter = sessionStorage.getItem('counterValue');
    
    const counterElement = document.querySelector('#counter');
    
    function updateCounter() {
        counter++;
        counterElement.textContent = counter;
        
        sessionStorage.setItem('counterValue', counter.toString());
    }
    
    setInterval(updateCounter, 1000);
}
 
// startCounter();


// -------------------------- prova es 2  oop-----------------------------------

class stampCounter {
    constructor(){}

    initializeCounter() {
        if (!sessionStorage.getItem('counterValue')) {
          const initialValue = 0;
          sessionStorage.setItem('counterValue', initialValue.toString());
        }
      }

    startCounter(){
        this.initializeCounter()


        const counterElement = document.querySelector('#counter')

        setInterval(()=>this.updateCounter(counterElement),1000)
    }

    updateCounter(counterElement){
        const counter = parseInt(sessionStorage.getItem('counterValue'), 10) + 1
        counterElement.textContent = counter
        sessionStorage.setItem('counterValue', counter.toString())
    }
}

const myStartCounter = new stampCounter()
myStartCounter.startCounter()

