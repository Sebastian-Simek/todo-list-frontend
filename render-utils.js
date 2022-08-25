import { deleteTask, updateTask } from './fetch-utils.js';

export function renderTasks(task) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = `Task: ${task.taskName}`;
    const p = document.createElement('p');
    p.textContent = `Description: ${task.description}`;
    const p2 = document.createElement('p');
    p2.textContent = `Completed? ${task.completed}`;
    const button = document.createElement('button');
    button.textContent = 'delete task';
    const button2 = document.createElement('button');
    button2.textContent = 'Mark as completed';

    button2.addEventListener('click', async () => {
        await updateTask(task.id);
        location.replace('/');
    });

    button.addEventListener('click', async () => {
        await deleteTask(task.id);
        location.replace('/');
    });

    div.append(h4, p, p2, button2, button);

    return div;

}