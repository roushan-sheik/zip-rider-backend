import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().optional(),
    role: z.enum(['admin', 'driver', 'customer']).optional(), // Updated to match schema
    img: z.string().optional(), // Updated to match schema
    rating: z.number().optional(), // Updated to match schema
    rents: z.array(z.string()).optional(), // Updated to match schema
  }),
});

export const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(), // Updated to match schema
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z.enum(['admin', 'driver', 'customer']).optional(), // Updated to match schema
    img: z.string().optional(), // Updated to match schema
    rating: z.number().optional(), // Updated to match schema
    rents: z.array(z.string()).optional(), // Updated to match schema
  }),
});

export const UserValidations = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
