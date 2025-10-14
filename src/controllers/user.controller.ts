import { NextFunction, Request, Response } from 'express';
import { userService } from '../services';

async function findAll(req: Request, res: Response, next: NextFunction) {
  //TODO: handle exception
  try {
    const users = await userService.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }

}

async function findOne() { }

async function create() { }

async function update() { }

async function remove() { }

export { findAll, findOne, create, update, remove };