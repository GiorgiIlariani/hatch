import { z } from 'zod';


export const authFormSchema = (type: 'sign-in' | 'sign-up' | 'fill-up') => {
  return z.object({
    // Conditional fields based on type
    first_name: type === 'sign-in' || type === 'fill-up' ? z.string().optional() : z.string().min(3, { message: 'minimum 3 characters' }),
    last_name: type === 'sign-in' || type === 'fill-up' ? z.string().optional() : z.string().min(3, { message: 'minimum 3 characters' }),
    confirmPassword: type === 'sign-in' || type === 'fill-up' ? z.string().optional() : z.string(),
    
    // Common fields
    email: type === 'fill-up' ? z.string().optional() : z.string().email(),
    password:  type === 'fill-up' ? z.string().optional() : z.string().min(8),
    
    // Conditional fields based on type
    profession: type === 'sign-in' || type === "sign-up" ? z.string().optional() : z.string().min(3, { message: 'minimum 3 characters' }),
    description: type === 'sign-in' || type === "sign-up" ? z.string().optional() : z.string().min(3, { message: 'minimum 3 characters' }),
    skills: type === 'sign-in' || type === "sign-up"
      ? z.array(z.string().min(1, { message: 'Skill cannot be empty' })).optional()
      : z.array(z.string().min(1, { message: 'Skill cannot be empty' })).min(1, { message: 'At least one skill is required' }),
  });
};



export const dropStartupFormSchema = z.object({
  name: z.string().min(3, { message: 'minimum 3 characters'}),
  website: z.string().min(3, { message: 'minimum 3 characters'}),
  location: z.string(),
  industry: z.string(),
  employees:  z.string(), 
  description:  z.string().min(3, { message: 'minimum 3 characters'}), 
  agreement: z.boolean(),
});

