

// iziToast стилі
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a');

const API_KEY = '51317900-f0372c6e5a84e0989a980511e';
const BASE_URL = 'https://pixabay.com/api/';

form.addEventListener('submit', async (e) => {
     e.preventDefault();
     const query = form.elements['search-text'].value.trim();
     if (!query) return;
     
     gallery.innerHTML = '';
     showLoader();
     
     try {
          const response = await fetchImages(query);
          if (response.hits.length === 0) {
               iziToast.warning({
                    title: 'Sorry',
                    message: 'there are no images matching your search query. Please try again!',
                    position: 'topRight',
               });
               return;
          }
          
          renderGallery(response.hits);
          lightbox.refresh();
     } catch (error) {
          iziToast.error({
               title: 'Error',
               message: 'Something went wrong!',
               position: 'topRight',
          });
     } finally {
     
     }
     });
     function showLoader() {
          loader.classList.remove('hidden');
     }
     
     function hideLoader() {
          loader.classList.add('hidden');
     }
     
     async function fetchImages(query) {
          const response = await axios.get(BASE_URL, {
               params: {
                    key: API_KEY,
                    q: query,
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: true,
                    per_page: 12,
               },
          });
          return response.data;
     }
     
     function renderGallery(images) {
          const markup = images
          .map(
               (img) => `
               <li class="gallery-item">
               <a href="${img.largeImageURL}">
               <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
               </a>
               <div class="image-info">
               <p><b>Likes:</b> ${img.likes}</p>
               <p><b>Views:</b> ${img.views}</p>
               <p><b>Comments:</b> ${img.comments}</p>
               <p><b>Downloads:</b> ${img.downloads}</p>
               </div>
               </li>
               `
          )
          .join('');
          gallery.insertAdjacentHTML('beforeend', markup);
     }
     
