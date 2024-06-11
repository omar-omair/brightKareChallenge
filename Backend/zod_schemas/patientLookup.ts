import { z } from 'zod'

const patientLookup = z.object({

    username: z.string().min(3),
})

module.exports = patientLookup