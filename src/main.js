// У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі. Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formEl = document.querySelector('.form');
const input = document.querySelector('input');

formEl.addEventListener('submit', formHandler);

function formHandler(event) {
  event.preventDefault();

  showLoader();

  const searchText = input.value.trim();

  input.value = '';

  getImagesByQuery(searchText)
    .then(data => {
      clearGallery();

      if (data.hits.length === 0) {
        iziToast.show({
          title: 'Message',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      if (axios.isCancel(error)) {
        console.log(error);
      }
    })
    .finally(() => {
      hideLoader();
    });
}
