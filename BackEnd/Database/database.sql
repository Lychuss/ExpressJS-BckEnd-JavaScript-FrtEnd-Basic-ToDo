CREATE DATABASE Express-ToDO;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    tasks VARCHAR NOT NULL,
    date DATE NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

SELECT * FROM users WHERE username = username
OR users.email = email;

INSERT INTO items (
    item_name, 
    item_type, 
    item_quantity
)
 VALUES (item_name, item_type, item_quantity);
 
INSERT INTO users (
    username,
    email, 
    password
) 
 VALUES (username, email, password);

SELECT users.username, users.password FROM users 
WHERE username = username;
