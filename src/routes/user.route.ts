import { Router } from 'express';
import { userController } from '../controllers';

const router: Router = Router();

const { findAll, findOne, create, update, remove } = userController;

router.route('/')
  .get(findAll)
  .post(create);

router.route('/:id')
  .get(findOne)
  .put(update)
  .delete(remove);

export default router;