'use strict';


const section = document.querySelectorAll('section');

const moveSpeed = 100;

let pageCount = 0;
let zPoint = 0;
const tl = new TimelineLite();

document.addEventListener('wheel', e=> {

    const { wheelDeltaY } = e;

    pageCount = parseInt(zPoint/(1000*(pageCount+1)));
    // pageCount = (pageCount > 0)? pageCount : 0;

    zPoint = ( wheelDeltaY < 0 ) ? zPoint - moveSpeed : zPoint + moveSpeed;

    // console.log(section[pageCount].style.transform);
    console.log(zPoint);
    
    if (!section[pageCount] || zPoint < -1) {
        zPoint = 0;
        console.log(`end`);
        
        return;
    }




    if ( wheelDeltaY < 0 ) {
        tl.to(section[pageCount], .01, {x:0, y:0, z:'-='+moveSpeed});
    }else{
        tl.to(section[pageCount], .01, {x:0, y:0, z:'+='+moveSpeed});
    }

    
    
    
  
    // section[pageCount].style.transform = `translate3d(0,0,${zPoint + (pageCount * -1000)}px)`;

});

