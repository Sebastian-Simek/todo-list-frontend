import { addTask, checkUser, getTasks, logout, } from '../fetch-utils.js';
import { renderTasks } from '../render-utils.js';
const logoutBtn = document.getElementById('logout');
const taskInput = document.getElementById('add-task');


checkUser();

logoutBtn.addEventListener('click', async () => {
    await logout();
});

taskInput.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(taskInput);
    await addTask({
        taskName: formData.get('task-name'),
        description: formData.get('task-description'),
    });
    location.replace('/');
});

export async function displayTasks() {
    const taskDisplay = document.getElementById('task-display');

    const tasks = await getTasks();

    for (let task of tasks) {
        const taskOutput = renderTasks(task);
        taskDisplay.append(taskOutput);
    }
}

displayTasks();


