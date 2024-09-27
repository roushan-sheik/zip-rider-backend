
export interface ICar {
  name: string;
  brand: string;
  model: string;
  image: string;
  rating: number;
  fuelType: 'Octane' | 'Hybrid' | 'Electric' | 'Diesel' | 'Petrol';
  passengerCapacity: number;
  color: string;
  condition: 'New' | 'Used';
}
