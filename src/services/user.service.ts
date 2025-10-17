import { User } from '../entities/user.entity';
import { userRepository } from '../repositories';
import { IService } from './IService';
import { NotFoundException } from '../common/exceptions/httpException';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import bcrypt from 'bcrypt';
import { FindOptionsWhere } from 'typeorm';
export class UserService implements IService<User> {
  constructor(private repository = userRepository) { }

  async findAll(): Promise<User[]> {
    const users = await this.repository.findAll();

    if (!users || users.length === 0) {
      throw new NotFoundException('No users found');
    }

    return users;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.repository.findOne(id);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async findBy(identifier: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
    const user = await userRepository.findOneBy(identifier);

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async create(userData: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashPassword(userData.password);

    const user = await this.repository.create({
      ...userData,
      password: hashedPassword,
    });

    return user;
  }

  async update(id: number, userData: UpdateUserDto): Promise<User | null> {
    const updated = await this.repository.update(id, userData);

    if (!updated) throw new NotFoundException('User not found');

    return updated;
  }

  async remove(id: number): Promise<void> {
    const removed = await this.repository.remove(id);

    if (!removed) throw new NotFoundException('User not found');
  }

  async hashPassword(input: string) {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(input, salt);

    return hash;
  }
}

const defaultUserService = new UserService();
export default defaultUserService;