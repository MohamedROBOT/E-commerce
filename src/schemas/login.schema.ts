import {z} from "zod"

export  const loginFormSchema = z.object({
  email: z.email({
    message: "Please enter a valid email address",
  }),
  password: z.string().nonempty({message: "Password is required"}).min(8, {message: "Password must be at least 8 characters"}),
})
export type LoginFormPayload = z.infer<typeof loginFormSchema>