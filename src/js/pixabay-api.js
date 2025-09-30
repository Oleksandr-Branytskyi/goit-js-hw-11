import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52538556-e7ad6b62877d90490937495df';

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
