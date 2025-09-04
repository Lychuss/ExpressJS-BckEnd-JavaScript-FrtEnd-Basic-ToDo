import express from 'express';
import { router } from './Controller/routes.js';

const app = express();

app.use('/', router);

app.listen(5000, () => {
    console.log('Server listening to port 5000');
})