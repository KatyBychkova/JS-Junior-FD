import { filmMock } from './filmsMock.js';

const ALL_FILMS = 'all_films';
const FAVORITE_FLMS = 'favorite_films';



if (!localStorage.getItem( ALL_FILMS) && !localStorage.getItem(FAVORITE_FLMS)) {
    localStorage.setItem('all_films', JSON.stringify)
}


function toStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function toStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

