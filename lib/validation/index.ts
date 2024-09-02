import { z } from 'zod'

export const authFormSchema = (type: string) => z.object({
  // sign up
  first_name: type === 'sign-in' ? z.string().optional() : z.string().min(3, { message: 'minimum 3 characters'}),
  last_name: type === 'sign-in' ? z.string().optional() : z.string().min(3, { message: 'minimum 3 characters'}),
  confirmPassword: type === 'sign-in' ? z.string().optional() : z.string(),
  // confirmation: z.boolean(),
  // cv: type === 'sign-in' ? z.string().optional() : z.string(),

  // both
  email: z.string().email(),
  password: z.string().min(8),
})