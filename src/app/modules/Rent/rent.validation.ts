import { z } from 'zod';

export const createRentValidationSchema = z.object({
  body: z.object({
    user: z.string(), // Assuming user is represented by a string (e.g., user ID)// Assuming driver is represented by a string (e.g., driver ID)
    car: z.string(), // Assuming car is represented by a string (e.g., car ID)
    startingPoint: z.string(),
    destination: z.string(),
  }),
});

export const updateRentValidationSchema = z.object({
  body: z.object({
    user: z.string().optional(),
    driver: z.string().optional(),
    car: z.string().optional(),
    rentStatus: z.enum(['pending', 'ongoing', 'completed']).optional(),
    startingPoint: z.string().optional(),
    destination: z.string().optional(),
  }),
});

export const RentValidations = {
  createRentValidationSchema,
  updateRentValidationSchema,
};
