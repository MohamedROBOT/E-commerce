"use server";
import { getUserToken } from "@/lib/server-utils";
import {
  addressFormSchema,
addressFormStateType,

} from "@/schemas/address.schema.";

export async function handlePayment(
  formState: addressFormStateType,
  formData: FormData
) : Promise<addressFormStateType> {
  const shippingAddress = {
    details: formData.get("details"),
    city: formData.get("city"),
    phone: formData.get("phone"),
  };
  const cartId = formData.get("cartId");
  const paymentMethod = formData.get("paymentMethod");

  const parsedData = addressFormSchema.safeParse({
    ...shippingAddress,
    cartId,
    paymentMethod
  });

  if (!parsedData.success) {
    return {
      success: false,
      error: parsedData.error?.flatten().fieldErrors, //zod errors
      message: null,
      callbackUrl: '/cart',
    };
  }
  try {
    const token = await getUserToken();
    const endpoint = paymentMethod==="cash"? `api/v1/orders/${cartId}` 
    : `api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}` 


    const response = await fetch(
      `${process.env.API_BASE_URL}${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token as string,
        },
        body: JSON.stringify({ shippingAddress }),
      }
    );
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        error: {},
        message: data.message || "Failed to place order",
        callbackUrl: '/cart',
              paymentMethod: (paymentMethod as string)

      };
    }

    return {
      success: true,
      error: {},
      message: data.message || "Order placed successfully",
      callbackUrl: paymentMethod === 'cash' ? '/allorders' : data.session.url,
      paymentMethod: (paymentMethod as string)
    };
  } catch (error) {
    return {
      success: false,
      error: {},
      message: (error as string) || "Failed to place order",
    };
  }
}
