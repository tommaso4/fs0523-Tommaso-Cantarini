class SonAccount {

    private name: string
    private surname: string
    private age: number
    public belanceInit: number = 0

    constructor(name: string, surname: string, age: number) {
        this.name = name
        this.surname = surname
        this.age = age
    }

    deposit(deposit: number): number {
        return this.belanceInit = this.belanceInit + deposit
    }
    withdraw(withdraw: number): number {
        return this.belanceInit = this.belanceInit - withdraw
    }
    static crateUser(): void {
 
            const name = document.getElementById('name') as HTMLInputElement;
            const surname = document.getElementById('surname') as HTMLInputElement;
            const age = document.getElementById('age') as HTMLInputElement;

            const nameValue = name.value;
            const surnameValue = surname.value;
            const ageValue = age.value;

            const son = new SonAccount(nameValue, surnameValue, Number(ageValue));

            arrAccount.push(son);

            name.value = '';
            surname.value = '';
            age.value = '';
    }
}



let arrAccount: Array<SonAccount> = []
const btnLogIn = document.getElementById('btnLogIn') as HTMLButtonElement;

btnLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    SonAccount.crateUser();
    console.log(arrAccount);
});

let son1: SonAccount = new SonAccount('Giuseppe', 'Rossi', 18)
son1.withdraw(100);
console.log(son1.belanceInit);
son1.deposit(50)
console.log(son1.belanceInit);

class MotherAccount extends SonAccount {

    fedelityYears: number = 15;

    constructor(name: string, surname: string, age: number) {
        super(name, surname, age)
    }

    addInterest(tasso: number): number {
        const interest = (this.belanceInit / 100) * tasso
        return this.belanceInit = this.belanceInit - interest
    }
}


let mother1: MotherAccount = new MotherAccount('Maria', 'Verdi', 43)
mother1.deposit(1300);
mother1.addInterest(7)

console.log(mother1.belanceInit);



