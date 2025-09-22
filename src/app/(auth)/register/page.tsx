"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { formState } from "@/schemas/register.schema"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {
  RegisterFormPayload,
  registerFormSchema,
} from "@/schemas/register.schema";
import { handleRegister } from "@/service/register.service";
import { useActionState, useEffect } from "react";


export default function RegisterPage() {
  const [action, setAction] = useActionState(handleRegister, 
    formState,
  );
  const router = useRouter();

  const form = useForm<RegisterFormPayload>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });


  useEffect(() => {
    if (action) {
      if (!action.success && action.message) {
        toast.error(action.message, { duration: 3000, position: "top-center" });

      }

      if (action.success && action.message) {
        toast.success(action.message, {
          duration: 3000,
          position: "top-center",
        });

        router.push("/login");
      }
    }
  }, [action, router]);

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-10">Login</h1>
        <Form {...form}>
          <form action={setAction} className="space-y-8">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>

                  <FormMessage> {action.error?.name?.[0] } </FormMessage>
                </FormItem>
              )}
            />
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage> {action.error?.email?.[0]} </FormMessage>
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
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>

                  <FormMessage> {action.error?.password?.[0]} </FormMessage>
                </FormItem>
              )}
            />
            {/* rePassword Field */}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>

                  <FormMessage> {action.error?.rePassword?.[0]} </FormMessage>
                </FormItem>
              )}
            />
            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+201234567890" {...field} />
                  </FormControl>

                  <FormMessage> {action.error?.phone?.[0]} </FormMessage>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
