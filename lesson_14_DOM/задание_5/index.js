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

const modalWindow = createModalWindow();
document.body.prepend(modalWindow);

const deleteTaskList = document.querySelector('.tasks-list');

newTask.addEventListener('submit', (event) => {
    event.preventDefault();

    let error1 = false;
    let error2 = false;
    const isErrorExists = document.querySelector('.error-message-block');
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

    if (isErrorExists) {
        isErrorExists.remove();
    }

    if (!error1 && !error2) {
        createElement(newTaskElem);
    }

})

deleteTaskList.addEventListener('click', (event) => {
    //console.log('target', event.target);
    const isDeleteButton = event.target.closest('.task-item__delete-button');
    const taskItem = event.target.closest('.task-item');
    const taskId = taskItem.dataset.taskId;
    const deleteIndex = tasks.findIndex((item) => item.id === taskId);
    //console.log(deleteIndex);
    if (isDeleteButton) {
        modalWindow.classList.remove('modal-overlay_hidden');
    };
    modalWindowUp(tasks, taskItem, deleteIndex);
})

function modalWindowUp(array, item, delIndex) {
    modalWindow.addEventListener('click', (event) => {
        const isCancelButton = event.target.closest('.delete-modal__cancel-button');
        const isDelConfirmButton = event.target.closest('.delete-modal__confirm-button')
        if (isCancelButton) {
            modalWindow.classList.add('modal-overlay_hidden');
        };
        if (isDelConfirmButton) {
            array.splice(delIndex, 1);
            item.remove();
            modalWindow.classList.add('modal-overlay_hidden');
        }
    });

}

//console.log(tasks);

function createModalWindow() {

    const modalWindowOverlay = document.createElement('div');
    modalWindowOverlay.className = 'modal-overlay modal-overlay_hidden';

    const modalWindowContainer = document.createElement('div');
    modalWindowContainer.className = 'delete-modal';
    modalWindowOverlay.append(modalWindowContainer);

    const modalWindowQuestion = document.createElement('h3');
    modalWindowQuestion.className = 'delete-modal__question';
    modalWindowQuestion.textContent = 'Вы действительно хотите удалить эту задачу?';
    modalWindowContainer.append(modalWindowQuestion);

    const deleteButtons = document.createElement('div');
    deleteButtons.className = 'delete-modal__buttons';
    modalWindowContainer.append(deleteButtons);

    const cancelButton = document.createElement('button');
    cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
    cancelButton.textContent = 'Отмена';
    deleteButtons.append(cancelButton);

    const confirmButton = document.createElement('button');
    confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
    confirmButton.textContent = 'Удалить';
    deleteButtons.append(confirmButton);

    return modalWindowOverlay;

}

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