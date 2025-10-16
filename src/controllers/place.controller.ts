import { Request, Response, NextFunction } from 'express';
import placeService from '../services/place.service';

export class PlaceController {
  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const places = await placeService.findAll();
      res.json(places);
    } catch (err) {
      next(err);
    }
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const place = await placeService.findOne(id);
      res.json(place);
    } catch (err) {
      next(err);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto = req.body;
      const created = await placeService.create(dto);
      res.status(201).json(created);
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const dto = req.body;
      const updated = await placeService.update(id, dto);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await placeService.remove(id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  detectLandmark = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const file = req.file;

      const result = await placeService.detectLandmark(file);

      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  };
}

const defaultPlaceController = new PlaceController();
export default defaultPlaceController;
