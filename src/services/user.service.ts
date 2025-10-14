import { userRepository } from '../repositories';

async function findAll() {
  const users = await userRepository.findAll();

  if (!users || users.length === 0) {
    throw new Error('No users found');
  }

  return users;
}

export { findAll };