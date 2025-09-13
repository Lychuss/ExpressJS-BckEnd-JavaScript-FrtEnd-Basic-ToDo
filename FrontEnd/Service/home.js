import * as websitelogics from './websitelogic.js';

const add = document.getElementById('button-add');
const tasks = document.getElementById('tasks');
const task = document.getElementById('task');

const userTasks = JSON.parse(localStorage.getItem('tasks')) || []; 
const userId = JSON.parse(localStorage.getItem('user'));

add.addEventListener('click', async () => {

    websitelogics.addTasks(userId);
    
    const response = await websitelogics.getTasks(userId);

    userTasks.push(response);

    localStorage.setItem('tasks', JSON.stringify(userTasks));

});


