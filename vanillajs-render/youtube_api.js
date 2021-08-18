'use strict';

const API_KEY = 'AIzaSyCuykthN9JYnA2j7kVUKxgK8wQAAjPBrv8';
const API_END_POINT = 'https://www.googleapis.com/youtube/v3';

export const getYoutubeList = async () => {
  const res = await fetch(`${API_END_POINT}/search?part=snippet&q=kpop+music&key=${API_KEY}`);

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