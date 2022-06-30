const tasks = [];
let counter;

const divTasksList = document.querySelector('.tasks-list');

const newTask = document.querySelector('.create-task-block');
const newTaskInput = document.querySelector('.create-task-block__input');


newTask.addEventListener('submit', (event) => {
    //console.log(event);
    event.preventDefault();
                                                         
    const newTaskElem = {                             //newTaskElem - этот объект будте всегда создаваться при событие submit, 
        id: Date.now().toString(),                    //и его ключи мы будем добавлять уникальный id и текст который в input.value
        text: newTaskInput.value
    };

    tasks.push(newTaskElem);

    const taskItem = addTask(newTaskElem.id, newTaskElem.text);
    divTasksList.append(taskItem);
})


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