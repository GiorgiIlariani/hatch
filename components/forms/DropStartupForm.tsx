"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { dropStartupFormSchema } from "@/lib/validation";
import CustomFormField, { FormFieldType } from "../shared/CostumFormField";
// import FileUploader from "../shared/FileUploader";

const DropStartupForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof dropStartupFormSchema>>({
    resolver: zodResolver(dropStartupFormSchema),
    defaultValues: {
      logo: "",
      name: "",
      website: "",
      location: "",
      industry: "",
      employees: "",
      description: "",
      agreement: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof dropStartupFormSchema>) => {
    console.log({ data });
  };

  const error = form.formState.errors;

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* <FileUploader /> */}
            {/* NAME */}
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Name"
              placeholder="Name"
              error={error.name}
            />

            {/* WEBSITE */}
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="website"
              label="Website"
              placeholder="https://example.com"
              error={error.website}
            />

            {/* LOCATION */}
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="location"
              label="Location"
              placeholder="Tbilisi"
              error={error.location}
            />

            {/* INDUSTRY */}
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="industry"
              label="Industry"
              placeholder="Choose Industry"
              error={error.industry}
            />

            {/* INDUSTRY */}
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="employees"
              label="Employees"
              placeholder="Choose Employee Range"
              error={error.industry}
            />

            {/* DESCRIPTION */}
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="description"
              label="Description"
              placeholder="Write about your Startup"
              error={error.description}
            />

            {/* CONFIRMATION */}
            <CustomFormField
              fieldType={FormFieldType.CHECKBOX}
              control={form.control}
              name="agreement"
              label="I agree to the Terms and Conditions"
              error={error.agreement}
            />

            <div className="w-full flex justify-end">
              <Button type="submit" className="text-white">
                Publish
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default DropStartupForm;
