import { Request, Response } from 'express';

const jwt = require("jwt-simple");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const prisma = require("./../prismaClient")
const bodyParser = require("body-parser");

require("dotenv").config()


// For encoding/decoding JWT
const secret = process.env.secret || "DummySecret";

router.post("/register", async (req: Request, res: Response) => {
    if (req.body != null) {

        // checking if a user with the provided username or email already exists
        if (req.body.username && req.body.email && req.body.legal_id) {
            let user = await prisma.patient.findFirst({
                where: {
                    OR: [{ username: req.body.username }, { email: req.body.email }, { legal_id: req.body.legal_id }]
                }
            })

            if (user) {
                res.status(406).json({ error: "User with this email or username or id exists" })
            }

            else if (req.body.name && req.body.dob && req.body.sex && req.body.password && req.body.phone_number) {
                try {
                    let hashedPassword = await bcrypt.hash(req.body.password, 10)
                    let user = await prisma.patient.create({
                        data: {
                            legal_id: req.body.legal_id,
                            name: req.body.name,
                            dob: req.body.dob,
                            sex: req.body.sex,
                            phone_number: req.body.phone_number,
                            username: req.body.username,
                            email: req.body.email,
                            password: hashedPassword
                        }

                    })

                    const token = jwt.encode({ username: req.body.username, ex: Math.floor(Date.now() / 1000) + 1800 }, secret); // create token with expiration date of 30mins
                    res.status(200).json({ token: token }) // returning the token

                }
                catch (ex) {
                    res.status(500).json({ error: ex })
                }

            }

            else {
                res.status(400).json({ error: "Some info are missing" })
            }

        }

        else {
            res.status(400).json({ error: "Email and/or Username are not present " })
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
        // check if the username and password are present
        if (!req.body.username || !req.body.password) {
            res.status(401).json({
                error:
                    "Missing username and/or password"
            });
            return;
        }

        // Get user from the database
        let user = await prisma.patient.findUnique({
            where: {
                username: req.body.username,
            }
        })

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.encode({ username: user.username, ex: Math.floor(Date.now() / 1000) + 1800 }, secret); // create token with expiration date of 30mins
            res.status(200).json({ token: token }) // returning the token
        }

        else {
            res.status(401).json({ error: "Invalid username/password" })
        }

    }

    else {
        res.status(401).json({
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