const add = document.getElementById('button-add');
const tasks = document.getElementById('tasks');
const task = document.getElementById('task');

const userId = JSON.parse(localStorage.getItem('user'));

add.addEventListener('click', async () => {
    console.log(userId.token);
    const response = await fetch(`http://localhost:5000/tasks/add`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userId?.token}`
    },
    body: JSON.stringify({
        task: task.value,
        date: '2024-1-23',
        })
    })
});