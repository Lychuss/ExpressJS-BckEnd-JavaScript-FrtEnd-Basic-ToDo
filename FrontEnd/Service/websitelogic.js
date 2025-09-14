export async function addTasks(userId, token, task){
    const response = await fetch(`http://localhost:5000/tasks/add/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            task: task.value,
            date: '2024-1-23',
            })
        });;

    const data = await response.json();

    if(response.status === 200){
        return data;
    } 

    return response.status;
}

export async function getTasks(userId, token){ 
    const response1 = await fetch(`http://localhost:5000/getTasks/${userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

    const data = await response1.json();

    if(response1.status === 200){
        return data;
    }

    return response1.status;
}

export async function removeTask(userId, taskId, token){
    const response = await fetch(`http://localhost:5000/removeTasks/${userId}/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.status;
}

