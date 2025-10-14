import { userRepository } from '../repositories';

async function findAll() {
  const users = await userRepository.findAll();

  if (!users || users.length === 0) {
    throw new Error('No users found');
  }

  return users;
}

async function findOne(_id: number) { }

async function create(_userData: Partial<any>) { }

async function update(_id: number, _userData: Partial<any>) { }

async function remove(_id: number) { }

export { findAll, findOne, create, update, remove };