import z from "zod";

export const loginSchema = z.object({
  email: z.email({
    message: "Enter a valid email address",
  }),

  password: z
    .string()
    .min(1, "Enter your password")
    .max(72, "Password cannot exceed 72 characters"),
});

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name cannot exceed 80 characters"),

  phone: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string()
      .trim()
      .regex(/^\+?[0-9]{8,15}$/, "Enter a valid phone number")
      .optional(),
  ),

  email: z.email({
    message: "Enter a valid email address",
  }),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(72, "Password cannot exceed 72 characters"),
});
