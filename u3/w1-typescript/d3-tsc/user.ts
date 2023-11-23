class UserInps2 {
    private tasseinps: number = 26.3
    private tasseirpef: number = 23

    constructor(private redditoannuolordo: number) {

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

class makeCount {

    constructor(){
        
    }
}



let count = 50000
let count1 = new UserInps2(count)

console.log(count1.getRedditoAnnuoNetto());