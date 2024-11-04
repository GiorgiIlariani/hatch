"use client";

import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { authFormSchema } from "@/lib/validation";
import { CvUploader } from "../shared/CvUploader";
import { toast } from "react-toastify";
import {
  useLoginMutation,
  useRegisterMutation,
} from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";
import CustomFormField, { FormFieldType } from "../shared/CostumFormField";
import { FaArrowRight } from "react-icons/fa";
import { registerUser } from "@/lib/actions/user-actions";
import { useState } from "react";

const remembered_email =
  typeof window !== "undefined" && localStorage.getItem("remembered_email");
const remembered_password =
  typeof window !== "undefined" && localStorage.getItem("remembered_password");

const AuthForm = ({ type }: AuthFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(
    remembered_email && remembered_password ? true : false
  );
  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const formSchema = authFormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: remembered_email || "",
      password: remembered_password || "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true); // Start loading state

    const {
      first_name,
      last_name,
      email,
      password,
      profession = "",
      skills = [],
      description = "",
    } = data;

    try {
      if (type === "sign-up") {
        await register({
          // username,
          first_name,
          last_name,
          email,
          password,
        }).unwrap();

        toast.success("Account has been created successfully!");
        router.push("/fill-up");
      }

      if (type === "sign-in") {
        const response = await login({
          email,
          password,
          username: email,
        }).unwrap();

        console.log(response);

        if (rememberMe === true && response.access) {
          typeof window !== "undefined" &&
            localStorage.setItem("remembered_email", String(email));
          typeof window !== "undefined" &&
            localStorage.setItem("remembered_password", String(password));
        }

        typeof window !== "undefined" &&
          localStorage.setItem("access-token", response.access);
        typeof window !== "undefined" &&
          localStorage.setItem("refresh-token", response.refresh);
        dispatch(setAuth());
        toast.success("Logged in");
        router.push("/");
      }

      if (type === "fill-up") {
        const response = await registerUser({
          title: profession,
          description,
          skills,
        });

        console.log({ response });
        // if (response) router.push("/sign-in");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); // End loading state
    }
  };

  const error = form.formState.errors;

  return (
    <section className="w-full p-3 sm:p-6 lg:p-20">
      <h1 className="text-4xl lg:text-[42px] font-bold text-black-1 mb-12">
        {type === "sign-in"
          ? "Log In"
          : type === "sign-up"
          ? "Sign Up"
          : "Fill Up"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* ADDS BECAUSE OF SIGN UP */}
          {type === "sign-up" && (
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="first_name"
                  label="First Name"
                  placeholder="First Name"
                  error={error.first_name}
                />
              </div>
              <div className="flex-1">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="last_name"
                  label="Last Name"
                  placeholder="Last Name"
                  error={error.last_name}
                />
              </div>
            </div>
          )}

          {type === "sign-in" || type === "sign-up" ? (
            <div className="flex flex-col gap-4">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                label="Email Address"
                placeholder="Enter your email"
                error={error.email}
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                error={error.password}
              />
            </div>
          ) : null}

          {/* ADDS BECAUSE OF SIGN UP */}
          {type === "sign-up" && (
            <>
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm your password"
                error={error.confirmPassword}
              />

              {/* <CvUploader /> */}
            </>
          )}

          {type === "sign-in" && (
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  onCheckedChange={() => setRememberMe(!rememberMe)}
                  checked={
                    Boolean(remembered_email) ||
                    (false && Boolean(remembered_password)) ||
                    false ||
                    rememberMe
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  remember me
                </label>
              </div>

              <span className="text-sm text-[#0F62FE] font-normal hover:cursor-pointer">
                Forgot Password?
              </span>
            </div>
          )}

          {/* IF TYPE IS FILL UP */}
          {type === "fill-up" && (
            <div className="flex flex-col gap-4">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="profession"
                label="Profession"
                placeholder="Developer, Designer etc."
                error={error.profession}
              />

              <CustomFormField
                fieldType={FormFieldType.SKILLS_INPUT}
                control={form.control}
                name="skills"
                label="Skills"
                placeholder="Write your skill and tap enter"
                error={error.skills}
              />

              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="description"
                label="Description"
                placeholder="Tell us about you"
                error={error.description}
              />
            </div>
          )}

          <Button
            type="submit"
            className={`w-full py-4 font-medium text-base ${
              isLoading ? "bg-gray-400" : "bg-[#0F62FE] text-white"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              "Loading..."
            ) : type === "sign-in" ? (
              "Log In"
            ) : type === "sign-up" ? (
              <div className="flex items-center gap-2">Continue</div>
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </Form>
      {type === "sign-up" && (
        <p className="text-sm text-[#A3C3FF] mt-8 mb-12 text-center">
          Almost there! Just one more page to go.
        </p>
      )}
      <Separator className="w-full border border-[#DDE1E6] my-12" />

      {type === "sign-in" || type === "sign-up" ? (
        <footer className="flex gap-1">
          <p className="text-sm font-normal text-[#001D6C]">
            {type === "sign-in"
              ? "No account yet?"
              : "Already have an account?"}
          </p>
          <Link
            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            className="text-[#0F62FE] text-sm"
          >
            {type === "sign-in" ? "Sign Up" : "Sign In"}
          </Link>
        </footer>
      ) : (
        <Link
          href="/"
          className="text-[#0F62FE] text-base font-semibold underline text-center w-full flex justify-center"
        >
          Skip For Later
        </Link>
      )}
    </section>
  );
};

export default AuthForm;
