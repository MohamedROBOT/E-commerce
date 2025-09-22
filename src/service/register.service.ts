"use server";

import { formStateType, registerFormSchema } from "@/schemas/register.schema";

export async function handleRegister(formState : formStateType, formData: FormData) : Promise<formStateType>{
  const formValues = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    rePassword: formData.get("rePassword"),
    phone: formData.get("phone"),
  };

  const parsedData = registerFormSchema.safeParse(formValues);

  if (!parsedData.success) {
    return {
      success: false,
      error: parsedData.error?.flatten().fieldErrors,
      message: null,
    }
  }

  
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //bec default request is text so the browser learns that it is json
        },
        body: JSON.stringify(formValues),
      }
    );

    const data = await response.json();
   
    if (!response.ok) {
      return {
        success: false,
        error: {},
        message: data.message,
      }
    }
    return {
      success: true,
      error: {},
      message: data.message,
    };
  } catch (error) {
  return {
    success: false,
    error: {
      name: [],
      email: [],
      password: [],
      rePassword: [],
      phone: []
    },
    message: (error as string)
  }
  }
}
