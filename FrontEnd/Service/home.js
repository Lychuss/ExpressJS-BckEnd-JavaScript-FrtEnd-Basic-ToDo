const add = document.getElementById('add');
const tasks = document.getElementById('tasks');
const task = document.getElementById('task');

const user = JSON.parse(localStorage.getItem('user'));

add.addEventListener('click', async () => {
    const response = await fetch(`http://localhost:5000/tasks/${userId}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.token}`
        },
        body: JSON.stringify({
            task: task.value,
            date: '2024-1-23',
        })
    })
});