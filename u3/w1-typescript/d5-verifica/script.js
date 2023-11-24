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
const mobile1 = new SmartPhone(20, 0.2);
console.log(mobile1);
mobile1.chiamata(43);
mobile1.ricarica(10);
console.log(mobile1.numero404());
console.log(mobile1.getNumeroChiamate());
mobile1.azzeraChiamate();
console.log(mobile1.getNumeroChiamate());
const mobile2 = new SmartPhone(30, 0.3);
console.log(mobile2);
mobile2.chiamata(100);
mobile2.ricarica(1);
console.log(mobile2.numero404());
console.log(mobile2.getNumeroChiamate());
mobile2.azzeraChiamate();
console.log(mobile2.getNumeroChiamate());
class ExtendSmartPhone extends SmartPhone {
    constructor(carica, costoMinuto) {
        super(carica, costoMinuto);
        this.carica = carica;
        this.costoMinuto = costoMinuto;
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
    creaUnaChimata(id, durata, oraData) {
        const unaChimata = {
            id: id,
            durata: durata,
            oraData: oraData
        };
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
const data1 = 'Fri Nov 24 2023 15:02:04 GMT+0100';
const data1Date = new Date(data1);
console.log(extendSmartPhone.filtraChamatePerData(data1Date));
export {};
//# sourceMappingURL=script.js.map