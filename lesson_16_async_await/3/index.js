const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";


const albumContainer = document.createElement('ul');
albumContainer.id = 'data-container';
document.body.append(albumContainer);

const toggleSpan = document.createElement('span');
toggleSpan.classList.add('loaded');
toggleSpan.setAttribute('hidden', '');
toggleSpan.textContent = "Загрузка...";
albumContainer.append(toggleSpan);

console.log(toggleSpan);

function toggleLoaded() {
    const span = document.querySelector('.loaded');
    const isHidden = span.hasAttribute('hidden', '');
    if (!isHidden) {
        span.setAttribute('hidden', '');
    } else {
        span.removeAttribute('hidden');
    }
}

function createElement(text) {
    const elementOfAlbum = document.createElement('li');
    elementOfAlbum.textContent = text;
    albumContainer.append(elementOfAlbum);
}

function createError(text) {
    const errorText = document.createElement('div');
    errorText.textContent = text;
    albumContainer.append(errorText);
}

const renderAlbums = async () => {
    toggleLoaded();
    try {
        const response = await fetch(ALBUMS_URL); // получаем ответ response по запросу
        console.log(response);
        const albums = await response.json(); //дешифровали ответ и получили массив объектов
                                               // без await получаем Promise
        console.log(albums);
        albums.forEach((album) => {
            const albumTitle = album.title;
            createElement(albumTitle);

        });
    } catch (error) {
        createError('Произошла ошибка в получении данных об альбомах...');
        console.error(error);
    }  finally {
        toggleLoaded();
    }
};

renderAlbums();