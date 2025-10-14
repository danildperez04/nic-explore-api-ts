import { Router } from 'express';
import { userController } from '../controllers';

const router: Router = Router();

const { findAll } = userController;

router.route('/')
  .get(findAll);

export default router;