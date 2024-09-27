import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CarController } from './car.controller';
import {
  createCarValidationSchema,
  updateCarValidationSchema,
} from './car.validation';

const router = express.Router();

router.post(
  '/',
  // auth(USER_ROLE.admin),
  validateRequest(createCarValidationSchema),
  CarController.createCar,
);

router.get('/', CarController.getAllCars);

router.get('/:id', CarController.findCarById);

router.patch(
  '/:id',
  // auth(USER_ROLE.admin),
  validateRequest(updateCarValidationSchema),
  CarController.updateCarById,
);

router.delete(
  '/:id',
  // auth(USER_ROLE.admin),
  CarController.deleteCarById,
);

export const CarRoutes = router;
