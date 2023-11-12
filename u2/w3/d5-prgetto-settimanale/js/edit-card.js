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

    const btnChange = document.querySelector('#btnChange')
btnChange.addEventListener('click',function (e){
    e.preventDefault()    
    
    let name = document.querySelector('.new-name').value
    if (name !== '') {
        name = document.querySelector('.new-name').value
    } else {
        name = suit.name;
    }


    let price = document.querySelector('.new-price').value;
    if (price !== '') {
        price = document.querySelector('.new-price').value;
    } else {
        price = suit.price;
    }
    let imageUrl = document.querySelector('.img-url').value;
    if (imageUrl !== '') {
        imageUrl = document.querySelector('.img-url').value;
    } else {
        imageUrl = suit.imageUrl;
    }
    let brand = document.querySelector('.new-brand').value;
    if (brand !== '') {
        brand = document.querySelector('.new-brand').value;
    } else {
        brand = suit.brand;
    }
    let description = document.querySelector('.new-description').value;
    if (description !== '') {
        description = document.querySelector('.new-description').value;
    } else {
        description = suit.description;
    }

    let changedSwuit = {
        name,
        price,
        imageUrl,
        brand,
        description
    }
    
    fetch("https://striveschool-api.herokuapp.com/api/product/" + suitId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWY2ZjI1NGU4ODAwMTgzZjE4OTIiLCJpYXQiOjE2OTk2MDYzODMsImV4cCI6MTcwMDgxNTk4M30.CljDO05F7dJgoBljckBy5qrbKtGRxVYaM-pODs48lV0"
        },
        body: JSON.stringify(changedSwuit)
    }).then(res => res.json())
    .then( suits => {
        console.log(suits);
        location.href = '/index.html'
    })
})

}

function showContent() {
    let temp = document.querySelector('#myTemp')
    return temp.content.cloneNode(true);
}

