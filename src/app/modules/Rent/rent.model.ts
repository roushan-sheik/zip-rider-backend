/* eslint-disable no-useless-escape */
// models/Rent.ts
import mongoose, { Schema } from 'mongoose';
import { IRent } from './rent.interface';

const rentSchema: Schema<IRent> = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  rentStatus: {
    type: String,
    enum: ['pending', 'ongoing', 'completed'],
    default: 'pending',
  },
  startingPoint: { type: String, required: true },
  destination: { type: String, required: true },
});

export const Rent = mongoose.model<IRent>('Rent', rentSchema);
