function getJsonBooks() {

    fetch('https://striveschool-api.herokuapp.com/books')
        .then(res => res.json())
        .then(books => {
            for (const book of books) {
                createCard(book)
            }
        })

    }
    function createCard(el) {

        const myRow = document.querySelector('.area-books')
        const myCol = document.createElement('div')
        myCol.classList.add('col-3')
        myCol.classList.add('mb-3')
        myRow.append(myCol)

        const myCard = document.createElement('div')
        myCard.classList.add('card')
        myCard.classList.add('my-card')
        myCol.append(myCard)

        const myImg = document.createElement('img')
        myImg.classList.add('card-img-top')
        myImg.classList.add('my-img')
        myCard.append(myImg)
        myImg.src = el.img

        const myCardText = document.createElement('div')
        myCardText.classList.add('card-body')
        myCard.append(myCardText)

        const h5Card = document.createElement('h5')
        h5Card.classList.add('card-title')
        h5Card.innerHTML = el.title
        myCardText.append(h5Card)

        const pCard = document.createElement('span')
        pCard.classList.add('card-text')
        pCard.innerHTML = `<b>Genre:</b> ${el.category}. `
        myCardText.append(pCard)

        const priceBook = document.createElement('span')
        priceBook.innerHTML = `<b>Price:</b> ${el.price}$.`
        myCardText.append(priceBook)

        crateBtnDelate(myCardText, 'REMOVE')
        crateBtnAdd(myCardText, 'ADD')
    }

    function crateBtnDelate(myCardText, text) {
        const btnAdd = document.createElement('button')
        btnAdd.classList.add('btn-card')
        btnAdd.innerHTML = text
        myCardText.append(btnAdd)
        delateEvent(btnAdd)
    }

    function crateBtnAdd(myCardText, text) {
        const btnAdd = document.createElement('button')
        btnAdd.classList.add('btn-card')
        btnAdd.innerHTML = text
        myCardText.append(btnAdd)
        addShop(btnAdd)
    }

    function addShop(btnAdd) {
        btnAdd.addEventListener('click', () => {
            const areaShop = document.querySelector('.area-shop')
            const cardToAdd = btnAdd.closest('.col-3');
            // localStorage.setItem('card',cardToAdd.toString())
            areaShop.append(cardToAdd)
        })
    }

    function delateEvent(btnAdd) {
        btnAdd.addEventListener('click', () => {
            const cardToRemove = btnAdd.closest('.col-3');
            cardToRemove.remove()
        })
    }
getJsonBooks()