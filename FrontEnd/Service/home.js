import * as websitelogics from './websitelogic.js';

const add = document.getElementById('button-add');
const tasks = document.getElementById('tasks');
const task = document.getElementById('task');
const allTask = document.getElementById('allTask');

let userTasks = JSON.parse(localStorage.getItem('tasks')) || []; 
let userId = JSON.parse(localStorage.getItem('user'));

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
        
        createImg.className = 'remove';
        createImg.alt = 'remove';
        createImg.src = '/FrontEnd/images/remove.png';
        createImg.onclick = function() {
            const divId = this.closest('div').id;

            const index = userTasks.findIndex(task => task.id === divId);

            if(index !== -1){
                userTasks.splice(index, 1);
            }

            localStorage.setItem('tasks', JSON.stringify(userTasks));

            userTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            
            this.closest('div').remove();

            console.log(userTasks);

            websitelogics.removeTask(userId.userId, divId, userId.token);
        };

        createDiv.append(h1, createImg);

        allTask.appendChild(createDiv);

        console.log('whatt');
    }
}

function removeTask(value){
    const divId = value.closest('div').id;
        userTasks.splice[0, divId];

        localStorage.setItem('tasks', JSON.stringify(userTasks));

        value.closest('div').remove();

        console.log(divId);
        websitelogics.removeTask(userId.userId, divId, userId.token);
}


