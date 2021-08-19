'use strict';

const section = document.querySelectorAll('section');
const contents = document.querySelectorAll('content');

const moveSpeed = 100; // 움직임 스피드
const pageWheelGreedMax = 1000;  // 페이지당 휠수치

let pageCount = 0;
let zPoint = 0;
const tl = new TimelineLite();

// var div_array = Array.prototype.slice.call(div_list)
// const sectionBetween = Array.prototype.slice.call(section).map(item => parseInt(item.style.transform.split(' ').reverse()[0].split(')')[0]));


document.addEventListener('wheel', e=> {

    const { wheelDeltaY } = e;
    
    // pageCount = sectionBetween.filter( item => (item - zPoint) > 0);
    // console.log(pageCount);
    pageCount = parseInt(zPoint/(1000*(pageCount+1 ?? 1)));

    zPoint = ( wheelDeltaY < 0 ) ? zPoint - moveSpeed : zPoint + moveSpeed;

    if ( pageWheelGreedMax <= wheelDeltaY && wheelDeltaY >= -1 ) {
        zPoint = ( wheelDeltaY < 0 ) ? zPoint - moveSpeed : zPoint + moveSpeed;
    } else{
        zPoint = 0;
    }
    
    console.log(`zPoint: ${zPoint} pageCount: ${pageCount}`);
    
    // if (!section[pageCount] || zPoint < -1) {
    //     zPoint = 0;
    //     console.log(`end`);
        
    //     return;
    // }


    if ( wheelDeltaY < 0 ) {
        // tl.to(section[pageCount], .01, {x:0, y:0, z:'-='+moveSpeed});
        tl.set(section[pageCount], {x:0, y:0, z:'-='+moveSpeed});
        // tl.to(contents[pageCount], .01, {x:0, y:0, z:'-='+moveSpeed});
    }else{
        // tl.to(section[pageCount], .01, {x:0, y:0, z:'+='+moveSpeed});
        tl.set(section[pageCount], {x:0, y:0, z:'+='+moveSpeed});
        // tl.to(contents[pageCount], .01, {x:0, y:0, z:'+='+moveSpeed});
    }

});

