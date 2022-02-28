'use strict';
const ulContainer = document.querySelector('.grocery-list');
const input = document.querySelector('.input');
const searchBtn = document.querySelector('.fa-plus-square');
const clearTaskBtn = document.querySelector('.clearTask');

function loadEvents() {
    clearTaskBtn.addEventListener('click', clearTask);
    searchBtn.addEventListener('click', createList);
    ulContainer.addEventListener('click', deleteTask);
    ulContainer.addEventListener('click', checkTask);
    input.addEventListener('keyup', (e) => {
        let inputValue = input.value.trim();
        if(inputValue === '') {
            alert('Please enter and item');
        } else if(e.key === "Enter") {
            createItem()
            input.value = '';
        }
    });
}
function createList() {
    let inputValue = input.value.trim();
    if(inputValue === '') {
        alert('Please enter an item')
    } else {
        createItem();
        input.value = '';
    }
}
function createItem() {
    let inputValue = input.value.trim();
    let newDiv = document.createElement('div');
        newDiv.className = 'items'
        let newLi = document.createElement('li');
        newLi.className = 'item';
        let iconDiv = document.createElement('div');
        iconDiv.className = 'icons'
        let checkITag = document.createElement('i');
        checkITag.className = 'fas fa-check';
        let trashITag = document.createElement('i');
        trashITag.className = 'fas fa-trash'
        newLi.append(inputValue);
        newDiv.append(newLi)
        iconDiv.append(checkITag);
        iconDiv.append(trashITag);
        ulContainer.append(newDiv)
        newDiv.append(iconDiv);
}
function clearTask() {
        while(ulContainer.firstChild) {
            ulContainer.removeChild(ulContainer.firstChild);
        }
}
function deleteTask(e) {
        const item = e.target;
        if(item.classList[1] === 'fa-trash') {
            if(confirm('Are You Sure')) {
                const todo = item.parentElement.parentElement;
                todo.remove();
            }
        }
}
function checkTask(e) {
    const item = e.target;
    if(item.classList[1] === 'fa-check') {
        let check = item.parentElement.parentElement.firstChild;
        check.classList.toggle('colorChange');
    }
}
loadEvents();