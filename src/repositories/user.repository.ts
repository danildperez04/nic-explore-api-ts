import { User } from '../entities/user.entity';
import { dataSource } from '../config/database';

const userRepository = dataSource.getRepository(User);

async function findAll() {
  const users = await userRepository.find({});

  return users;
}

async function findOne(id: number) {
  const user = await userRepository.findOneBy({ id });

  return user;
}

async function create(_userData: Partial<User>) { }

async function update(_id: number, _userData: Partial<User>) { }

async function remove(_id: number) { }

export { findAll, findOne, create, update, remove };