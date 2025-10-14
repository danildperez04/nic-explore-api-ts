import { NextFunction, Request, Response } from 'express';
import { userService } from '../services';

export class UserController {
  constructor(private service = userService) { }

  // Using arrow functions because of `this`
  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.service.findAll();
      res.json(users);
    } catch (error) {
      next(error);
    }
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const user = await this.service.findOne(id);

      res.json(user);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const created = await this.service.create(userData);

      res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const userData = req.body;
      const updated = await this.service.update(id, userData);

      res.json(updated);
    } catch (error) {
      next(error);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await this.service.remove(id);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}

const defaultUserController = new UserController();
export default defaultUserController;