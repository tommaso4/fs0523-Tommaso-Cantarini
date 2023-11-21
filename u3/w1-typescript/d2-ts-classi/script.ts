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

    public deposit(deposit: number): number {
        return this.belanceInit = this.belanceInit + deposit
    }
    public withdraw(withdraw: number): number {
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
    public createAccountHtml():void{
        const h3Name = document.querySelector('#nameUser') as HTMLHeadingElement;
        const h3Surname = document.querySelector('#surnameUser') as HTMLHeadingElement;
        h3Name.innerHTML = this.name;
        h3Surname.innerHTML = this.surname;
    }
    public createDepositHtml(): void {
        const amount = document.querySelector('#amount') as HTMLInputElement;
        const belanceUser = document.querySelector('#belance') as HTMLSpanElement;
        this.deposit(Number(amount.value));
        belanceUser.innerHTML = ` ${this.belanceInit.toString()}`;
        amount.value = '';
    }
    public crateWithdrawHtml():void{
        const withdrawal = document.querySelector('#withdrawal') as HTMLInputElement;
        const belanceUser = document.querySelector('#belance') as HTMLSpanElement;
        this.withdraw(Number(withdrawal.value));
        belanceUser.innerHTML = ` ${this.belanceInit.toString()}`;
        withdrawal.value = '';
    }
}

let arrAccount: Array<SonAccount> = []
const btnLogIn = document.getElementById('btnLogIn') as HTMLButtonElement;
btnLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    SonAccount.crateUser();
    console.log(arrAccount);
});

const btnDeposit = document.getElementById('btnDeposit') as HTMLButtonElement;

btnDeposit.addEventListener('click', (e) => {
    e.preventDefault();
    son1.createDepositHtml()
});

const btnWithdraw = document.getElementById('btnWithdrawal') as HTMLButtonElement;

btnWithdraw.addEventListener('click', (e) => {
    e.preventDefault();
    son1.crateWithdrawHtml()
});

let son1: SonAccount = new SonAccount('Giuseppe', 'Rossi', 18)
son1.createAccountHtml();
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



