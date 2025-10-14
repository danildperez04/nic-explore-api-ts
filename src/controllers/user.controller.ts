import { Request, Response } from 'express';
import { userService } from '../services';

async function findAll(req: Request, res: Response) {
  //TODO: handle exception
  const users = await userService.findAll();

  res.json(users);
}

export { findAll };