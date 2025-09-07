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


