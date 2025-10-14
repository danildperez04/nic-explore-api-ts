import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'User route is working' });
});

router.post('/profile', (req, res) => {
  // profile logic
});

export default router;