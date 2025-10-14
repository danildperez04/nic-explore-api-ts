import { Router } from 'express';
import { userController } from '../controllers';
import validateDto from '../middlewares/validate';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

const router: Router = Router();

const { findAll, findOne, create, update, remove } = userController;

router.route('/')
  .get(findAll)
  .post(validateDto(CreateUserDto), create);

router.route('/:id')
  .get(findOne)
  .put(validateDto(UpdateUserDto), update)
  .delete(remove);

export default router;