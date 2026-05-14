const API_KEY = '55861557-2268365b5b48955757ff78c80';

export default function getImagesByQuery(word) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
