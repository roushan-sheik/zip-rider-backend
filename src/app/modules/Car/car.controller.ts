import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CarService } from './car.service';

const createCar = catchAsync(async (req, res) => {
  const result = await CarService.createCar(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Car is created succesfully',
    data: result,
  });
});

const findCarById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarService.findCarById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car is retrieved succesfully',
    data: result,
  });
});

const getAllCars = catchAsync(async (req, res) => {
  const result = await CarService.getAllCars(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cars are retrieved succesfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateCarById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarService.updateCarById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car is updated succesfully',
    data: result,
  });
});

const deleteCarById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarService.deleteCarById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Car is deleted succesfully',
    data: result && null,
  });
});

export const CarController = {
  createCar,
  findCarById,
  getAllCars,
  updateCarById,
  deleteCarById,
};
