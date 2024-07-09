import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "User name must be at least 2 characters")
  .max(20, "User name must not be more than 20 characters")
  .regex(/^[0-9a-zA-Z_]+$/, "User name must not contain special characters");

export const signUpSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be of atlease 6 characters" }),
});
