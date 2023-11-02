// ------------------------- count the journey -----------------------const

const journey = document.querySelectorAll('.nr-journey')

const spanNumJourney = document.querySelector('#num-journey')
spanNumJourney.innerHTML = journey.length

const createBadge = ()=>{
    const badgeHot = document.querySelectorAll('.badge-hot')
    badgeHot.forEach((el)=>{
        const myBadge = document.createElement('div');
        myBadge.innerHTML= `<span class="badge bg-secondary position-absolute top-0 end-0 m-3">HOT</span>`
        el.classList.add('position-relative')
        el.append(myBadge)
    })
}

createBadge()

const removeFunction = ()=>{
    const myCards = document.querySelectorAll('.card')
    myCards.forEach((card)=>{
        card.remove();
    })
}

// removeFunction()