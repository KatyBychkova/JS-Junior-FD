const tasks = [];
let counter;

const divTasksList = document.querySelector('.tasks-list');

const newTask = document.querySelector('.create-task-block');
const newTaskInput = document.querySelector('.create-task-block__input');

const createErrorBlock = (errorMessage) => {
    const errorBlock = document.createElement('span');
    errorBlock.innerText = errorMessage;
    errorBlock.className = 'error-message-block';
    return errorBlock;
}

newTask.addEventListener('submit', (event) => {
    event.preventDefault();

    let error1 = false;
    let error2 = false;
    //const isErrorExists = document.querySelector('.error-message-block');
    const newTaskElem = {
        id: Date.now().toString(),
        text: newTaskInput.value
    };
    const searchDoubleTask = tasks.some((elem) => elem.text === newTaskInput.value);

    if (newTaskInput.value === '') {
        const errorBlock = createErrorBlock('Название задачи не должно быть пустым');
        newTask.append(errorBlock);
        error1 = true;
    } else if (searchDoubleTask) {
        const errorBlock = createErrorBlock('Задача с таким названием уже существует');
        newTask.append(errorBlock);
        error2 = true;
    }
    const isErrorExists = document.querySelector('.error-message-block');
    console.log(isErrorExists)
    // else if (isErrorExists) {
    //     console.log("delete iserror exist")
    //         isErrorExists.remove();
    //     }

    // if (isErrorExists) {
    //     isErrorExists.remove();
    // }

    if (!error1 && !error2) {
        createElement(newTaskElem);
    }

})

function createElement(newTaskElement) {
    tasks.push(newTaskElement);
    const taskItem = addTask(newTaskElement.id, newTaskElement.text);
    divTasksList.append(taskItem);
}


function addTask(taskID, taskText) {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = taskID;

    const taskItemMainContainer = document.createElement("div");
    taskItemMainContainer.className = "task-item__main-container";

    const taskItemMainContent = document.createElement("div");
    taskItemMainContent.className = "task-item__main-content";
    taskItem.append(taskItemMainContainer);
    taskItemMainContainer.append(taskItemMainContent);

    const checkboxForm = document.createElement("form");
    checkboxForm.className = "checkbox-form";

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.className = "checkbox-form__checkbox";

    const inputId = `task-${taskID}`;
    inputCheckbox.id = inputId;

    const labelCheckbox = document.createElement("label");
    labelCheckbox.htmlFor = inputId;

    const taskItemText = document.createElement("span");
    taskItemText.className = "task-item__text";
    taskItemText.innerText = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.className =
        "task-item__delete-button default-button delete-button";
    deleteButton.innerText = "Удалить";
    taskItemMainContent.append(checkboxForm, taskItemText);
    checkboxForm.append(inputCheckbox, labelCheckbox);
    taskItemMainContainer.append(deleteButton);

    return taskItem;
}