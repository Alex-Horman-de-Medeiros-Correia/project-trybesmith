import UserModel from '../models/user.model';
import connection from '../models/connection';
import { IUser } from '../interfaces/user.interface';
import { createToken } from '../utils/JWT';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<string> {
    const newUser = await this.model.create(user);
    const token = createToken(newUser);

    return token;
  }
}

export default UserService;
