import { User } from '../entities/user.entity';
import { dataSource } from '../config/database';

const userRepository = dataSource.getRepository(User);

async function findAll() {
  const users = await userRepository.find({});

  return users;
}

export { findAll };