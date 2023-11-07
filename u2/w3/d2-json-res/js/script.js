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







