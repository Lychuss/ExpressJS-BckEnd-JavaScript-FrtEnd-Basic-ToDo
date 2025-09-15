import { pool } from '/ExpressJS-ToDoList/BackEnd/Database/database.js';

export async function duplicate(username, email){
    return await pool.query(
        `SELECT * FROM users WHERE username = $1
         OR users.email = $2`, [username, email]
    );
}    

export async function newUser(username, email, hashPass){
    return await pool.query(
        `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`,
        [username, email, hashPass]
    );
}

export async function user(username){
    return await pool.query(
        `SELECT * FROM users WHERE username = $1`,
        [username]
    );
}

export async function getUserId(username){
    return await pool.query(
        `SELECT users.user_id FROM users WHERE username = $1`,
        [username]
    );
}

export async function addItem(task, date, userId) {
    if(task === null) return;
    return await pool.query(
        `INSERT INTO tasks (tasks, date, user_id) VALUES ($1, $2, $3)`,
        [task, date, userId]
    );
}

export async function getTasks(userId){
    return await pool.query(
        `SELECT tasks.tasks, tasks.date, tasks.Id FROM tasks WHERE user_id = $1
         ORDER BY id DESC LIMIT 1;`, [ userId ]
    );
}

export async function removeTask(userId, taskId){
    return await pool.query(
        `DELETE FROM tasks WHERE user_id = $1 AND tasks.Id = $2;`, 
        [userId, taskId]
    );
}