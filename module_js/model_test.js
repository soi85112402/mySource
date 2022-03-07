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