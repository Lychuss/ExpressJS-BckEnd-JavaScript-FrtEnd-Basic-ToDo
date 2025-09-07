import jwt from 'jsonwebtoken';

const SECRET_KEY = 'cfc441f8ca1d0058aab81d8d6eaeb975267b06d6683a5e1026795cbf37fa6a7f';

//Create a token for authentication
export const createToken = (userUsername, userPassword) => {
    const payload = {username: userUsername, password: userPassword};

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});

    return token;
};

export const authenticated = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader && bearerHeader.split(' ')[1];

    if(!token) return res.status(403).json('Not valid!');

    jwt.verify(token, SECRET_KEY, (err, decode) => {
        if(err) return res.status(403).json('Not valid!');
        req.user = decode;
        next();
    });
};

