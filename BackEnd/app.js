import  express from 'express';
import { router } from './Controller/routes.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/', router);

app.listen(5000, () => {
    console.log('Server listening to port 5000');
})