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

export async function addItem(task, date, userId) {
    return await pool.query(
        `INSERT INTO items (task, date, user_id) VALUES ($1, $2, $3)`,
        [task, date, userId]
    );
}
