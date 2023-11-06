
class User {
    constructor(name, surname, location, age) {
        this.name = name
        this.surname = surname
        this.location = location
        this.age = age
    }
    compareAge(anotherUser) {
        if (this.age > anotherUser.age) {
            console.log(`${this.name} è più grande di ${anotherUser.name}`)
        } else if (this.age < anotherUser.age) {
            console.log(`${anotherUser.name} è più grande di ${this.name}`)
        } else {
            console.log(`${this.name} ha la stessa età di ${anotherUser.name}`)
        }
    }
}

let user1 = new User('Mario', 'Rossi', 'Milano', 30)
let user2 = new User('Luigi', 'Verdi', 'Padova', 30)
user2.compareAge(user1)

// --------------------------------- exercise 2------------------------------------------

function btnForm() {
    const btnForm = document.querySelector('#btnForm')
    btnForm.addEventListener("click", () => {
        getValueHtml()
        removeValue()
    })
}

function getValueHtml() {
    let petName = document.querySelector('#petName').value
    let ownerName = document.querySelector('#ownerName').value
    let species = document.querySelector('#species').value
    let breed = document.querySelector('#breed').value
    let newPet = new Pet(petName, ownerName, species, breed)
    createPetHtml(newPet)
}

function removeValue() {
    const petName = document.querySelector('#petName').value = ''
    const ownerName = document.querySelector('#ownerName').value = ''
    const species = document.querySelector('#species').value = ''
    const breed = document.querySelector('#breed').value = ''
}

function createPetHtml(petObj) {
    let {petName, ownerName, species, breed} = petObj
    const areaNewPet = document.createElement('div')
    areaNewPet.classList.add('border')
    const area = document.querySelector('#area')
    area.append(areaNewPet)
    let pPet = document.createElement('p')
    pPet.innerText = petName + ' ' + ownerName  + ' ' +  species  + ' ' + breed
    console.log(petObj);
    // for (const i of petObj) {
    //     console.log(i);
    // }
    areaNewPet.append(pPet)
}

btnForm()

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
    controlOwner(pet) {
        if (this.ownerName == pet.ownerName) {
            const myDiv = document.createElement('div')
            myDiv.innerText = `${this.petName} e ${pet.petName} hanno lo stesso padrone`
            const area = document.querySelector('#area')
            area.append(myDiv)
        }
    }
}

// class superPet{
//     constructor() {
//         this.petName =  null
//         this.ownerName =  null
//         this.species =  null
//         this.breed = null
//     }
//     btnForm() {
//         const btnForm = document.querySelector('#btnForm')
//         btnForm.addEventListener("click", () => {
//             getValueHtml()
//             removeValue()
//         })
//     }

// }