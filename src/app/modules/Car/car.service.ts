import QueryBuilder from '../../builder/QueryBuilder';
import { CarSearchableFields } from './car.constant';
import { ICar } from './car.interface';
import { Car } from './car.model';

const createCar = async (car: ICar) => {
  return await Car.create(car);
};

const findCarById = async (carId: string) => {
  return await Car.findById(carId);
};

const getAllCars = async (query: Record<string, unknown>) => {
  const carQuery = new QueryBuilder(Car.find(), query)
    .search(CarSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await carQuery.modelQuery;
  const metaData = await carQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};

const updateCarById = async (carId: string, payload: Partial<ICar>) => {
  const result = await Car.findByIdAndUpdate({ _id: carId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteCarById = async (carId: string) => {
  const result = await Car.findByIdAndDelete(carId);
  return result;
};

export const CarService = {
  createCar,
  findCarById,
  getAllCars,
  updateCarById,
  deleteCarById,
};
