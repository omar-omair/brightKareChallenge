import { Request, Response, NextFunction, Express } from 'express';
import { PrismaClient } from '@prisma/client';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const prisma = new PrismaClient();
const router = express.Router();

const app: Express = express();
const port = process.env.PORT || "3000";

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.urlencoded({ extended: true }));
router.use("/auth", require("./routers/auth"));

app.use(router);

// Routes
app.get('/', async (req: Request, res: Response) => {
    let med = await prisma.medication.findMany()
    console.log(med)
    res.json(med)
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});