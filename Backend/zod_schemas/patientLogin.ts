import { z } from 'zod'

const loginPatientSchema = z.object({
    username: z.string(),
    password: z.string()
})

module.exports = loginPatientSchema
