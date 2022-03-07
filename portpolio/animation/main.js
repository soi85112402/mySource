'use strict';


const subPage = document.querySelectorAll('.sub');

let pageCount = 0;

/* document.querySelector('.lnb').addEventListener('click',e=>{
    e.preventDefault();
    // console.log(document.querySelector('.page01').classList);

    subPage[pageCount].classList.add('pageOut');
    pageCount++;
    subPage[pageCount].classList.add('pageIn');
});
document.querySelector('.rnb').addEventListener('click',e=>{
    e.preventDefault();
    // console.log(document.querySelector('.page01').classList);
    
    subPage[pageCount].classList.add('pageOut');
    pageCount--;
    subPage[pageCount].classList.add('pageIn');
}); */

document.querySelector('.fixed').addEventListener('click', e=> {
    
    if (e.target.className !== 'lnb' && 'rnb') return;

    subPage[pageCount].classList.add('pageOut');
    // subPage[pageCount].addEventListener('animationend', () => {
    //     console.log('Animation ended');
    // });;
    
    switch (e.target.className) {
        case 'lnb' : 
            pageCount >= subPage.length?0:pageCount++;
            break;
        case 'rnb' : 
            pageCount <= 0?subPage.length:pageCount--;
            break;
    }
    
    subPage[pageCount].classList.remove('pageOut');
    subPage[pageCount].classList.add('pageIn');
});
