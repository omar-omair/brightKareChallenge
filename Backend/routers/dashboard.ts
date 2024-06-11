import { Request, Response } from 'express';
import { z } from 'zod';

const router = require("express").Router();
const prisma = require("./../prismaClient")
const patientLookup = require("./../zod_schemas/patientLookup");



require("dotenv").config()

router.post('/', async (req: Request, res: Response) => {
    let validData = patientLookup.parse(req.body)

    let user = await prisma.patient.findUnique({
        where: {
            username: validData.username
        }
    })

    if (user) {
        let response = await prisma.patient.findUnique({
            where: {
                username: validData.username
            },
            select: {
                name: true,
                sex: true,
                dob: true,
                medications: true,
                phone_number: true,
                email: true
            }
        })

        res.status(200).json(response)
    }

    else {
        res.status(404).json({ error: "patient not found" })
    }



})

router.post('/history', async (req: Request, res: Response) => {
    let validData = patientLookup.parse(req.body)

    let user = await prisma.patient.findUnique({
        where: {
            username: validData.username
        }
    })

    if (user) {
        let response = await prisma.medical_history.findMany({
            where: {
                patientId: user.id,
            },
            select: {
                name: true,
                description: true,
                dob: true,
                medications: true,
                phone_number: true,
                email: true
            }
        })

        res.status(200).json(response)
    }

    else {
        res.status(404).json({ error: "patient not found" })
    }



})


module.exports = router
