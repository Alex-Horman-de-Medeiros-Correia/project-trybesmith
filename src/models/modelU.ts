import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser, IUserToken } from '../interfaces/interfaceU';

class UserModel {
  private conn: Pool;

  constructor(connection: Pool) {
    this.conn = connection;
  }

  public async create(user: IUser): Promise<IUserToken> {
    const { username, classe, level, password } = user;
    const query = `
      INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)
    `;

    const [{ insertId }] = await this.conn.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );

    return { id: insertId, username };
  }
}

export default UserModel;
