import UserModel from '../models/modelU';
import connection from '../models/connection';
import { IUser } from '../interfaces/interfaceU';
import { createToken } from '../utils/JWT';

class ServiceU {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<string> {
    const novoUser = await this.model.create(user);
    const token = createToken(novoUser);

    return token;
  }
}

export default ServiceU;
