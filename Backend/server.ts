import { Request, Response, NextFunction, Express } from 'express';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const prisma = require("./prismaClient")
const router = express.Router();

const app: Express = express();
const port = process.env.PORT || "3000";


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use("/auth", require("./routers/auth"));
router.use("/dashboard", require("./routers/dashboard"));


app.use(router);

// Routes
app.get('/', async (req: Request, res: Response) => { // for testing purposes
    let med = await prisma.patient.findMany()
    console.log(med)
    res.json(med)
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});