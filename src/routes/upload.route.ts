import { Router } from 'express';
import { upload } from '../config/multer';
import { uploadController } from '../controllers';

const router: Router = Router();

router.post('/',
  upload.single('image'),
  uploadController.upload
);

export default router;