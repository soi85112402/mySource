'use strict';


const section = document.querySelectorAll('section');
const contents = document.querySelectorAll('content');

const moveSpeed = 100;

let pageCount = 0;
let zPoint = 0;
const tl = new TimelineLite();

// var div_array = Array.prototype.slice.call(div_list)
const sectionBetween = Array.prototype.slice.call(section).map(item => parseInt(item.style.transform.split(' ').reverse()[0].split(')')[0]));

// console.log(section.filter(item => item.style.transform.translate3d.z));
// console.log(section.filter((item,index) => index));
// console.log(section.values());


// console.log(section.filter(item => item.style.transform.translate3d.z < 0));



// console.log(sectionBetween);


document.addEventListener('wheel', e=> {

    const { wheelDeltaY } = e;

    
    // pageCount = parseInt(zPoint/(1000*(pageCount+1 ?? 1)));
    pageCount = sectionBetween.filter( item => (item - zPoint) > 0);
    console.log(pageCount);
    
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
        // tl.to(contents[pageCount], .01, {x:0, y:0, z:'-='+moveSpeed});
    }else{
        tl.to(section[pageCount], .01, {x:0, y:0, z:'+='+moveSpeed});
        // tl.to(contents[pageCount], .01, {x:0, y:0, z:'+='+moveSpeed});
    }

    // section[pageCount].style.transform = `translate3d(0,0,${zPoint + (pageCount * -1000)}px)`;

});

