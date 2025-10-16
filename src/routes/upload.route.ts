import { Request, Response, Router } from 'express';
import { upload } from '../config/multer';

const router: Router = Router();

router.post('/',
  upload.single('image'),
  (req: Request, res: Response) => {
    const file = req['file'];

    res.json({ url: `/uploads/${file?.filename}` });
  }
);

export default router;