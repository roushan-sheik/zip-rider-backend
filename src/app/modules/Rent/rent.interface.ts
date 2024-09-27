import { Types } from 'mongoose';

export interface IRent {
  user: Types.ObjectId;
  driver: Types.ObjectId;
  car: Types.ObjectId;
  rentStatus: 'pending' | 'ongoing' | 'completed';
  startingPoint: string;
  destination: string;
}
