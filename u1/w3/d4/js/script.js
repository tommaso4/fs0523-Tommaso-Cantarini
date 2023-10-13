let tabellone = document.querySelector('#tabellone')
let btnGeneratore = document.querySelector('.btn-generatore');
let estratti = [];


for (let i = 1; i <= 76; i++) {
    let cella = document.createElement('div');
    cella.classList.add('cella');
    cella.innerText = i;
    tabellone.append(cella);
    cella.id = `cel${i}`;
}



btnGeneratore.addEventListener('click', function () {

    let randomNum = Math.floor(Math.random() * 76) + 1;
    let cella = document.querySelector('#cel' + randomNum);
    estratti.push(randomNum);
    if (cella) {
        cella.classList.add('newEstratto')
    }
})

for (const el of estratti) {
    
}

console.log(estratti);













