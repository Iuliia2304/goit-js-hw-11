import axios from 'axios';

const API_KEY = '51317900-f0372c6e5a84e0989a980511e';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
     const params = {
          key: API_KEY,
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
     };
     
     const response = await axios.get(BASE_URL, { params });
     return response.data;
     }
