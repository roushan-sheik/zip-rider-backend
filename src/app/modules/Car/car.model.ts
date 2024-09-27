/* eslint-disable no-useless-escape */
// models/Car.ts
import mongoose, { Schema } from 'mongoose';
import { ICar } from './car.interface';

const carSchema: Schema<ICar> = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  image: { type: String, required: true }, 
  rating: { type: Number, default: 0 },
  fuelType: {
    type: String,
    enum: ['Octane', 'Hybrid', 'Electric', 'Diesel', 'Petrol'],
    required: true,
  },
  passengerCapacity: { type: Number, required: true },
  color: { type: String, required: true },
  condition: { type: String, enum: ['New', 'Used'], required: true },
});

export const Car = mongoose.model<ICar>('Car', carSchema);
