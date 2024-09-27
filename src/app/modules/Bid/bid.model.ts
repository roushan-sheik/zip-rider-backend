/* eslint-disable no-useless-escape */
// models/Bid.ts
import mongoose, { Schema } from 'mongoose';
import { IBid } from './bid.interface';

const bidSchema: Schema<IBid> = new mongoose.Schema({
  rentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Rent', required: true },

  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bid',
    required: true,
  },
  bidAmount: { type: Number, required: true },
  bidStatus: {
    type: String,
    enum: ['accepted', 'pending', 'rejected'],
    default: 'pending',
  },
  driverLocation: { type: String, required: true },
});

export const Bid = mongoose.model<IBid>('Bid', bidSchema);
