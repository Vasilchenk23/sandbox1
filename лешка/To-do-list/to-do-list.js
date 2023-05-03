const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const clearTaskListButton = document.getElementById('clear-task-list')

function addTask() {
    const taskText = newTaskInput.value;
    if (!taskText) {
      return;
    }
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    newTask.addEventListener('click', toggleTask);
    taskList.appendChild(newTask);
    newTaskInput.value = '';

    if (taskList.children.length > 0) {
      clearTaskListButton.disabled = false;
    }
  }

  function toggleTask(event) {
    const task = event.target;
    task.classList.toggle('completed');
  }

  function clearTaskList() {
    taskList.innerHTML = '';
    clearTaskListButton.disabled = true;
  }

  addTaskButton.addEventListener('click', addTask);
  clearTaskListButton.addEventListener('click', clearTaskList)
