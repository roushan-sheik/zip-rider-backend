import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RentService } from './rent.service';

const createRent = catchAsync(async (req, res) => {
  const result = await RentService.createRent(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Rent is created succesfully',
    data: result,
  });
});

const findRentById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RentService.findRentById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rent is retrieved succesfully',
    data: result,
  });
});

const getAllRents = catchAsync(async (req, res) => {
  const result = await RentService.getAllRents(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rents are retrieved succesfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateRentById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RentService.updateRentById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rent is updated succesfully',
    data: result,
  });
});

const deleteRentById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RentService.deleteRentById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rent is deleted succesfully',
    data: result && null,
  });
});

export const RentController = {
  createRent,
  findRentById,
  getAllRents,
  updateRentById,
  deleteRentById,
};
