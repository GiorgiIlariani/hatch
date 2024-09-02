"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { authFormSchema } from "@/lib/validation";
import CustomInput from "../shared/CostumInput";
import { CvUploader } from "../shared/CvUploader";
import { toast } from "react-toastify";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  const [register] = useRegisterMutation();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { first_name, last_name, email, password } = data;
    // setIsLoading(true);

    try {
      if (type === "sign-up") {
        register({
          username: "test username",
          first_name,
          last_name,
          email,
          password,
        })
          .unwrap()
          .then(() => {
            toast.success("Account has beed created successfully!");
            router.push("/sign-in");
          })
          .catch(() => {
            toast.error("Failed to register account");
          });
      }

      if (type === "sign-in") {
        login({ email, password, username: email })
          .unwrap()
          .then((response) => {
            typeof window !== "undefined" &&
              localStorage.setItem("access-token", response.access);
            typeof window !== "undefined" &&
              localStorage.setItem("refresh-token", response.refresh);
            dispatch(setAuth());
            toast.success("Logged in");
            router.push("/");
          })
          .catch(() => {
            toast.error("Failed to log in");
          });
      }
    } catch (error) {
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  };

  const error = form.formState.errors;

  return (
    <section className="w-full p-6 lg:p-20">
      <h1 className="text-4xl lg:text-[42px] font-bold text-black-1 mb-12">
        {type === "sign-in" ? "Log In" : "Sign Up"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {type === "sign-up" && (
            <div className="flex gap-4">
              <div className="flex-1">
                <CustomInput
                  control={form.control}
                  name="first_name"
                  label="First Name"
                  placeholder="Name"
                  error={error.first_name}
                />
              </div>
              <div className="flex-1">
                <CustomInput
                  control={form.control}
                  name="last_name"
                  label="Last Name"
                  placeholder="Last Name"
                  error={error.last_name}
                />
              </div>
            </div>
          )}
          <CustomInput
            control={form.control}
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            error={error.email}
          />

          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            error={error.password}
          />

          {type === "sign-up" && (
            <>
              <CustomInput
                control={form.control}
                name="confirmPassword"
                label="Confirm password"
                placeholder="Re-enter you password"
                error={error.password}
              />

              {/* <CvUploader /> */}
            </>
          )}

          <div className="w-full flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                // error.confirmation ? "text-red-500" : "text-black-1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                remember me
              </label>
            </div>

            <span className="text-sm text-[#0F62FE] font-normal hover:cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0F62FE] text-white py-4 font-medium text-base">
            {type === "sign-in" ? "Log In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <div className="w-full flex gap-4 my-12">
        <Button className="flex flex-1 items-center gap-4 border-2 border-[#0F62FE] bg-transparent hover:bg-transparent">
          <Image
            src="/assets/icons/auth-apple.svg"
            alt="google"
            width={20}
            height={20}
          />
          <p className="text-[#0F62FE] text-base font-medium">
            Log in with Apple
          </p>
        </Button>
        <Button className="flex flex-1 items-center gap-4 border-2 border-[#0F62FE] bg-transparent hover:bg-transparent">
          <Image
            src="/assets/icons/auth-google.svg"
            alt="google"
            width={20}
            height={20}
          />
          <p className="text-[#0F62FE] text-base font-medium">
            Log in with Google
          </p>
        </Button>
      </div>

      <Separator className="w-full border border-[#DDE1E6] my-12" />
      <footer className="flex gap-1">
        <p className="text-sm font-normal text-[#001D6C]">
          {type === "sign-in" ? "No account yet?" : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="text-[#0F62FE] text-sm">
          {type === "sign-in" ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
