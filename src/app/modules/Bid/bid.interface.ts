import { Types } from 'mongoose';

export interface IBid {
  rentId: Types.ObjectId;
  driverId: Types.ObjectId;
  bidAmount: number;
  bidStatus: 'accepted' | 'pending' | 'rejected';
  driverLocation: string;
}
