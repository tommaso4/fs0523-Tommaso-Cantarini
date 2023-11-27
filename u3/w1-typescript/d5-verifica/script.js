class SmartPhone {
    constructor(carica, costoMinuto) {
        this.carica = carica;
        this.costoMinuto = costoMinuto;
        this.numeroChiamate = 0;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        let creditoResiduo = "Il credito residuo è: " + this.carica + " euro";
        return creditoResiduo;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        let amuntCall = min * this.costoMinuto;
        this.carica -= amuntCall;
        this.carica = parseFloat(this.carica.toFixed(2));
        this.numeroChiamate++;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const mobile2 = new SmartPhone(30, 0.3);
mobile2.chiamata(100);
mobile2.ricarica(1);
mobile2.azzeraChiamate();
class ExtendSmartPhone extends SmartPhone {
    constructor(carica, costoMinuto) {
        super(carica, costoMinuto);
        this.carica = carica;
        this.costoMinuto = costoMinuto;
        this.intervalId = null;
        this.count = 0;
        this.registroChiamate = [];
    }
    chiamata(min) {
        super.chiamata(min);
        this.registroChiamate.push({
            id: this.numeroChiamate,
            durata: min,
            oraData: new Date()
        });
    }
    mostraRegistoChiamate() {
        return this.registroChiamate;
    }
    filtraChamatePerData(data) {
        let arrayFiltrato = this.registroChiamate.filter((call) => call.oraData.getTime() == data.getTime());
        return arrayFiltrato;
    }
    keyPressed() {
        let allKeys = document.querySelectorAll('.key-number p');
        console.log(allKeys);
        let inputSmartphone = document.querySelector('#numberPressed input');
        for (const key of allKeys) {
            if (key) {
                key.addEventListener('click', () => {
                    if (inputSmartphone) {
                        inputSmartphone.value += key.innerHTML;
                    }
                });
            }
        }
    }
    callPhone() {
        const btnCall = document.querySelector('#chiama');
        if (btnCall) {
            btnCall.addEventListener('click', () => {
                let inputSmartphone = document.querySelector('#numberPressed input');
                let inputSmartphoneDiv = document.querySelector('#numberPressed');
                let inputNumber = inputSmartphone.value;
                btnCall.style.backgroundColor = 'red';
                const btnCallP = document.querySelector('#chiama p');
                btnCallP.innerHTML = 'Chiudi';
                inputSmartphone.classList.toggle('none');
                this.inputCall(inputSmartphone, inputNumber, inputSmartphoneDiv);
            });
        }
    }
    inputCall(input, inputNum, inputDiv) {
        if (input.classList.contains('none')) {
            const chiamata = document.createElement('p');
            chiamata.classList.add('chimata');
            chiamata.innerHTML = inputNum;
            inputDiv.appendChild(chiamata);
            const myspnan = document.createElement('span');
            setInterval(() => {
                this.count++;
                myspnan.innerHTML = String(this.count);
                chiamata.appendChild(myspnan);
            }, 1000);
            const durata = this.initInterval();
            this.chiamata(durata);
        }
        else {
            const chiamata = inputDiv.querySelector('.chimata');
            chiamata.remove();
            input.value = '';
            this.stopCounter();
        }
    }
    startCounter() {
        this.intervalId = setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }
    stopCounter() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
    }
    initInterval() {
        this.startCounter();
        return this.count;
    }
}
let extendSmartPhone = new ExtendSmartPhone(40, 0.3);
const data1 = 'Fri Nov 24 2023 15:02:04 GMT+0100';
const data1Date = new Date(data1);
extendSmartPhone.keyPressed();
extendSmartPhone.callPhone();
extendSmartPhone.chiamata(33);
console.log(extendSmartPhone.filtraChamatePerData(data1Date));
console.log(extendSmartPhone);
export {};
//# sourceMappingURL=script.js.map