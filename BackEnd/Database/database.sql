CREATE DATABASE Express-ToDO;

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE items (
    id BIGSERIAL PRIMARY KEY,
    item_name VARCHAR NOT NULL,
    item_type VARCHAR NOT NULL,
    item_quantity int NOT NULL
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
