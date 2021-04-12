'use strict';

const qA = (sel)=> document.querySelectorAll(sel);

window.onload = () => {
    loadItems()
    .then(items => {
        displayItems(items);
        setEventListener(items);
    })
    .catch(console.log);
}

function loadItems(){
    return fetch('js/data.json')
        .then(res => res.json())
        .then(json => json.items);
}

function setEventListener(items){
    const btns = document.querySelector('.sorting-list');

    btns.addEventListener('click', e => onbtnClick(e, items));
}

function onbtnClick(e, items){
    const dataset = e.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    displayItems(items.filter(item => item[key] === value));
}

function displayItems(items){
    const container = document.querySelector('.item-list');

    container.innerHTML = items.map(createHtmlString).join('');
}

function createHtmlString(item){
    return `
        <li><a href="#" class="item">${item.category}, ${item.type}</a></li>
    `
}