'use strict';

import apis from '/js/apis/apis.js';

export const getYoutubeList = async () => {
  const res = await apis.mostPopular();
  try {
    if (!res.ok) {
      throw new Error('error');
    }
    return await res.json();

  } catch(e) {
    throw new Error(e.messege);
  }

};
// export const getYoutubeList = () => {
//   fetch(`${API_END_POINT}/search?part=snippet&q=kpop+music&key=${API_KEY}`)
//   .then( response => {
//     if (!response.ok) {
//       throw new Error('error');
//     }
//     return response.json();
//   })
//   .then(json => {
//     console.log(JSON.stringify(json));
//   })
//   .catch(e => {
//     throw new Error(e.messege);
//   })
// };