import {getRandomColor} from './utils';


export default function initApp() {
    console.log("Hello world");

    const button = document.createElement('button');
    button.className = "button";
    button.textContent = 'Изменить цвет страницы';
    document.body.append(button);

    const buttonClick = document.querySelector('.button');
    buttonClick.addEventListener('click', () => {
       const color = getRandomColor();
       document.body.style.backgroundColor = color;
    });
  }

 