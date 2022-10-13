import { Pool, ResultSetHeader } from 'mysql2/promise';
import { AddProduct } from '../interfaces/interfaceP';

class ProductModel {
  private conn: Pool;

  constructor(connection: Pool) {
    this.conn = connection;
  }

  public async create(product: AddProduct): Promise<AddProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

    const [{ insertId }] = await this.conn.execute<ResultSetHeader>(query, [name, amount]);

    return { id: insertId, ...product };
  }

  public async getAll(): Promise<AddProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    /* const [products] = await this.connection.execute(query); */
    const [products] = await this.conn.execute(query);

    return products as AddProduct[];
  }
}

export default ProductModel;
