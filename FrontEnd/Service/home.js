const add = document.getElementById('button-add');
const tasks = document.getElementById('tasks');
const task = document.getElementById('task');

const userId = JSON.parse(localStorage.getItem('user'));

add.addEventListener('click', async () => {

    const response = await fetch(`http://localhost:5000/tasks/add/${userId.userId}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userId?.token}`
    },
    body: JSON.stringify({
        task: task.value,
        date: '2024-1-23',
        })
    });

    console.log('hello1');

    const response1 = await fetch(`http://localhost:5000/getTasks/${userId.userId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${userId?.token}`
        }
    });

    const data = await response1.json();
    console.log('Abot ba');
    console.log(data);
});

