import { z } from 'zod';
import { cowBreed, cowCategory, cowLabel, cowLocation } from './cow.constant';

const createCowZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required!' }),
    age: z.number({ required_error: 'Age is required!' }),
    price: z.number({ required_error: 'Price is required!' }),
    weight: z.number({ required_error: 'Weight is required!' }),
    location: z.enum([...cowLocation] as [string, ...string[]], {
      required_error: 'Location is required',
    }),
    breed: z.enum([...cowBreed] as [string, ...string[]], {
      required_error: 'Breed is required',
    }),
    label: z.enum([...cowLabel] as [string, ...string[]], {
      required_error: 'Label is required',
    }),
    category: z.enum([...cowCategory] as [string, ...string[]], {
      required_error: 'Category is required',
    }),
    seller: z.string({ required_error: 'Seller is required!' }),
  }),
});

const updateCowZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    age: z.number().optional(),
    price: z.number().optional(),
    weight: z.number().optional(),
    location: z.enum([...cowLocation] as [string, ...string[]]).optional(),
    breed: z.enum([...cowBreed] as [string, ...string[]]).optional(),
    label: z.enum([...cowLabel] as [string, ...string[]]).optional(),
    category: z.enum([...cowCategory] as [string, ...string[]]).optional(),
    seller: z.string().optional(),
  }),
});

export const CowValidation = {
  createCowZodSchema,
  updateCowZodSchema,
};
