'use strict';

const subPage = document.querySelectorAll('.sub');

let pageCount = 0;
document.querySelector('.fixed').addEventListener('click', e=> {
    
    if (e.target.className !== 'lnb' && 'rnb') return;

    subPage[pageCount].classList.add('pageOut');
    
    switch (e.target.className) {
        case 'lnb' : 
            pageCount >= subPage.length?0:pageCount++;
            break;
        case 'rnb' : 
            pageCount <= 0?subPage.length:pageCount--;
            break;
    }
    
    subPage[pageCount].classList.add('pageIn');
});
