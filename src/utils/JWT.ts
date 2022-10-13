import dotenv from 'dotenv';
import { verify, sign, SignOptions } from 'jsonwebtoken';
import { IUserToken } from '../interfaces/interfaceU';

dotenv.config();

// aqui eu precisei da ajuda de algumas pessoas para fazer a parte do token

/* const SECRET = process.env.JWT_SECRET as string; */

const SECRET = process.env.JWT_SECRET || '';

export const createToken = (payload: IUserToken) => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = sign(payload, SECRET, jwtConfig);

  return token;
};

export const validateToken = (token: string) => verify(token, SECRET);
