let url = new URLSearchParams(location.search);
let suitId = url.get('_id');

fetch("https://striveschool-api.herokuapp.com/api/product/" + suitId, {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWY2ZjI1NGU4ODAwMTgzZjE4OTIiLCJpYXQiOjE2OTk2MDYzODMsImV4cCI6MTcwMDgxNTk4M30.CljDO05F7dJgoBljckBy5qrbKtGRxVYaM-pODs48lV0"
    },
})
    .then(res => res.json())
    .then(suit => {
        genCArdClone(suit)

    });

function genCArdClone(suit) {

    let myDivArea = document.createElement('div');
    myDivArea.classList.add('my-card-edit')
    let newCard = showContent();
    myDivArea.append(newCard);

    let name = myDivArea.querySelector('.name-card');
    let description = myDivArea.querySelector('.description');
    let brand = myDivArea.querySelector('.brand');
    let imageUrl = myDivArea.querySelector('.imageUrl');
    let price = myDivArea.querySelector('.price');

    name.innerText = suit.name;
    description.innerText = suit.description;
    brand.innerText = suit.brand;
    imageUrl.src = suit.imageUrl;
    price.innerText = suit.price +'$';

    let areaHomePage = document.querySelector('#area-home-page');
    areaHomePage.append(myDivArea); 
}

function showContent() {
    let temp = document.querySelector('#myTemp')
    return temp.content.cloneNode(true);
}


const mySuit = {
    'name': 'suit',
    'description': 'Good Choise',
    'brand': 'Rip Curl',
    'imageUrl': 'https://www.thenauticstore.com/5585-large_default/3mm-chest-zip-mute-da-surf-modello-2022-black.jpg',
    'price': 100
}

const btnSave = document.querySelector('#btnSave')
btnSave.addEventListener('click',function (e){
    e.preventDefault()    
    console.log('Hello World');
    
    mySuit.name = document.querySelector('.new-name').value
    mySuit.imageUrl = document.querySelector('.img-url').value;
    mySuit.price = document.querySelector('.new-price').value;
    mySuit.brand = document.querySelector('.new-brand').value;
    mySuit.description = document.querySelector('.new-description').value;
    
    fetch("https://striveschool-api.herokuapp.com/api/product/" + suitId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWY2ZjI1NGU4ODAwMTgzZjE4OTIiLCJpYXQiOjE2OTk2MDYzODMsImV4cCI6MTcwMDgxNTk4M30.CljDO05F7dJgoBljckBy5qrbKtGRxVYaM-pODs48lV0"
        },
        body: JSON.stringify(mySuit)
    }).then(res => res.json())
    .then( suits => {
        location.href = '/index.html'
    })
})
