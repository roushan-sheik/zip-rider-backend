import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BidController } from './bid.controller';
import {
  createBidValidationSchema,
  updateBidValidationSchema,
} from './bid.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.driver),
  validateRequest(createBidValidationSchema),
  BidController.createBid,
);

router.get(
  '/',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.driver),
  BidController.getAllBids,
);

router.get(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.driver),
  BidController.findBidById,
);

router.patch(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.user, USER_ROLE.driver),
  validateRequest(updateBidValidationSchema),
  BidController.updateBidById,
);

router.delete(
  '/:id',
  auth(USER_ROLE.admin, USER_ROLE.driver),
  BidController.deleteBidById,
);

export const BidRoutes = router;
