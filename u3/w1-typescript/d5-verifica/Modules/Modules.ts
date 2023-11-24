export interface IMobile {
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;

    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void; 
    azzeraChiamate():void; 
}

export type registroChimate = {
    id: number;
    durata: number;
    oraData: Date;
}
