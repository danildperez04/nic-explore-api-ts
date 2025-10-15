import { Router } from 'express';
import authController from '../controllers/auth.controller';
import validateDto from '../middlewares/validate';
import { CreateUserDto } from '../dtos/user.dto';
import LoginDto from '../dtos/auth.dto';

const router: Router = Router();

router.post('/login', validateDto(CreateUserDto), authController.login);

router.post('/register', validateDto(LoginDto), authController.register);

router.post('/activate', (req, res) => {
  // activate logic - TODO
  res.status(204).send();
});

export default router;
