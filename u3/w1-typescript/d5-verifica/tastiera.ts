

// class SmartPhone {
//     constructor() { }

//     keyPressed(): void {
//         let allKeys: NodeListOf<Element> = document.querySelectorAll('.key-number p')
//         console.log(allKeys);
//         let inputSmartphone: HTMLInputElement = document.querySelector('#numberPressed input')!;

//         for (const key of allKeys) {
//             if (key) {
//                 key.addEventListener('click', () => {
//                     if (inputSmartphone) {
//                         inputSmartphone.value += key.innerHTML;
//                     }
//                 })
//             }
//         }
//     }

//     callPhone(): void {
//         const btnCall: HTMLDivElement = document.querySelector('#chiama')!;
//         if (btnCall) {
//             btnCall.addEventListener('click', () => {
//                 let inputSmartphone: HTMLInputElement = document.querySelector('#numberPressed input')!;
//                 let inputSmartphoneDiv: HTMLDivElement= document.querySelector('#numberPressed')!;
//                 let inputNumber: string = inputSmartphone.value;
//                 btnCall.style.backgroundColor = 'red';

//                 const btnCallP: HTMLParagraphElement = document.querySelector('#chiama p')!;
//                 btnCallP.innerHTML= 'Chiudi'

//                 inputSmartphone.classList.toggle('none')                
//                 SmartPhone.inputCall(inputSmartphone, inputNumber, inputSmartphoneDiv)

//             })
//         }
//     }

//     static inputCall(input: HTMLInputElement,inputNum: string,inputDiv:HTMLDivElement): void {
//         if (input.classList.contains('none')) {
//             const chiamata:HTMLParagraphElement = document.createElement('p');
//             chiamata.classList.add('chimata');
//             chiamata.innerHTML = inputNum;
//             inputDiv.appendChild(chiamata);

//         }else{
//             const chiamata = inputDiv.querySelector('.chimata')!;
//             chiamata.remove();
//             input.value = '';
//         }
//     }
// }

// const myPhone = new SmartPhone();
// myPhone.keyPressed();
// myPhone.callPhone();

