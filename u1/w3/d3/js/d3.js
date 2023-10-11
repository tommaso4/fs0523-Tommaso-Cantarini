
const myInput = document.querySelector('#text-input');
const myBtn = document.querySelector('#btn-list');
const myOl = document.querySelector('#my-list');
const myBtnDeleter = document.querySelector('#btn-delete');
const deleteList = document.querySelector('#delete-list');

myBtn.addEventListener('click',function() {
    let myNewLi = document.createElement('li');
    myNewLi.innerHTML = myInput.value;

    myNewLi.addEventListener('click', function () {
        myNewLi.classList.add('checked');
    })

    myNewLi.addEventListener('dblclick', function() {
        deleteList.append(myNewLi);
    })
    
    myBtnDeleter.addEventListener('click', function () {
        let listDelete = document.querySelector('.checked');
        listDelete.remove();
    })

    myOl.append(myNewLi);
    myInput.value = '';
})


console.log('Hello');
