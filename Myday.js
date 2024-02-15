let tasks = [];

function addTask() {
  const taskInput = prompt("Enter your task:");
  if (taskInput) {
    tasks.push({ taskName: taskInput, completed: false });
    renderTasks();
  }
}

function renderTasks() {
  const tasksContainer = document.getElementById("tasksContainer");
  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    taskElement.className = "task";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
    });
    const taskText = document.createElement("span");
    taskText.textContent = task.taskName;
    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskText);
    tasksContainer.appendChild(taskElement);
  });

  updateMotivationMessage();
}

function updateMotivationMessage() {
  const motivationMessages = [
    "Keep up the good work!",
    
    "One step at a time!",
    "You got this!",
    "Stay focused and motivated!"
  ];
  const randomIndex = Math.floor(Math.random() * motivationMessages.length);
  document.getElementById("motivationMessage").textContent = motivationMessages[randomIndex];
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);

renderTasks();
