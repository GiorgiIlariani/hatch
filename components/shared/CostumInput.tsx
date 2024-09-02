import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

import { Control, FieldPath, FormState } from "react-hook-form";
import { Values, z } from "zod";
import { authFormSchema } from "@/lib/validation";

const formSchema = authFormSchema("sign-up");

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  error: any;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  error,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col gap-2">
          <FormLabel className="text-sm font-normal text-black-1">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className={`input-class ${
                  error ? "border border-red-500" : "border-none"
                }`}
                type={
                  name === "password" || name === "confirmPassword"
                    ? "password"
                    : "text"
                }
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
