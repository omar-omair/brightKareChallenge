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
                phone_number: true,
                email: true,

                barriers: {
                    select: {
                        barrier_name: true,
                    }
                },
                diseases: {
                    select: {
                        disease_name: true,
                    }
                },

                history: {
                    select: {
                        history_name: true,
                        description: true
                    }
                },
                mesaurements: {
                    select: {
                        measurement_on: true,
                        measaurement_type: true,
                        measaurement_unit: true,
                        measurement_value: true,

                    }
                },
                medications: {
                    select: {
                        medication: {
                            select: {
                                medication_name: true,
                            }
                        },
                        status: true,
                        frequency: true,
                        dosage: true,
                        prescribing_physician: {
                            select: {
                                name: true
                            }
                        },
                        start_date: true,
                        end_date: true
                    }
                },
            }
        })

        res.status(200).json(response)
    }

    else {
        res.status(404).json({ error: "patient not found" })
    }



})




module.exports = router
