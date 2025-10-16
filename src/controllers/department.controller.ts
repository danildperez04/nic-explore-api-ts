import { NextFunction, Request, Response } from 'express';
import { departmentService } from '../services';

export class DepartmentController {
  findAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deps = await departmentService.findAll();
      res.json(deps);
    } catch (error) {
      next(error);
    }
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const dep = await departmentService.findOne(id);
      res.json(dep);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const file = req.file;
      const created = await departmentService.create(req.body, file);

      res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const updated = await departmentService.update(id, req.body);
      res.json(updated);
    } catch (error) {
      next(error);
    }
  };

  remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await departmentService.remove(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}

const defaultDepartmentController = new DepartmentController();
export default defaultDepartmentController;
