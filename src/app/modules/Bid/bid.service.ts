import QueryBuilder from '../../builder/QueryBuilder';
import { Rent } from '../Rent/rent.model';
import { IBid } from './bid.interface';
import { Bid } from './bid.model';

const createBid = async (bid: IBid) => {
  return await Bid.create(bid);
};

const findBidById = async (bidId: string) => {
  return await Bid.findById(bidId);
};

const getAllBids = async (query: Record<string, unknown>) => {
  const bidQuery = new QueryBuilder(Bid.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await bidQuery.modelQuery;
  const metaData = await bidQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};

const updateBidById = async (bidId: string, payload: Partial<IBid>) => {
  const result = await Bid.findByIdAndUpdate({ _id: bidId }, payload, {
    new: true,
    runValidators: true,
  });
  if (result?.bidStatus === 'accepted') {
    const newResult = await Rent.findByIdAndUpdate(
      { _id: result.rentId },
      { rentStatus: 'ongoing' },
      {
        new: true,
        runValidators: true,
      },
    );
    return newResult
  }
  return result
};

const deleteBidById = async (bidId: string) => {
  const result = await Bid.findByIdAndDelete(bidId);
  return result;
};

export const BidService = {
  createBid,
  findBidById,
  getAllBids,
  updateBidById,
  deleteBidById,
};
