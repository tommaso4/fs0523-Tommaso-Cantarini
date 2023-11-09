// Xitqrfr9yICqIXFmn8HHFzUsAn8es65zU7TqWwjdMvJvtsXrJadhYuRM   api key pexel

createPhotos('wave')
fnDelaterCards()

const btnLoad = document.querySelector('.loadBtn')
btnLoad.addEventListener('click', function () {
    createPhotos('oceans')
})

const btnLoadSeconday = document.querySelector('.loadBtnSecondary')
btnLoadSeconday.addEventListener('click', function () {
    createPhotos('sunsets')
})

const btnGen = document.querySelector('.searchGen')
btnGen.addEventListener('click', function () {
    generatePhotoByInput()
    const inputGen = document.querySelector('.genre').value = ''
})
function generatePhotoByInput() {
    const inputGen = document.querySelector('.genre').value
    createPhotos(inputGen)

}

function createPhotos(genImgs) {
    fetch(`https://api.pexels.com/v1/search?query=${genImgs}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Xitqrfr9yICqIXFmn8HHFzUsAn8es65zU7TqWwjdMvJvtsXrJadhYuRM"
        }
    })
        .then(res => res.json())
        .then(photos => {
            console.log(photos.photos);
            const imgsHtml = document.querySelectorAll('.img-to-load')
            imgsHtml.forEach((el, index) => {
                el.src = photos.photos[index].src.medium;
            });
            const idImg = document.querySelectorAll('.id-img')
            idImg.forEach((el, index)=>{
                el.innerHTML = photos.photos[index].id
            })
        })
}


function fnDelaterCards() {
    const btnHide = document.querySelectorAll('.hide-btn')
    for (const btn of btnHide) {
    btn.addEventListener('click', function () {
            console.log(btn);
            const cardToDelate = btn.closest('.col-md-4')
            cardToDelate.remove()
        })
    }
}

const imgClicked = document.querySelectorAll('.card-img-top')
console.log(imgClicked);