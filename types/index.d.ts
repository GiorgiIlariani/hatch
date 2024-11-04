declare interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
}

declare interface UserDetailsTypes {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

declare interface AuthFormProps {
  type: "sign-in" | "sign-up" | "fill-up";
}

declare interface registerUser {
  title: string;
  description: string;
  skills: string[];
}

declare type PaginationComponentProps = {
  count: number;
  page: number;
  setPag?: Dispatch<SetStateAction<number>>;
};
