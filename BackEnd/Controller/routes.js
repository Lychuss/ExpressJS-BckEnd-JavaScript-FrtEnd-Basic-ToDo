import { pool } from '/ExpressJS-ToDoList/BackEnd/Database/database.js';
import bcrypt from 'bcrypt';
import express from 'express';
import { createToken, authenticated } from '/ExpressJS-ToDoList/BackEnd/Middlewares/authentication.js';

export const router = express();

router.get('/', (req, res) => {
    res.send('Hello to my page!');
});

router.post('/auth/signup', async (req, res) => {
    const {username, password} = req.body;
    const bcryptPass = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, bcryptPass);
    console.log(hashPass);
    const newTodo = await pool.query(
        `INSERT INTO users (username, password) VALUES ($1, $2)`,
        [username, hashPass]
    );
    res.json(newTodo);
});

router.post('/auth/login', async (req, res) => {
    const {username, password} = req.body;

    //Query in the postgres to get the users
    const user = await pool.query(
        `SELECT users.username, users.password FROM users WHERE username = $1`,
        [username]
    );
    const foundUser = user.rows[0];
    console.log(foundUser.username);

    //Check if the query has found a user
    if(user.rowCount === 0){
        console.log('The username is incorrect!');
        return res.status(404).send('Incorrect username!');
    }

    /*
      A boolean checking if the password and the hash password
      is equal
    */
    const unhashPass = await bcrypt.compare(password, foundUser.password);

    if(!unhashPass) return res.status(404).send('Incorrect password!');

    const token = createToken(foundUser.username, password);

    return res.status(200).json({ token });
});

router.get('/protected/tasks', authenticated, async (req, res) => {
    res.status(200).send('Welcome');
});

router.post('/items/add', async (req, res) => {
    const {item_name, item_type, item_quantity} = req.body;
    const addItem = await pool.query(
        `INSERT INTO items (item_name, item_type, item_quantity) VALUES ($1, $2, $3)`,
        [item_name, item_type, item_quantity]
    );
    res.json(addItem);
});





