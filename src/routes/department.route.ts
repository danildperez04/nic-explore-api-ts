import { Router } from 'express';
import { departmentController } from '../controllers';
import { upload } from '../config/multer';
// import validateDto from '../middlewares/validate';
// If you create dtos for Department, import them here
// import { CreateDepartmentDto, UpdateDepartmentDto } from '../dtos/department.dto';

const router: Router = Router();

const { findAll, findOne, create, update, remove } = departmentController;

router.route('/')
  .get(findAll)
  .post(/* validateDto(CreateDepartmentDto)*/ upload.single('image'), create);

router.route('/:id')
  .get(findOne)
  .put(/* validateDto(UpdateDepartmentDto), */ update)
  .delete(remove);

export default router;
