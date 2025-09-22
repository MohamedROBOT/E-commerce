import { z } from "zod";

export const addressFormSchema = z.object({
  cartId: z
    .string()
    .nonempty("cartId is required"),
   
  details: z
    .string()
    .nonempty("Address is required")
    .min(3, "Address must be at least 3 characters long"),
  city: z
    .string()
    .nonempty("City is required")
    .min(3, "Address must be at least 3 characters long"),

  phone: z
    .string()
    .nonempty({ message: "Phone is required" })
    .regex(/^(002|\+2)?01[0-2][0-9]{8}$/, {
      message: "Invalid egyptian phone number",
    }),

    paymentMethod: z.enum( ["cash", "card"], {
      message: "Payment method is required",
    }  ),

    

});

export type addressFormType = z.infer<typeof addressFormSchema>;

export const addressFormState = {
  success: false,
  error: {
    details: [],
    city: [],
    phone: [],
    cartId: [],
    paymentMethod: [],
  },
  message: null,
  callbackUrl: "",   // must be string, not []
};
export type addressFormStateType = {
  success: boolean;
  error: {
    details?: string[];
    city?: string[];
    phone?: string[];
    cartId?: string[]
    paymentMethod?: string[]
    
  };
  message: string | null;
  callbackUrl?: string;
  paymentMethod?: string

  
};
