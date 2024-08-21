// Get the task list element
const taskList = document.getElementById('task-list');

// Get the add task button
const addTaskButton = document.getElementById('add-task');

// Get the new task input field
const newTaskInput = document.getElementById('new-task');

// Create an array to store the tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const newTask = newTaskInput.value.trim();
  if (newTask !== '') {
    tasks.push({ text: newTask, completed: false });
    newTaskInput.value = '';
    renderTaskList();
  }
}

// Function to render the task list
function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.text;
    if (task.completed) {
      taskElement.classList.add('completed');
    }
    taskElement.addEventListener('click', () => {
      toggleTaskCompletion(index);
    });
    taskList.appendChild(taskElement);
  });
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTaskList();
}

// Add event listener to the add task button
addTaskButton.addEventListener('click', addTask);

// Render the initial task list
renderTaskList();