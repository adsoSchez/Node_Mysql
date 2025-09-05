import { config } from "dotenv";
import mysql from 'mysql2/promise';

config()

export const PORT = process.env.PORT || 3000; 
export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT || 3306;

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
});

pool.getConnection()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch((err) => console.error('Error de conexión a la base de datos:', err));
