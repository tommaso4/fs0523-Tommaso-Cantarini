fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWY2ZjI1NGU4ODAwMTgzZjE4OTIiLCJpYXQiOjE2OTk2MDYzODMsImV4cCI6MTcwMDgxNTk4M30.CljDO05F7dJgoBljckBy5qrbKtGRxVYaM-pODs48lV0"
    },
})
    .then(res => res.json())
    .then(suits => {
        genCArdClone(suits)

    });

function genCArdClone(suits) {
    console.log(suits[1]);
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
        let id = myDivArea.querySelector('.id-obj');

        name.innerText = suit.name;
        description.innerText = suit.description;
        brand.innerText = suit.brand;
        imageUrl.src = suit.imageUrl;
        price.innerText = suit.price;
        id.href= 'edit.html?'+ '_id=' + suit._id

        let areaHomePage = document.querySelector('#area-home-page');
        areaHomePage.append(myDivArea);
    });
}

function showContent() {
    let temp = document.querySelector('#myTemp')
    return temp.content.cloneNode(true);
}


