'use strict';


window.onload = () => {
    
    setResizeEvent();
}

function setResizeEvent(){
    displayText();
    window.addEventListener('resize', displayText)
}

const displayText = () => {
    
    setTimeout(function(){
        document.querySelector('#ddd').innerHTML = widthCheck().map(createHtmlString).join('');
    }, 66)
}

const widthCheck = () => {
    return [
        {
            name   : 'window.screen',
            width  : screen.width,
            height : screen.height
        },
        {
            name   : 'window.outer',
            width  : outerWidth,
            height : outerHeight
        },
        {
            name   : 'window.inner',
            width  :  innerWidth,
            height :  innerHeight
        },
        {
            name   : 'documentElement.clientWidth',
            width  : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    ]
}

function createHtmlString(item){
    return `${item.name} : ${item.width}, ${item.height} <br>`
}