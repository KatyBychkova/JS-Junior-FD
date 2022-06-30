const usersURL = 'https://jsonplaceholder.typicode.com/users';

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

const getAllUsers = () => {
    toggleLoad();
    const result = fetch(usersURL, {
        method: 'GET',
    });
    
    result
        .then((response) => {
            return response.json()
        })
        .then((users) => {
            users.forEach((user) => {
                const userN = createUserName(user.name);
                allUsersContainer.append(userN)
            })
            
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            toggleLoad();
        })
    
}

getAllUsers();


