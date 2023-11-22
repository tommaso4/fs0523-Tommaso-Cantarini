const arrUsers: Array<UserInps> = [];

abstract class User {
    constructor(
        private id: number,
        private name: string,
        private surname: string) {}
}

const btnSave = document.querySelector('#btnSave') as HTMLButtonElement;
btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    UserInps.addInfoNewUser();
    console.log(arrUsers);
});


class UserInps extends User {
    private tasseinps: number = 26.3
    private tasseirpef: number = 23

    constructor(
        id: number,
        name: string,
        surname: string,
        private codredd: number,
        private redditoannuolordo: number) {
        super(id, name, surname)
    }

    static addInfoNewUser(): void {
        const userName = document.querySelector('#userName') as HTMLInputElement;
        const userSurname = document.querySelector('#userSurname') as HTMLInputElement;
        const userId = document.querySelector('#userId') as HTMLInputElement;
        const userCodredd = document.querySelector('#userCodredd') as HTMLInputElement;
        const userRedditoannuolordo = document.querySelector('#userRedditoannuolordo') as HTMLInputElement;
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
    
    getTasseInps(): number {
        let utileMenoInps: number = this.redditoannuolordo * (this.tasseinps / 100)
        return utileMenoInps
    }

    getTasseIrpef(): number {
        let utileMenoIrpef: number = this.redditoannuolordo * (this.tasseirpef / 100)
        return utileMenoIrpef
    }

    getUtileTasse(): number {
        let utileTasse: number = this.getTasseInps() + this.getTasseIrpef()
        return utileTasse
    }

    getRedditoAnnuoNetto(): number {
        let redditoAnnuoNetto: number = this.redditoannuolordo - this.getUtileTasse()
        return redditoAnnuoNetto
    }

}

let userInps1 = new UserInps(1, 'Mario', 'Rossi', 40, 24000)

console.log(userInps1.getTasseInps());
