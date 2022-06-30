import "../index.css";
import JS_IMAGE from '../assets/javascript.png';

const textJS = document.createElement('h1');
textJS.className = 'js-text';
textJS.textContent = 'I love JavaScript';
document.body.append(textJS);

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;

document.body.append(jsImageHTML);