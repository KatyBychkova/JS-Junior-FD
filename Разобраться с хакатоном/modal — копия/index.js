const button = document.querySelector('.button');
// isModalWindow
button.addEventListener('click', () => {
    const  isModalWindow = document.querySelector('.modal');

    console.log(isModalWindow);
    if (isModalWindow !== null) {
        isModalWindow.remove();
        start();
        // modalWindow = document.querySelector('.modal');
        // modalWindow.removeAttribute('hidden', '');
        // modalWindow.classList.add('open');
    } else {
        start();
    }
});

function getRandomImageNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createModalWindow(num) {

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('hidden', '');
    document.body.prepend(modal);

    const modalInner = document.createElement('div');
    modalInner.className = 'modal__inner';
    modal.append(modalInner);

    const modalContent = document.createElement('div');
    modalContent.className = 'modal__content';
    modalInner.append(modalContent);

    const modalImage = document.createElement('div');
    modalImage.className = 'modal__image';
    modalContent.append(modalImage);

    const image = document.createElement('img');
    image.src = `./images/img${num}.jpg`;
    modalImage.append(image);

    const modalClose = document.createElement('span');
    modalClose.className = 'modal__close';
    modalClose.textContent = 'X';
    modalContent.append(modalClose);

    return modal;
}

function start() {
    let randomImageNumber = getRandomImageNumber(1, 8);
    createModalWindow(randomImageNumber);

    const modalWindow = document.querySelector('.modal');
    modalWindow.addEventListener('click', (event) => {
        const isCloseButton = event.target.closest('.modal__close');
        if (isCloseButton) {
  
            modalWindow.remove();
        }
    });

    
    modalWindow.removeAttribute('hidden', '');
 

}