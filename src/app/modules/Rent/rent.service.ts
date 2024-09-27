import QueryBuilder from '../../builder/QueryBuilder';
import { IRent } from './rent.interface';
import { Rent } from './rent.model';

const createRent = async (rent: IRent) => {
  return await Rent.create(rent);
};

const findRentById = async (rentId: string) => {
  return await Rent.findById(rentId);
};

const getAllRents = async (query: Record<string, unknown>) => {
  const rentQuery = new QueryBuilder(Rent.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await rentQuery.modelQuery;
  const metaData = await rentQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};

const updateRentById = async (rentId: string, payload: Partial<IRent>) => {
  const result = await Rent.findByIdAndUpdate({ _id: rentId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteRentById = async (rentId: string) => {
  const result = await Rent.findByIdAndDelete(rentId);
  return result;
};

export const RentService = {
  createRent,
  findRentById,
  getAllRents,
  updateRentById,
  deleteRentById,
};
