/* eslint-disable no-unused-vars */
import Image from "next/image";

import { Control } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

import { IoIosClose } from "react-icons/io";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKILLS_INPUT = "skillsInput", // New type for handling skills input
  SKELETON = "skeleton",
}

interface CustomProps {
  error: any;
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>(field.value || []);

  const handleSkillInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      e.preventDefault(); // Prevent form submission or adding extra space
      setSkills((prevSkills) => [...prevSkills, skillInput.trim()]);
      setSkillInput("");
      field.onChange([...skills, skillInput.trim()]); // Update the field value
    }
  };

  const removeSkill = (skill: string) => {
    const updatedSkills = skills.filter((s) => s !== skill);
    setSkills(updatedSkills);
    field.onChange(updatedSkills); // Update the field value
  };

  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex flex-col gap-2">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              {...field}
              className={`input-class ${
                props.error ? "border border-red-500" : "border-none"
              }`}
              type={
                props.name === "password" || props.name === "confirmPassword"
                  ? "password"
                  : "text"
              }
              placeholder={props.placeholder}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className="input-class"
            disabled={props.disabled}
            rows={4}
          />
        </FormControl>
      );
    case FormFieldType.SKILLS_INPUT:
      return (
        <div className="flex flex-col gap-2">
          <FormControl>
            <Input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleSkillInput} // Capture "Enter" press
              placeholder={props.placeholder}
              className={`input-class ${props.error ? "border-red-500" : ""}`}
            />
          </FormControl>

          {/* Display added skills */}
          <div
            className={`flex flex-wrap gap-2 mt-2 ${
              skills.length === 0 && "hidden"
            }`}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#D6E4FF] py-1 px-3 border border-[#ADC9FE] flex items-center gap-2"
              >
                <p className="text-[#2e2e2e]">{skill}</p>
                <span
                  className="cursor-pointer text-[#5886DB]"
                  onClick={() => removeSkill(skill)}
                >
                  <IoIosClose />
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger
                className={`input-class ${
                  props.error ? "border border-red-500" : "border-none"
                }`}
              >
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="font-normal text-black text-base">
              {label}
            </FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className="form-message mt-2" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
