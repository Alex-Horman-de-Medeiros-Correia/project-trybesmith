import { AddProduct } from '../interfaces/interfaceP';
import connection from '../models/connection';
import ProductModel from '../models/produtoM';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: AddProduct): Promise<AddProduct> {
    const produtoNovo = await this.model.create(product);
    return produtoNovo;
  }

  public async getAll(): Promise<AddProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;
