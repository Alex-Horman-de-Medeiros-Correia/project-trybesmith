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

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(statusCodes.OK).json(products);
  };
}

export default new ProductsController();
