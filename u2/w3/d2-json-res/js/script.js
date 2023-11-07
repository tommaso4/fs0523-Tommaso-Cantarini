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
 
startCounter();


// -------------------------- prova es 2  oop-----------------------------------

class stampCounter {
    constructor(){
        this.startCounter()
    }
    initializeCounter(){
        const initialValue = 0
        sessionStorage.setItem('counterValue', initialValue.toString())
    }

    startCounter(){
        if (!sessionStorage.getItem('counterValue')) {
            this.initializeCounter();
        }

        const counter = sessionStorage.getItem('counterValue')

        const counterElement = document.querySelector('#counter')

        setInterval(this.updateCounter(counter,counterElement),1000)
    }

    updateCounter(counter, counterElement){
        counter++
        counterElement.textContent = counter
        sessionStorage.setItem('counterValue', counter)
    }
}

// const myStartCounter = new stampCounter
// myStartCounter

