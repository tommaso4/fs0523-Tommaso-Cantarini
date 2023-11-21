const btnPLayer1:HTMLElement| null = document.querySelector('#btnPLayer1');
const inputPl1:HTMLInputElement | null = document.querySelector('#lowerNum1');
const inputPl2:HTMLInputElement | null = document.querySelector('#lowerNum2');

btnPLayer1?.addEventListener('click', (e:Event) => {
    e.preventDefault();
    const strPl1:string|undefined = inputPl1?.value;
    const numPl1:number = parseInt(strPl1 as string);
    const strPl2:string|undefined = inputPl2?.value;
    const numPl2:number = parseInt(strPl2 as string);

    const randomNum:number = Math.floor(Math.random() * 100) + 1;

    const diff1:number = numPl1 - randomNum;
    const diff2:number = numPl2 - randomNum;

    if (numPl1 == randomNum && numPl2 == randomNum) {
        alert('Both player had gess the right number')
        } else if (numPl1 == randomNum) {
            alert('Player1 had gess the right number')
        } else if (numPl2 == randomNum) {
            alert('Player2 had gess the right number')
        }else if (diff1 > diff2){
            alert('Player2 is nearest to Player1')
        } else if (diff1 < diff2){
            alert('Player1 is nearest to Player2')
        }else{
            alert('Both player are nearby at the same way')
        }
        emptyValue(inputPl1, inputPl2)
        
    })


    function emptyValue(inputPl1:HTMLInputElement | null ,inputPl2:HTMLInputElement | null) {
        if (inputPl1) {
            inputPl1.value = '';   
        }
        if (inputPl2) {
        inputPl2.value = '';
        }
    }