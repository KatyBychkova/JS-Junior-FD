const USERS_PHOTO = 'https://jsonplaceholder.typicode.com/photos';


const photoContainer = document.querySelector('#data-container');

const createPhotoElement = (url, title) => {
    const photoItem = document.createElement('li');
    photoItem.classList.add('photo-item');

    const photoImage = document.createElement('img');
    photoItem.append(photoImage);
    photoImage.classList.add('photo-item__image');
    photoImage.src = url;

    const photoTitle = document.createElement('h3');
    photoTitle.classList.add('photo-item__title');
    photoTitle.textContent = title;
    photoItem.append(photoTitle);

    return photoItem;
}

const toggleLoad = () => {
    const loader = document.querySelector('#loader');
    const isLoaderHidden = loader.hasAttribute('hidden');
    if (isLoaderHidden) {
        loader.removeAttribute('hidden')
    } else {
        loader.setAttribute('hidden', '')
    }
}

function getFastestLoadedPhoto(ids) {
    toggleLoad();
    const promises = ids.map((id) => {
        return fetch(`${USERS_PHOTO}/${id}`)
    });

    Promise.race(promises)
        .then(response => response.json())
        .then((item) => {
            const photo = createPhotoElement(item.url, item.title);
            photoContainer.append(photo)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            toggleLoad();
        })
}


getFastestLoadedPhoto([60, 12, 55]);