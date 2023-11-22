"use strict";
const arrUsers = [];
class User {
    constructor(id, name, surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}
const btnSave = document.querySelector('#btnSave');
btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    UserInps.addInfoNewUser();
    console.log(arrUsers);
});
class UserInps extends User {
    constructor(id, name, surname, codredd, redditoannuolordo) {
        super(id, name, surname);
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = 26.3;
        this.tasseirpef = 23;
    }
    static addInfoNewUser() {
        const userName = document.querySelector('#userName');
        const userSurname = document.querySelector('#userSurname');
        const userId = document.querySelector('#userId');
        const userCodredd = document.querySelector('#userCodredd');
        const userRedditoannuolordo = document.querySelector('#userRedditoannuolordo');
        const codere = Number(userCodredd.value);
        const redditoannuolordo = Number(userRedditoannuolordo.value);
        const name = userName.value;
        const surname = userSurname.value;
        const id = Number(userId.value);
        const user = new UserInps(id, name, surname, codere, redditoannuolordo);
        arrUsers.push(user);
        userName.value = '';
        userSurname.value = '';
        userId.value = '';
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
let userInps1 = new UserInps(1, 'Mario', 'Rossi', 40, 24000);
console.log(userInps1.getTasseInps());
//# sourceMappingURL=script.js.map