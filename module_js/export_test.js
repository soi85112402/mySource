const FREEZE = 'aa';
let NON_FREEZE = 'bb';

export default {
  setFreeze1 : value => {
    return NON_FREEZE = value;
  },
  getFreeze1 : () => {
    return NON_FREEZE;
  },
  getFreeze2 : () => {
    return FREEZE;
  }

}
// export const FREEZE_DATA2 = 'bbbbBBB';

// class returnLiteral {
//   name = '';
//   setName = value => {
//     this.name = value
//   }
//   getName = () => {
//     return this.name;
//   }

//   constructor (value) {
//     this.name = value;
//   }
// }



// export default returnLiteral;
/* {
  name : '',
  setName : value => {
    this.name = value
  },
  getName : value => {
    return this.name;
  }
  sayHi : name =>{
    console.log(name)
  }
} */