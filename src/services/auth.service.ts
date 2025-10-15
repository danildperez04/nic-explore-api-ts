import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/user.dto';
import userService from './user.service';
import { config } from '../config/config';
import { User } from '../entities/user.entity';
import { NotFoundException, UnauthorizedException } from '../common/exceptions/httpException';

export class AuthService {
  private jwtSecret = config.auth?.jwtSecret;
  private jwtExpiresIn = config.auth?.jwtExpiresIn;

  async register(dto: CreateUserDto): Promise<User> {
    const user = await userService.create(dto);

    return user;
  }

  async login(username: string, password: string): Promise<{ token: string; user: User }> {
    try {
      // This can throw NotFoundException
      const user = await userService.findBy({ username });

      const match = await bcrypt.compare(password, user.password);

      // If password doesn't match throw an exception
      if (!match) throw new UnauthorizedException();

      // TODO: fix types
      const payload = { sub: user.id, username: user.username } as Record<string, unknown>;
      const token = jwt.sign(payload, this.jwtSecret as jwt.Secret, { expiresIn: this.jwtExpiresIn } as jwt.SignOptions);

      return { token, user };
    }
    catch (error) {
      // Check if the exception was thrown intentionally
      // Cannot provide information about non-existent user
      if (error instanceof NotFoundException || error instanceof UnauthorizedException) {
        throw new UnauthorizedException('Invalid Credentials');
      }

      throw error;
    }
  }
}

const defaultAuthService = new AuthService();
export default defaultAuthService;
