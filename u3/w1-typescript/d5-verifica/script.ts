import { IMobile, registroChimate } from "./Modules/Modules.js";

class SmartPhone implements IMobile {
    public numeroChiamate: number = 0;

    constructor(public carica: number,
        public costoMinuto: number) { }

    ricarica(euro: number): void {
        this.carica += euro;
    }
    numero404(): string {
        let creditoResiduo: string = "Il credito residuo è: " + this.carica + " euro";
        return creditoResiduo;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    chiamata(min: number): void {
        let amuntCall: number = min * this.costoMinuto;
        this.carica -= amuntCall;
        this.carica = parseFloat(this.carica.toFixed(2));
        this.numeroChiamate++;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

const mobile1: IMobile = new SmartPhone(20, 0.2);
console.log(mobile1);
mobile1.chiamata(43);
mobile1.ricarica(10);
console.log(mobile1.numero404());
console.log(mobile1.getNumeroChiamate());
mobile1.azzeraChiamate();
console.log(mobile1.getNumeroChiamate());

const mobile2: IMobile = new SmartPhone(30, 0.3)
console.log(mobile2);
mobile2.chiamata(100);
mobile2.ricarica(1);
console.log(mobile2.numero404());
console.log(mobile2.getNumeroChiamate());
mobile2.azzeraChiamate();
console.log(mobile2.getNumeroChiamate());

class ExtendSmartPhone extends SmartPhone {
    public registroChiamate: registroChimate[] = [];
    constructor(public carica: number,
        public costoMinuto: number) {
        super(carica, costoMinuto);
    }
    chiamata(min: number): void {
        super.chiamata(min)
        this.registroChiamate.push({
            id: this.numeroChiamate,
            durata: min,
            oraData: new Date()
        })
    }
    mostraRegistoChiamate(): registroChimate[] {
        return this.registroChiamate;
    }
    filtraChamatePerData(data: Date): registroChimate[] {
        let arrayFiltrato:registroChimate[] = this.registroChiamate.filter((call) => call.oraData.getTime() == data.getTime());
        return arrayFiltrato;
    }

    keyPressed(): void {
        let allKeys: NodeListOf<Element> = document.querySelectorAll('.key-number p')
        console.log(allKeys);
        let inputSmartphone: HTMLInputElement = document.querySelector('#numberPressed input')!;

        for (const key of allKeys) {
            if (key) {
                key.addEventListener('click', () => {
                    if (inputSmartphone) {
                        inputSmartphone.value += key.innerHTML;
                    }
                })
            }
        }
    }

    callPhone(): void {
        const btnCall: HTMLDivElement = document.querySelector('#chiama')!;
        if (btnCall) {
            btnCall.addEventListener('click', () => {
                let inputSmartphone: HTMLInputElement = document.querySelector('#numberPressed input')!;
                let inputSmartphoneDiv: HTMLDivElement = document.querySelector('#numberPressed')!;
                let inputNumber: string = inputSmartphone.value;
                btnCall.style.backgroundColor = 'red';

                const btnCallP: HTMLParagraphElement = document.querySelector('#chiama p')!;
                btnCallP.innerHTML = 'Chiudi';

                inputSmartphone.classList.toggle('none')
                this.inputCall(inputSmartphone, inputNumber, inputSmartphoneDiv)
            })
        }
    }

    inputCall(input: HTMLInputElement, inputNum: string, inputDiv: HTMLDivElement): void {
        if (input.classList.contains('none')) {
            const chiamata: HTMLParagraphElement = document.createElement('p');
            chiamata.classList.add('chimata');
            chiamata.innerHTML = inputNum;
            inputDiv.appendChild(chiamata);
            const myspnan = document.createElement('span');
            setInterval(() => {
                this.count++;
                myspnan.innerHTML = String(this.count);
                chiamata.appendChild(myspnan);
            }, 1000)
            const durata = this.initInterval()
            this.chiamata(durata);} else {
            const chiamata = inputDiv.querySelector('.chimata')!;
            chiamata.remove();
            input.value = '';
            this.stopCounter()
        }
        this.registroChiamate.push(unaChimata);
    }
}

let extendSmartPhone = new ExtendSmartPhone(40, 0.3);
console.log(extendSmartPhone);
extendSmartPhone.ricarica(10);
extendSmartPhone.chiamata(100);
extendSmartPhone.chiamata(100);
extendSmartPhone.chiamata(100);
extendSmartPhone.creaUnaChimata(3, 10, new Date('Fri Nov 24 2023 15:02:04 GMT+0100'));
console.log(extendSmartPhone.numero404());
console.log(extendSmartPhone.mostraRegistoChiamate());



const data1 = 'Fri Nov 24 2023 15:02:04 GMT+0100'
const data1Date = new Date(data1);
console.log(extendSmartPhone.filtraChamatePerData(data1Date))

