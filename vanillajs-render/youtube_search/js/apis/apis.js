'use strict';

const API_KEY = 'AIzaSyCuykthN9JYnA2j7kVUKxgK8wQAAjPBrv8';
const API_END_POINT = 'https://www.googleapis.com/youtube/v3';
const PARAMS = 'part=snippet&regionCode=kr'

export default {
    mostPopular : (next) => fetch(`${API_END_POINT}/search?${PARAMS}&chart=mostPopular&maxResults=5&key=${API_KEY}&pageToken=${next || ''}`),
    search : (search_value, next) => fetch(`${API_END_POINT}/search?${PARAMS}&maxResults=5&key=${API_KEY}&pageToken=${next || ''}&search_value=${search_value || ''}`)
};