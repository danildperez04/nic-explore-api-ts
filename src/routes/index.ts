import { Router } from 'express';
import userRouter from './user.route';
import authRouter from './auth.route';
import departmentRouter from './department.route';

const router: Router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/departments', departmentRouter);

export default router;