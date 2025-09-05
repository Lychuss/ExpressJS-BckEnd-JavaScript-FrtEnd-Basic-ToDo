import  express, {json} from 'express';
import { router } from './Controller/routes.js';

const app = express();

app.use(json());
app.use('/', router);

app.listen(5000, () => {
    console.log('Server listening to port 5000');
})