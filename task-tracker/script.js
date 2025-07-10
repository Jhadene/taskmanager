const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('task-name').value;
  const deadline = document.getElementById('task-deadline').value;
  const priority = document.getElementById('task-priority').value;

  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `
    <span>${name} – ${deadline} – Priority: ${priority}</span>
    <button class="complete-btn">✓</button>
    <button class="delete-btn">✕</button>
  `;

  taskList.appendChild(taskItem);

  // Complete task
  taskItem.querySelector('.complete-btn').addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Delete task
  taskItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  form.reset();
});
