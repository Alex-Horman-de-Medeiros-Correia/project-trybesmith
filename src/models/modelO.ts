import { Pool } from 'mysql2/promise';
import { Ordenando } from '../interfaces/interfaceO';

class ModelO {
  private conn: Pool;

  constructor(connection: Pool) {
    this.conn = connection;
  }

  public async getAll(): Promise<Ordenando[]> {
    const query = `
      SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders as o
      INNER JOIN Trybesmith.Products as p
      ON o.id = p.orderId
      GROUP BY o.id
    `;
    const [orders] = await this.conn.execute(query);
    return orders as Ordenando[];
  }
}

export default ModelO;
