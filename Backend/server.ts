import { Request, Response, NextFunction, Express } from 'express';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');



const app: Express = express();
const port = process.env.PORT || "3000";

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.post('/api/example', (req: Request, res: Response) => {
    const { data } = req.body;
    console.log('Received data:', data);
    res.status(201).json({ message: 'Data received successfully' });
});

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});