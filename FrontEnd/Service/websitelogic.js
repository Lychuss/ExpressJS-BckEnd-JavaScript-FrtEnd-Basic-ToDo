export async function addTasks(userId){
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
        });;

    const data = await response.json();

    if(response.status === 200){
        return data;
    } 

    return response.status;
}

export async function getTasks(userId){ 
    const response1 = await fetch(`http://localhost:5000/getTasks/${userId.userId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${userId?.token}`
            }
        });

    const data = await response1.json();

    if(response1.status === 200){
        return data;
    }

    return response1.status;
}