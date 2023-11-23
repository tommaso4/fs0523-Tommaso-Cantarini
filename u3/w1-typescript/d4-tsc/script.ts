import { Data, ImplAbbigliamento } from './Modules/modulo.js'

async function start(){
    const newAbbigliamento = new ImplAbbigliamento({}as Data)
    const data = await newAbbigliamento.getdata();

    data.forEach((el) => {
        const newAbito = new ImplAbbigliamento(el);
        console.log(newAbito.getSaldo());
        console.log(newAbito.getAcquistoCapo());
        console.log(newAbito);
        newAbito.createHtml(el);
        
    })
}

start() 