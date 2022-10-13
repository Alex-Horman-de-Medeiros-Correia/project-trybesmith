import { Request, Response } from 'express';
import ServiceU from '../services/serviceU';
import statusCodes from '../utils/statusCodes';

class ControllerU {
  private service: ServiceU;

  constructor() {
    this.service = new ServiceU();
  }

  public create = async (req: Request, res: Response) => {
    const token = await this.service.create(req.body);
    res.status(statusCodes.CREATED).json({ token });
  };
}

export default new ControllerU();
