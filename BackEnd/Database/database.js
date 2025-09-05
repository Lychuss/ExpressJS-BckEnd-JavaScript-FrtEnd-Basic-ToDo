import pkg  from 'pg';

const { Pool } = pkg;

export const pool = new Pool({
    user: 'postgres',
    password: 'Tokitoclaude0907@',
    host: 'localhost',
    port: 5432,
    database: 'Express-ToDo'
});

