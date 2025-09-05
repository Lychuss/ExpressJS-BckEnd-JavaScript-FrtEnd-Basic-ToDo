import { Router } from 'express';
import { pool } from '/ExpressJS-ToDoList/BackEnd/Database/database.js';

export const router = Router();

router.get('/', (req, res) => {
    res.send('Hello to my page!');
});

router.post('/items/add', async (req, res) => {
    const {username, password} = req.body;
    const newTodo = await pool.query(
        "INSERT INTO users (username, password) VALUES ({$1}, {$2})",
        [username, password]
    );
    res.json(newTodo);
});

