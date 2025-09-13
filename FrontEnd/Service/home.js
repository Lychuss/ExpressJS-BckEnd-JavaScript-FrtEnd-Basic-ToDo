import * as websitelogics from './websitelogic.js';

const add = document.getElementById('button-add');
const tasks = document.getElementById('tasks');
const task = document.getElementById('task');

const userTasks = JSON.parse(localStorage.getItem('tasks')) || []; 
const userId = JSON.parse(localStorage.getItem('user'));

add.addEventListener('click', async () => {

    websitelogics.addTasks(userId.userId, userId.token);
    
    const response = await websitelogics.getTasks(userId.userId, userId.token);

    userTasks.push(response);

    localStorage.setItem('tasks', JSON.stringify(userTasks));

    console.log(userTasks);

    for(let i = 0; i < userTasks.length; i++){
        const createDiv = document.createElement('div');
        createDiv.className = 'displaytask';
        createDiv.id = userTasks[i].Id;

        const h1 = document.createElement('h1');
        h1.textContent = userTasks[i].tasks;

        const createImg = document.createElement('img');
        createImg.onclick = function () {
            createDiv.remove();
        };
        
        createImg.className = 'remove';
        createImg.alt = 'remove';
        createImg.src = '/FrontEnd/images/remove.png';

        createDiv.append(h1, createImg);

        tasks.appendChild(createDiv);

        console.log('whatt');
    }
});


