import { Router } from 'express';
import placeController from '../controllers/place.controller';

const router: Router = Router();

router.route('/')
  .get(placeController.findAll)
  .post(placeController.create);

router.route('/:id')
  .get(placeController.findOne)
  .put(placeController.update)
  .delete(placeController.remove);

export default router;
