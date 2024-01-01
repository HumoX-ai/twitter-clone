import * as z from "zod";
export const RegisterStep1Schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
});
export const RegisterStep2Schema = z.object({
  username: z.string().min(2, "Username is required"),
  password: z.string().min(6, "Password is required"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const userSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  bio: z.string().min(3),
  location: z.string().min(3),
});