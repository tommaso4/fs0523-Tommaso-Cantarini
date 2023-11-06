
class User{
    constructor(name, surname, location, age){
        this.name= name
        this.surname= surname
        this.location= location
        this.age= age
    }
    compareAge(anotherUser){
        if (this.age > anotherUser.age) {
            console.log(`${this.name} è più grande di ${anotherUser.name}`)
        } else if (this.age < anotherUser.age){
            console.log(`${anotherUser.name} è più grande di ${this.name}`)
        } else{
            console.log(`${this.name} ha la stessa età di ${anotherUser.name}`)
        }
    }
}

let user1 = new User('Mario','Rossi', 'Milano',30)
let user2 = new User('Luigi','Verdi', 'Padova', 30)
user2.compareAge(user1)

// --------------------------------- exercise 2------------------------------------------

class Pet {
    constructor(){
        this.petName= null
        this.ownerName= null
        this.species= null
        this.breed= null
        this.btnForm()
    }

    btnForm(){
        this.btnForm = document.querySelector('#btnForm')
        this.btnForm.addEventListener("click", () => {
            this.getValueHtml()
            this.removeValue()
        })
    }
    getValueHtml(){
        this.petName= document.querySelector('#petName').value
        this.ownerName= document.querySelector('#ownerName').value
        this.species= document.querySelector('#species').value
        this.breed= document.querySelector('#breed').value
    }
    removeValue(){
        this.petName= document.querySelector('#petName').value = ''
        this.ownerName= document.querySelector('#ownerName').value = ''
        this.species= document.querySelector('#species').value = ''
        this.breed= document.querySelector('#breed').value = ''
    }
}

let ciuffo= new Pet
console.log(ciuffo)
console.log(kaly);
