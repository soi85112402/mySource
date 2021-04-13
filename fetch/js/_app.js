'use strict';

const qA = (sel)=> document.querySelectorAll(sel);

class ItemList {
    constructor (_category, _color, _items) {
        this.window = window;
        this.category = [..._category];
        this.color = [..._color];
        this.items = [..._items];
        this.items_reset = [..._items];
    }

    qA = (sel)=> document.querySelectorAll(sel);

    getCategory = ()=> this.category;
    
    getColor = ()=> this.color;

    getItems = ()=> this.items;

    setItems = arr => this.items = [...arr];

    setCategory = arr => this.category = [...arr];
    
    reset = () => {
        this.setItems(this.items_reset)
        this.outputItems(this.items);
    };

    displayItems = arr => arr.map(item=>`<li><a href="#" class="item">${item.category}, ${item.type}</a></li>`);
    displaySort = arr => arr.map(item=>`<li><a href="#" onclick="exeSort('${item}')" class="sorting">${item}</a></li>`);

    sort = (array, condition) => {
        const arr = typeof array == Object ? array : this.items;
        return arr.filter(item => item.category == condition || item.type == condition);
    }

    outputSort = arr => {
        this.qA('.sorting-list')[0].innerHTML = 
        this.displaySort(arr).join('');
    }
    
    outputItems = arr => {
        this.qA('.item-list')[0].innerHTML = 
        this.displayItems(arr).join('');
    }

}

window.onload = () => {
    loadItems()
    .then(res => console.log(res))
    .catch(console.log);
    init(window);
}

function loadItems(){
    fetch

}

function init(window) {
    const itemList = new ItemList(sampleCategory, sampleColor, sampleData);

    window.itemList = {...itemList};

    qA('.item-list')[0].innerHTML = 
        itemList.displayItems(itemList.getItems()).join('');
    qA('.sorting-list')[0].innerHTML = 
        itemList.displaySort(itemList.getCategory()).join('') +
        itemList.displaySort(itemList.getColor()).join('');
}

const exeSort = condition => {
    return itemList.setItems(itemList.sort(this.itemList.getItems(), condition))
}
