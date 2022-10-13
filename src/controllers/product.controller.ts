import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCodes from '../utils/statusCodes';

class ProductsController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const newProduct = await this.service.create(req.body);
    res.status(statusCodes.CREATED).json(newProduct);
  };
}

export default new ProductsController();
