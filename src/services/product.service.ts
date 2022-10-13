import { IProduct } from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: IProduct) {
    const newProduct = await this.model.create(product);
    return newProduct;
  }
}

export default ProductService;
