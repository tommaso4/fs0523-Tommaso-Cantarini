

const mySuit = {
    'name': 'suit',
    'description': 'Good Choise',
    'brand': 'Rip Curl',
    'imageUrl': 'https://www.thenauticstore.com/5585-large_default/…3mm-chest-zip-mute-da-surf-modello-2022-black.jpg',
    'price': 100
}

fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWY2ZjI1NGU4ODAwMTgzZjE4OTIiLCJpYXQiOjE2OTk2MDYzODMsImV4cCI6MTcwMDgxNTk4M30.CljDO05F7dJgoBljckBy5qrbKtGRxVYaM-pODs48lV0"
    },
    body: JSON.stringify(mySuit)
})
    .then(res => res.json())
    .then(suits => {
        console.log(suits);
    })

fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWY2ZjI1NGU4ODAwMTgzZjE4OTIiLCJpYXQiOjE2OTk2MDYzODMsImV4cCI6MTcwMDgxNTk4M30.CljDO05F7dJgoBljckBy5qrbKtGRxVYaM-pODs48lV0"
    },
})
    .then(res => res.json())
    .then(suits => {
        console.log(suits);
        suits.forEach(suit => {
            let myDivArea = document.createElement('div');
            myDivArea.classList.add('col-3')
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
            price.innerText = suit.price;

            let areaHomePage = document.querySelector('#area-home-page');
            areaHomePage.append(myDivArea);

        });
    });


    fun



// fetch("https://striveschool-api.herokuapp.com/api/product/", {
//     headers: {
//         'Content-Type': 'application/json',
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWY2ZjI1NGU4ODAwMTgzZjE4OTIiLCJpYXQiOjE2OTk2MDYzODMsImV4cCI6MTcwMDgxNTk4M30.CljDO05F7dJgoBljckBy5qrbKtGRxVYaM-pODs48lV0"
//     },
// }).then(res => res.json())
//     .then(suits => {

//         suits.forEach(suit => {

//             let myDivArea = document.createElement('div')
//             let newCard = showContent()
//             myDivArea.append(newCard)

//             let areaHomePage = document.querySelector('#area-home-page')

//             let name = myDivArea.document.querySelector('.name-card')
//             let description = myDivArea.document.querySelector('.description')
//             let brand = myDivArea.document.querySelector('.brand')
//             let imageUrl = myDivArea.document.querySelector('.imageUrl')
//             let price = myDivArea.document.querySelector('.price')

//             name.innerText = suit.name;
//             description.innerText = suit.description;
//             brand.innerText = suit.brand;
//             imageUrl.src = suit.imageUrl;
//             price.innerText = suit.price;

//             areaHomePage.append(myDivArea)

//         });

//     })


function showContent() {
    let temp = document.getElementsByTagName("template")[0];
    return temp.content.cloneNode(true);
}


