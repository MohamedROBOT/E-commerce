"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginFormPayload, loginFormSchema } from "@/schemas/login.schema"
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation"





export default function LoginPage() {

const router = useRouter()



const form = useForm<LoginFormPayload>({
  resolver: zodResolver(loginFormSchema),defaultValues: {
    email: "",
    password: "",
  }} )

async function onSubmit (values:LoginFormPayload) {
try {
  const response = await signIn('credentials', {
    email: values.email,
    password: values.password,
    redirect: false,
    callbackUrl: "/"

  })


  if(response?.ok) {
    //home
     toast.success("Logged In", {
      duration: 3000,
      position: "top-center"
     })

     router.push('/')
  } else {
    //show error 
     toast.error(response?.error || "Something went wrong", {
      duration: 3000,
      position: "top-center"
     })

  }
} catch (error) {
  toast.error(error as string, {
    duration: 3000,
    position: "top-center"
   })
}
}
  return (
  <section className="py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-10">Login</h1>
        <Form  {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
            
              <FormMessage/>
            </FormItem>
          )}
        />
        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </div>
  </section>
  )
}
