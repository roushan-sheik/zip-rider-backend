import { z } from 'zod';

export const createCarValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    brand: z.string(),
    model: z.string(),
    image: z.string(),
    rating: z.number(),
    fuelType: z.enum(['Octane', 'Hybrid', 'Electric', 'Diesel', 'Petrol']),
    passengerCapacity: z.number().int(),
    color: z.string(),
    condition: z.enum(['New', 'Used']),
    rents: z.array(z.string()).optional(),
  }),
});

export const updateCarValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    image: z.string().optional(),
    rating: z.number().optional(),
    fuelType: z
      .enum(['Octane', 'Hybrid', 'Electric', 'Diesel', 'Petrol'])
      .optional(),
    passengerCapacity: z.number().int().optional(),
    color: z.string().optional(),
    condition: z.enum(['New', 'Used']).optional(),
    rents: z.array(z.string()).optional(),
  }),
});

export const CarValidations = {
  createCarValidationSchema,
  updateCarValidationSchema,
};
