import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    email: z.email({
      message: "Please enter a valid email address",
    }),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, { message: "Password must be at least 8 characters" }),
    rePassword: z
      .string()
      .nonempty("Password is required")
      .min(8, { message: "Password must be at least 8 characters" }),
    phone: z.string().nonempty({ message: "Phone is required" })
    .regex(/^(002|\+2)?01[0-2][0-9]{8}$/, {message: "Invalid egyptian phone number"})
  })
  .refine((data) => data.password === data.rePassword, {
    message: "password do not match",
    path: ["rePassword"],
  });
export type RegisterFormPayload = z.infer<typeof registerFormSchema>;


export const formState = {
  success: false,
  error: {},
  message: null,
};

export type formStateType = {
  success: boolean,
  error: {
    name?: string[],
    email?: string[],
    password?: string[],
    rePassword?: string[],
    phone?: string[]
  },
  message: string | null,
};