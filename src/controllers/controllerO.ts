import { Request, Response } from 'express';
import ServiceO from '../services/serviceO';
import statusCodes from '../utils/statusCodes';

class ControllerO {
  private service: ServiceO;

  constructor() {
    this.service = new ServiceO();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();
    
    res.status(statusCodes.OK).json(orders);
  };
}

export default new ControllerO();
