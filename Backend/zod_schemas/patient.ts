import { z } from 'zod'

const patientSchema = z.object({
    legal_id: z.string().length(10, { message: "ID must be 10 characters long" }),
    name: z.string().min(2),
    dob: z.string().datetime().refine(date => new Date(date) < new Date(), { // makes sure that the date is not in the future
        message: "Date must be in the past."
    }),
    sex: z.enum(["M", "F"]),
    username: z.string().min(3),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters long." })
        .max(18, { message: "Password must not exceed 18 characters." })
        .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()\.]).*$/, { message: "Password must contain at least one digit, one uppercase letter, and one special character." }),
    phone_number: z.string().regex(
        /^\+\d{1,3}\d{9}$/,
        { message: "Invalid phone number format. Phone number must start with a '+', followed by 1-3 digits for the country code and exactly 9 digits for the number." }
    ),
    email: z.string().email({ message: "Must be a valid email address" }),

})

module.exports = patientSchema
