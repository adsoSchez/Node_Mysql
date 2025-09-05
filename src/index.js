import app from './app.js';
import { PORT } from './config.js';
import express from 'express';

const router = express.Router();

router.get('/employees', (req, res) => {
    res.status(200).json({ message: 'Lista de empleados' });
});

app.use(router);

app.listen(PORT);
console.log('server running on port', PORT);