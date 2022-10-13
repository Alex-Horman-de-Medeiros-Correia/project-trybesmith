import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCodes from '../utils/statusCodes';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const token = await this.service.create(req.body);
    res.status(statusCodes.CREATED).json({ token });
  };
}

export default new UserController();
