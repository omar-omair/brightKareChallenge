import { Request, Response } from 'express';
import { z } from 'zod';

const jwt = require("jwt-simple");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const prisma = require("./../prismaClient")
const bodyParser = require("body-parser");
const patientSchema = require("./../zod_schemas/patient");
const loginPatientSchema = require("./../zod_schemas/patientLogin")

require("dotenv").config()


// For encoding/decoding JWT
const secret = process.env.secret || "DummySecret";

router.post("/register", async (req: Request, res: Response) => {
    if (req.body != null) {
        try {
            let validData = patientSchema.parse(req.body)
            let user = await prisma.patient.findFirst({
                where: {
                    OR: [{ username: validData.username }, { email: validData.email }, { legal_id: validData.legal_id }]
                }
            })

            if (user) {
                res.status(406).json({ error: "User with this email or username or id exists" })
            }

            let hashedPassword: String = await bcrypt.hash(validData.password, 10)

            validData.password = hashedPassword

            let newUser = await prisma.patient.create({
                data: validData

            })

            const token = jwt.encode({ username: validData.username, ex: Math.floor(Date.now() / 1000) + 1800 }, secret); // create token with expiration date of 30mins
            res.status(200).json({ token: token }) // returning the token

        }
        catch (err) {
            if (err instanceof z.ZodError) {
                res.status(400).json(err)
            }
            else {
                console.log(err)
                res.status(500).json({ error: "Something went wrong" })
            }
        }

    }
    else {
        res.status(400).json({ error: "Empty body" })
    }
})

// Sends a token when given valid username/password
router.post("/login", async function (req: Request, res: Response) {
    // check if body is not empty
    if (req.body != null) {
        // check if the data is correct using zod schema
        try {
            let validData = loginPatientSchema.parse(req.body)
        }
        catch (err) {
            if (err instanceof z.ZodError) {
                res.status(400).json(err)
            }
            else {
                console.log(err)
                res.status(500).json({ error: "Something went wrong" })
            }
        }

        // Get user from the database
        let user = await prisma.patient.findUnique({
            where: {
                username: req.body.username,
            }
        })

        //check if the user exists and that the password after hashing matches
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.encode({ username: user.username, ex: Math.floor(Date.now() / 1000) + 1800 }, secret); // create token with expiration date of 30mins
            res.status(200).json({ token: token }) // returning the token
        }

        else {
            res.status(401).json({ error: "Invalid username/password" })
        }

    }

    else {
        res.status(400).json({
            error:
                "Missing body"
        });
    }

});

//Gets the name of the patient when given the correct token

router.get("/status", async function (req: Request, res: Response) {

    // Check if the X-Auth header is set
    if (!req.headers["x-auth"]) {
        return res.status(401).json({ error: "Missing X-Auth header" });
    }

    // X-Auth should contain the token 
    const token = req.headers["x-auth"];
    try {
        const decoded = jwt.decode(token, secret);
        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp <= now) {
            throw new Error('Token has expired');
        }

        let user = await prisma.patient.findUnique({
            where: {
                username: decoded.username
            },
            select: {
                name: true
            }
        })

    }
    catch (ex) {
        res.status(401).json({ error: ex || "Invalid JWT" });
    }
});



module.exports = router;