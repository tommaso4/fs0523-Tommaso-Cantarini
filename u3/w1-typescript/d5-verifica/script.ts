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

const mobile2: IMobile = new SmartPhone(30, 0.3)
mobile2.chiamata(100);
mobile2.ricarica(1);
mobile2.azzeraChiamate();

class ExtendSmartPhone extends SmartPhone {
    private intervalId: number | null = null;
    private count: number = 0;
    public registroChiamate: registroChimate[] = [];
    constructor(public carica: number,
        public costoMinuto: number) {
        super(carica, costoMinuto);
    }
    public chiamata(min: number): void {
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
        let arrayFiltrato: registroChimate[] = this.registroChiamate.filter((call) => call.oraData.getTime() == data.getTime());
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
    }

    startCounter(): void {
        this.intervalId = setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);
    }

    stopCounter(): void {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
    }

    initInterval(): number {
        this.startCounter();
        return this.count;
    }

}

let extendSmartPhone = new ExtendSmartPhone(40, 0.3);
const data1 = 'Fri Nov 24 2023 15:02:04 GMT+0100'
const data1Date = new Date(data1);

extendSmartPhone.keyPressed();
extendSmartPhone.callPhone();
extendSmartPhone.chiamata(33);
console.log(extendSmartPhone.filtraChamatePerData(data1Date))
console.log(extendSmartPhone);



