import { User } from '../entities/user.entity';
import { dataSource } from '../config/database';
import { IRepository } from './IRepository';

const userRepository = dataSource.getRepository(User);

export class UserRepository implements IRepository<User> {
  constructor(private repository = userRepository) { }

  async findAll(): Promise<User[]> {
    const users = await this.repository.find({});

    return users;
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.repository.findOneBy({ id });

    return user;
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.repository.create(userData as User);
    return this.repository.save(user);
  }

  async update(id: number, userData: Partial<User>): Promise<User | null> {
    const existing = await this.repository.findOneBy({ id });
    if (!existing) return null;

    this.repository.merge(existing, userData);
    return this.repository.save(existing);
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      return false;
    }

    user.isActive = false;
    await this.repository.save(user);

    return true;
  }
}

const defaultUserRepository = new UserRepository();
export default defaultUserRepository;