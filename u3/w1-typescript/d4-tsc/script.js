var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ImplAbbigliamento } from './Modules/modulo.js';
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const newAbbigliamento = new ImplAbbigliamento({});
        const data = yield newAbbigliamento.getdata();
        data.forEach((el) => {
            const newAbito = new ImplAbbigliamento(el);
            console.log(newAbito.getSaldo());
            console.log(newAbito.getAcquistoCapo());
            console.log(newAbito);
            newAbito.createHtml(el);
        });
    });
}
start();
//# sourceMappingURL=script.js.map