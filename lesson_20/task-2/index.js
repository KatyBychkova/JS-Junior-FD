import './index.css';

let isClick = false;
const cookieButton = document.querySelector('.cookie-consent__button');
const cookieConsent = document.querySelector('.cookie-consent');

cookieButton.addEventListener('click', () => {
    isClick = true;
    localStorage.setItem('buttonIsClick', 'true');
});

if (localStorage.getItem('buttonIsClick')) {
    cookieConsent.classList.add('hide');
}
