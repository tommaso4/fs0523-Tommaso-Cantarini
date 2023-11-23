export type Data = {
    capo: string,
    codprod: number,
    collezione: string,
    colore: string,
    disponibile: string,
    id: number,
    modello: number,
    prezzoivaesclusa: number,
    prezzoivainclusa: number,
    quantita: number,
    saldo: number
}

class Abbigliamento {
    capo: Data;
    constructor(data: Data) {
        this.capo = data;
    }

    getSaldo(): number {
        return this.capo.saldo;
    }

    getAcquistoCapo(): number {
        return this.capo.prezzoivainclusa;
    }
}

export class ImplAbbigliamento extends Abbigliamento {
    capo: Data;
    constructor(data: Data) {
        super(data);
        this.capo = data;
    }

    createHtml(data: Data): void {
        const template = document.getElementById('temp') as HTMLTemplateElement;
        const cardClone = document.importNode(template.content, true);

        const capoItem = cardClone.querySelector('#capoItem') as HTMLSpanElement;
        const collezioneItem = cardClone.querySelector('#collezioneItem') as HTMLSpanElement;
        const colorItem = cardClone.querySelector('#colorItem') as HTMLSpanElement;
        const disponibilitaItem = cardClone.querySelector('#DisponibilitàItem') as HTMLSpanElement;
        const idItem = cardClone.querySelector('#idItem') as HTMLSpanElement;
        const prezzoItem = cardClone.querySelector('#prezzoItem') as HTMLSpanElement;
        const saldoItem = cardClone.querySelector('#saldoItem') as HTMLSpanElement;

        capoItem.textContent = data.capo;
        collezioneItem.textContent = data.collezione;
        colorItem.textContent = data.colore;
        disponibilitaItem.textContent = data.disponibile;
        idItem.textContent = data.id.toString();
        prezzoItem.textContent = data.prezzoivainclusa.toString();
        saldoItem.textContent = data.saldo.toString();

        const targhet = document.getElementById('targhet') as HTMLDivElement;
        targhet.appendChild(cardClone);
    }

    async getdata(): Promise<Data[]> {
        const response:Response = await fetch('Abbigliamento.json');
        const data:Data[] = await response.json();
        return data
    }
}