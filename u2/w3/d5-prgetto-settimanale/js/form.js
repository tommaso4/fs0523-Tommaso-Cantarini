
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
    
    mySuit.name = document.querySelector('.new-name').value
    mySuit.imageUrl = document.querySelector('.img-url').value;
    mySuit.price = document.querySelector('.new-price').value;
    mySuit.brand = document.querySelector('.new-brand').value;
    mySuit.description = document.querySelector('.new-description').value;
    
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkZWY2ZjI1NGU4ODAwMTgzZjE4OTIiLCJpYXQiOjE2OTk2MDYzODMsImV4cCI6MTcwMDgxNTk4M30.CljDO05F7dJgoBljckBy5qrbKtGRxVYaM-pODs48lV0"
        },
        body: JSON.stringify(mySuit)
    }).then(res => res.json())
    .then(suits => {
        location.href = '/index.html'
    })

})

const btnReset = document.querySelector('#btnReset')
btnReset.addEventListener('click',function (e){
    e.preventDefault()

    let name = document.querySelector('.new-name').value = ''
    let imageUrl = document.querySelector('.img-url').value =''
    let price = document.querySelector('.new-price').value = ''
    let brand = document.querySelector('.new-brand').value= ''
    let description = document.querySelector('.new-description').value= '';
})
