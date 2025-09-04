import routes from 'express';

export const router = routes();

router.get('/', (req, res) => {
    res.send('Hello to my page!');
});

router.post()
