
let estratti = [];
let btnGeneratore = document.querySelector('.btn-generatore');

function creaTabellone(n, classTabella) {
    let tabellone = document.querySelector('#tabellone');

    for (let i = 1; i <= n; i++) {
        let cella = document.createElement('div');
        cella.classList.add(classTabella);
        cella.innerText = i;
        tabellone.append(cella);
        cella.id = `cel${i}`;
    }
    return tabellone;   
}

console.dir(usersNumber);

function creaTabellina(classTabellina) {
    let usersNumber = document.querySelector('#usersNumber').value;
    let tabellina = document.querySelector('#tabellina');

    let arrayCheck = [];
    
    for (let j = 0; j < usersNumber ; j++) {
        for (let i = 0; i < 26 ; i++) {
        
            let randomNum = Math.floor(Math.random() * 76) + 1;
            
            if (!arrayCheck.includes(randomNum)) {
                let cella = document.createElement('div');
                cella.classList.add(classTabellina);
                cella.id = `cel${randomNum}`;
                cella.innerHTML = randomNum;
                tabellina.append(cella);
                arrayCheck.push(randomNum);
            }
        }
        
    }
    return tabellina;
}




btnGeneratore.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random() * 76) + 1;
    let cella = document.querySelector('#cel' + randomNum);

    if (!estratti.includes(randomNum)) {
      estratti.push(randomNum); 
    }
    if (cella) {
      cella.classList.add('newEstratto')
    }
})


creaTabellone(76,'cella');
creaTabellina('cella');
console.log(estratti);













