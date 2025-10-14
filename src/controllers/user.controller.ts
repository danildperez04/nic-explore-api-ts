import { Request, Response } from 'express';
import { userService } from '../services';

async function findAll(req: Request, res: Response) {
  //TODO: handle exception
  const users = await userService.findAll();

  res.json(users);
}

async function findOne() { }

async function create() { }

async function update() { }

async function remove() { }

export { findAll, findOne, create, update, remove };