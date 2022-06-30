//Задание #1
/* <form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form> */

//вариант 2
const form = document.createElement('form');
document.body.prepend(form);
const labelText = document.createElement('label');
form.prepend(labelText);
labelText.textContent = 'Имя';
const labelPassword = document.createElement('label');
form.append(labelPassword);
labelPassword.innerText = 'Пароль';
const button = document.createElement('button');
form.append(button);
const inputText = document.createElement('input');
const inputPassword = document.createElement('input');

form.classList.add("create-user-form");

labelText.insertAdjacentElement('beforeend', inputText);
labelPassword.insertAdjacentElement('beforeend', inputPassword);

inputText.setAttribute('type', 'text');
inputText.setAttribute('name', 'userName');
inputText.setAttribute('placeholder', 'Введите ваше имя');

inputPassword.setAttribute('type', 'password');
inputPassword.setAttribute('name', 'password');
inputPassword.setAttribute('placeholder', 'Придумайте Пароль');

button.setAttribute('type', 'submit');
button.innerText = 'Подтвердить';





// вариант 1
// document.body.innerHTML = "<form><lable></lable><lable></lable><button></button></form>";
// const form = document.querySelector("form");
// form.classList.add("create-user-form");

// const labelText = form.firstElementChild;
// labelText.textContent = 'Имя';
// labelText.innerHTML = "<input>";
// const inputText = labelText.querySelector("input");
// inputText.setAttribute('type', 'text');
// inputText.setAttribute('name', 'userName');
// inputText.setAttribute('placeholder', 'Введите ваше имя');


// const labelPassword = labelText.nextElementSibling;
// labelPassword.innerText = 'Пароль';
// labelPassword.innerHTML = "<input>";
// const inputPassword = labelPassword.querySelector("input");
// inputPassword.setAttribute('type', 'password');
// inputPassword.setAttribute('name', 'password');
// inputPassword.setAttribute('placeholder', 'Придумайте Пароль');


// const button = form.querySelector('button');
// button.setAttribute('type', 'submit');
// button.innerText = 'Подтвердить';




