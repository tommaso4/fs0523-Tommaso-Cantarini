"use strict";
class SonAccount {
    constructor(name, surname, age) {
        this.belanceInit = 0;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    deposit(deposit) {
        return this.belanceInit = this.belanceInit + deposit;
    }
    withdraw(withdraw) {
        return this.belanceInit = this.belanceInit - withdraw;
    }
    static crateUser() {
        const name = document.getElementById('name');
        const surname = document.getElementById('surname');
        const age = document.getElementById('age');
        const nameValue = name.value;
        const surnameValue = surname.value;
        const ageValue = age.value;
        const son = new SonAccount(nameValue, surnameValue, Number(ageValue));
        arrAccount.push(son);
        name.value = '';
        surname.value = '';
        age.value = '';
    }
    createAccountHtml() {
        const h3Name = document.querySelector('#nameUser');
        const h3Surname = document.querySelector('#surnameUser');
        h3Name.innerHTML = this.name;
        h3Surname.innerHTML = this.surname;
    }
    createDepositHtml() {
        const amount = document.querySelector('#amount');
        const belanceUser = document.querySelector('#belance');
        this.deposit(Number(amount.value));
        belanceUser.innerHTML = ` ${this.belanceInit.toString()}`;
        amount.value = '';
    }
    crateWithdrawHtml() {
        const withdrawal = document.querySelector('#withdrawal');
        const belanceUser = document.querySelector('#belance');
        this.withdraw(Number(withdrawal.value));
        belanceUser.innerHTML = ` ${this.belanceInit.toString()}`;
        withdrawal.value = '';
    }
}
let arrAccount = [];
const btnLogIn = document.getElementById('btnLogIn');
btnLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    SonAccount.crateUser();
    console.log(arrAccount);
});
const btnDeposit = document.getElementById('btnDeposit');
btnDeposit.addEventListener('click', (e) => {
    e.preventDefault();
    son1.createDepositHtml();
});
const btnWithdraw = document.getElementById('btnWithdrawal');
btnWithdraw.addEventListener('click', (e) => {
    e.preventDefault();
    son1.crateWithdrawHtml();
});
let son1 = new SonAccount('Giuseppe', 'Rossi', 18);
son1.createAccountHtml();
son1.withdraw(100);
console.log(son1.belanceInit);
son1.deposit(50);
console.log(son1.belanceInit);
class MotherAccount extends SonAccount {
    constructor(name, surname, age) {
        super(name, surname, age);
        this.fedelityYears = 15;
    }
    addInterest(tasso) {
        const interest = (this.belanceInit / 100) * tasso;
        return this.belanceInit = this.belanceInit - interest;
    }
}
let mother1 = new MotherAccount('Maria', 'Verdi', 43);
mother1.deposit(1300);
mother1.addInterest(7);
console.log(mother1.belanceInit);
//# sourceMappingURL=script.js.map