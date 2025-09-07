import jwt from 'jsonwebtoken';

const SECRET_KEY = 'cfc441f8ca1d0058aab81d8d6eaeb975267b06d6683a5e1026795cbf37fa6a7f';

export const createToken = (userUsername, userPassword) => {
    const payload = {username: userUsername, password: userPassword};

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});

    return token;
};



