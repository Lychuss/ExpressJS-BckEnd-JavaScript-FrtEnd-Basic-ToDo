import * as logics from '/ExpressJS-ToDoList/BackEnd/Services/logics.js';
import bcrypt from 'bcrypt';
import express from 'express';
import { createToken, authenticated } from '/ExpressJS-ToDoList/BackEnd/Middlewares/authentication.js';


export const router = express();

router.get('/', (req, res) => {
    res.send('Hello to my page!');
});

router.post('/auth/signup', async (req, res) => {
    const {username, email, password} = req.body;

    const duplicate = await logics.duplicate(username, email);

    console.log(logics.duplicate(username, email));

    if(duplicate.rowCount != 0) return res.status(400).json({message: 'Username or email is already used!'});

    //Like its an encryption for hashing
    const bcryptPass = await bcrypt.genSalt(10);

    //It hash the password using the encrpytion which is 10
    const hashPass = await bcrypt.hash(password, bcryptPass);

    await logics.newUser(username, email, hashPass);
    
    res.status(200).json({message: 'Sign up successfully'});
    window.location.href = '/FrontEnd/Interface/login.html';
});

router.post('/auth/login', async (req, res) => {
    const {username, password} = req.body;

    //Query in the postgres to get the users
    const user = await logics.user(username);
    const foundUser = user.rows[0];

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
    const userId = foundUser.user_id;
    console.log(foundUser);

    return res.status(200).json({ token, userId });
});

router.get('/protected/tasks', authenticated, async (req, res) => {
    res.status(200).send('Welcome');
});

router.post('/tasks/:userId/add', async (req, res) => {
    const userId = req.params.userId;
    const {task, date} = req.body;
    const addItem = await logics.addItem(task, date, userId);
    res.json(addItem);
});





