var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Abbigliamento {
    constructor(data) {
        this.capo = data;
    }
    getSaldo() {
        return this.capo.saldo;
    }
    getAcquistoCapo() {
        return this.capo.prezzoivainclusa;
    }
}
export class ImplAbbigliamento extends Abbigliamento {
    constructor(data) {
        super(data);
        this.capo = data;
    }
    createHtml(data) {
        const template = document.getElementById('temp');
        const cardClone = document.importNode(template.content, true);
        const capoItem = cardClone.querySelector('#capoItem');
        const collezioneItem = cardClone.querySelector('#collezioneItem');
        const colorItem = cardClone.querySelector('#colorItem');
        const disponibilitaItem = cardClone.querySelector('#DisponibilitàItem');
        const idItem = cardClone.querySelector('#idItem');
        const prezzoItem = cardClone.querySelector('#prezzoItem');
        const saldoItem = cardClone.querySelector('#saldoItem');
        capoItem.textContent = data.capo;
        collezioneItem.textContent = data.collezione;
        colorItem.textContent = data.colore;
        disponibilitaItem.textContent = data.disponibile;
        idItem.textContent = data.id.toString();
        prezzoItem.textContent = data.prezzoivainclusa.toString();
        saldoItem.textContent = data.saldo.toString();
        const targhet = document.getElementById('targhet');
        targhet.appendChild(cardClone);
    }
    getdata() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('Abbigliamento.json');
            const data = yield response.json();
            return data;
        });
    }
}
//# sourceMappingURL=modulo.js.map