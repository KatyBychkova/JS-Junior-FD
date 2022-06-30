const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const createUserName = (text) => {
    const userName = document.createElement('li');
    const userLink = document.createElement('a');
    userLink.href = '#';
    userLink.textContent = text;
    userName.append(userLink);

    return userName;
}

const allUsersContainer = document.querySelector('#data-container');

const toggleLoad = () => {
    const loader = document.querySelector('#loader');
    const isLoaderHidden = loader.hasAttribute('hidden');
    if (isLoaderHidden) {
        loader.removeAttribute('hidden')
    } else {
        loader.setAttribute('hidden', '')
    }
}

function getUsersByIds(ids) {
    toggleLoad();
    const promises = ids.map((id) => fetch(`${USERS_URL}/${id}`));
    console.log(promises);
    Promise.all(promises)
        .then((responses) => {
            const results = responses.map((respons) => respons.json())
            console.log(results)
            return Promise.all(results);                                 //results это у нас будет массив промисов, а Promise.all ждёт покуда загрузиться все промисы!
        })
        .then((users) => {
            console.log(users);
            users.forEach((user) => {
                const userN = createUserName(user.name);
                allUsersContainer.append(userN);
            })
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            toggleLoad();
        })
}

getUsersByIds([5, 6, 2, 1]);