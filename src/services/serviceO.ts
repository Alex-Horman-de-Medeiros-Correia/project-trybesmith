import ModelO from '../models/modelO';
import connection from '../models/connection';
import { Ordenando } from '../interfaces/interfaceO';

class ServiceO {
  private model: ModelO;

  constructor() {
    this.model = new ModelO(connection);
  }

  public async getAll(): Promise<Ordenando[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default ServiceO;
