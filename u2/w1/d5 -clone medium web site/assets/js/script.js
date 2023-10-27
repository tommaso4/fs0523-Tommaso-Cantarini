
let initialScroll= window.scrollY;

window.addEventListener('scroll',()=>{
    let startScroll= window.scrollY;
    const nav = document.querySelector('nav')
    const specialA = document.querySelector('.special-a')
    if (startScroll> 350 && startScroll < 390) {
        
        if (initialScroll < startScroll) {
            nav.classList.remove('add-color-nav')
            nav.classList.add('change-color-nav')
            specialA.classList.remove('add-color-btn')
            specialA.classList.add('change-color-btn')
        }else{
            nav.classList.add('add-color-nav')
            nav.classList.remove('change-color-nav')
            specialA.classList.add('add-color-btn')
            specialA.classList.remove('change-color-btn')
        } 
    }
    initialScroll = startScroll;
})


let aside = document.querySelector('.right-page')
console.dir(aside);