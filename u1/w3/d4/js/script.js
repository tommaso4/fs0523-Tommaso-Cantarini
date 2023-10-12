let tabellone = document.querySelector('#tabellone')
let btnGeneratore = document.querySelector('.btn-generatore');
let estratti = [];


for (let i = 1; i <= 76; i++) {
    let cella = document.createElement('div');
    cella.classList.add('cella');
    cella.classList.add(i);
    cella.innerText = i;
    tabellone.append(cella);
}


btnGeneratore.addEventListener('click',function () {
    
    let randomNum = Math.floor(Math.random() * 76) + 1;
    estratti.push(randomNum);  
    for (const el of cella.className) {
        if (el == randomNum) {
            cella.classList.add('newEstratto')
        }
    }
})

let cella = document.querySelectorAll('.cella');












