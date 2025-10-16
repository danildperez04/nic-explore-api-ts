import { Router } from 'express';
import placeController from '../controllers/place.controller';
import { upload } from '../config/multer';

const router: Router = Router();

router.route('/')
  .get(placeController.findAll)
  .post(placeController.create);

router.route('/:id')
  .get(placeController.findOne)
  .put(placeController.update)
  .delete(placeController.remove);

router.post('/detect', upload.single('image'), placeController.detectLandmark);

export default router;
