"use strict";
class UserInps2 {
    constructor(redditoannuolordo) {
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = 26.3;
        this.tasseirpef = 23;
    }
    getTasseInps() {
        let utileMenoInps = this.redditoannuolordo * (this.tasseinps / 100);
        return utileMenoInps;
    }
    getTasseIrpef() {
        let utileMenoIrpef = this.redditoannuolordo * (this.tasseirpef / 100);
        return utileMenoIrpef;
    }
    getUtileTasse() {
        let utileTasse = this.getTasseInps() + this.getTasseIrpef();
        return utileTasse;
    }
    getRedditoAnnuoNetto() {
        let redditoAnnuoNetto = this.redditoannuolordo - this.getUtileTasse();
        return redditoAnnuoNetto;
    }
}
class makeCount {
    constructor() {
    }
}
let count = 50000;
let count1 = new UserInps2(count);
console.log(count1.getRedditoAnnuoNetto());
//# sourceMappingURL=user.js.map