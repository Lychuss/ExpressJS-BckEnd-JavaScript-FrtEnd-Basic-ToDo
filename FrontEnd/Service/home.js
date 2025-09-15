import * as websitelogics from './websitelogic.js';

const body = document.getElementById('bodies');
const add = document.getElementById('button-add');
const tasks = document.getElementById('tasks');
const task = document.getElementById('task');
const allTask = document.getElementById('allTask');
const logout = document.getElementById('logout');
const changeThemes = document.getElementById('themes-toggle');

let userTasks = JSON.parse(localStorage.getItem('tasks')) || []; 
let userId = JSON.parse(localStorage.getItem('user'));

window.addEventListener('DOMContentLoaded', () => {
    displayTask();
});

add.addEventListener('click', async () => {

    if(task.value === ''){
        return alert('Put a task!');
    }
    const data = await websitelogics.addTasks(userId.userId, userId.token, task);
    
    const response = await websitelogics.getTasks(userId.userId, userId.token);

    if(response === 403 || data === 403){
        return window.location.href = '/FrontEnd/Interface/login.html';
    }

    if(allTask.childElementCount != 0) allTask.innerHTML = '';

    userTasks.push(response);
    localStorage.setItem('tasks', JSON.stringify(userTasks));

    displayTask();
});

logout.addEventListener('click', () => {
    window.location.href = '/FrontEnd/Interface/login.html';
})

function displayTask(){
        console.log(userTasks);

        for(let i = 0; i < userTasks.length; i++){
            console.log(userTasks[i].tasks);
            if(userTasks[i].tasks === ""){
                return;
            }

            const createDiv = document.createElement('div');
            createDiv.className = 'displaytask';
            createDiv.id = userTasks[i].id;

            console.log(userTasks[i].id);

            const h1 = document.createElement('span');
            h1.textContent = userTasks[i].tasks;
            h1.className = 'taskClass';
            const h2 = document.createElement('span');
            h2.textContent = userTasks[i].formatted;
            h2.className = 'taskClass';

            const createImg = document.createElement('img');
            
            createImg.className = 'remove';
            createImg.alt = 'remove';
            createImg.src = '/FrontEnd/images/remove.png';
            createImg.onclick = function() {
                const divId = this.closest('div').id;
                const index = userTasks.findIndex(task => task.id === divId);

                if (index !== -1) {
                    userTasks.splice(index, 1);
                }

                localStorage.setItem('tasks', JSON.stringify(userTasks));
                userTasks = JSON.parse(localStorage.getItem('tasks')) || [];
                this.closest('div').remove();

                websitelogics.removeTask(userId.userId, divId, userId.token);
            };

            createDiv.append(h1, h2, createImg);

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

export function changeTheme(){
    if(changeThemes.checked){
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme')
    }
}

window.changeTheme = changeTheme;

