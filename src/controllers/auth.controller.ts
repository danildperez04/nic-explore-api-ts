import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth.service';
import { HttpStatusCode } from '../common/http/httpStatusCode';

export class AuthController {
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto = req.body;
      const user = await authService.register(dto);

      res.status(HttpStatusCode.CREATED).json(user);
    } catch (err) {
      next(err);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const result = await authService.login(username, password);

      res.json({ token: result.token, user: result.user });
    } catch (err) {
      next(err);
    }
  };
}

const defaultAuthController = new AuthController();
export default defaultAuthController;
