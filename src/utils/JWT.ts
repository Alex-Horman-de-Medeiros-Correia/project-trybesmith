import dotenv from 'dotenv';
import { verify, sign, SignOptions } from 'jsonwebtoken';
import { IUserToken } from '../interfaces/user.interface';

dotenv.config();

const SECRET = process.env.JWT_SECRET as string;

export const createToken = (payload: IUserToken) => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = sign(payload, SECRET, jwtConfig);

  return token;
};

export const validateToken = (token: string) => verify(token, SECRET);
