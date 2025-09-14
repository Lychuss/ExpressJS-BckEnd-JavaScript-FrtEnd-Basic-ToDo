import * as websitelogics from './websitelogic.js';

const add = document.getElementById('button-add');
const tasks = document.getElementById('tasks');
const task = document.getElementById('task');
const allTask = document.getElementById('allTask');

const userTasks = JSON.parse(localStorage.getItem('tasks')) || []; 
const userId = JSON.parse(localStorage.getItem('user'));

window.addEventListener('DOMContentLoaded', displayTask);

add.addEventListener('click', async () => {

    await websitelogics.addTasks(userId.userId, userId.token, task);
    
    const response = await websitelogics.getTasks(userId.userId, userId.token);

    if(allTask.childElementCount != 0) allTask.innerHTML = '';

    userTasks.push(response);
    localStorage.setItem('tasks', JSON.stringify(userTasks));

    displayTask();
});

function displayTask(){
        console.log(userTasks);

        for(let i = 0; i < userTasks.length; i++){
        const createDiv = document.createElement('div');
        createDiv.className = 'displaytask';
        createDiv.id = userTasks[i].id;

        console.log(userTasks[i].id);

        const h1 = document.createElement('h1');
        h1.textContent = userTasks[i].tasks;
        h1.className = 'taskClass';

        const createImg = document.createElement('img');
        createImg.onclick = async () => {
            if(createDiv.id === userTasks[i].id){
                userTasks.splice[1, i];
                localStorage.setItem('tasks', JSON.stringify(userTasks));
            }
            createDiv.remove();
            console.log(createDiv.id);
            websitelogics.removeTask(userId.userId, createDiv.id, userId.token);
        };
        
        createImg.className = 'remove';
        createImg.alt = 'remove';
        createImg.src = '/FrontEnd/images/remove.png';

        createDiv.append(h1, createImg);

        allTask.appendChild(createDiv);

        console.log('whatt');
    }
}


