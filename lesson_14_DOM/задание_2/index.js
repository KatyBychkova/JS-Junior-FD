const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript"
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока"
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока"
    }
  ];


  const divTasksList = document.querySelector('.tasks-list');

  function addTask(taskID, taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.innerHTML =`    
    <div class="task-item" data-task-id="${taskID}">
        <div class="task-item__main-container">
            <div class="task-item__main-content">
                <form class="checkbox-form">
                    <input class="checkbox-form__checkbox" type="checkbox" id="${taskID}">
                    <label for="${taskID}"></label>
                </form>
                <span class="task-item__text">
                    ${taskText}
                </span>
            </div>
            <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
                Удалить
            </button>
        </div>
    </div>`

    return taskDiv;
  }
   

  tasks.forEach((elem) => {
const taskItem = addTask(elem.id, elem.text);
divTasksList.append(taskItem);

  })


  /*
  const divTasksList = document.querySelector('.tasks-list');

for (let i = 0; i < tasks.length; i++) {
  const taskID = tasks[i].id;
  const taskText = tasks[i].text;
  addTask(taskID, taskText);

}

function addTask(taskID, taskText) {

  divTasksList.innerHTML += `
  <div class="task-item" data-task-id="${taskID}">
      <div class="task-item__main-container">
          <div class="task-item__main-content">
              <form class="checkbox-form">
                  <input class="checkbox-form__checkbox" type="checkbox" id="${taskID}">
                  <label for="${taskID}"></label>
              </form>
              <span class="task-item__text">
                  ${taskText}
              </span>
          </div>
          <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
              Удалить
          </button>
      </div>
  </div>`
}
*/





