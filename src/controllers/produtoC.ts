import { Request, Response } from 'express';
import ProdutoS from '../services/produtoS';
import statusCodes from '../utils/statusCodes';

class ProductsController {
  private service: ProdutoS;

  constructor() {
    this.service = new ProdutoS();
  }

  public create = async (req: Request, res: Response) => {
    const produtoNovo = await this.service.create(req.body);
    res.status(statusCodes.CREATED).json(produtoNovo);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();
    res.status(statusCodes.OK).json(products);
  };
}

export default new ProductsController();
