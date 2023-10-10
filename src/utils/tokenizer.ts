import jwt, { Secret } from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config';

// create a class that will be used to sign, verify, and decode tokens
export class Token {
  // create a method that will sign a token using the constructor secret key
  public signToken(payload: any, ): string {
    // if the secret key is not defined throw an error
    if (!JWT_SECRET_KEY) {
      throw new Error('JWT_SECRET_KEY is not defined');
    }
    // sign the token using try catch to handle errors
    try {
      // sign the token using the secret key that expires in 1 hour
      return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1h' });
    }
    // if there is an error throw it
    catch (err) {
      // throw the error
      throw err;
    }
  }

  // create a method that will verify a token using the constructor secret key
  public verifyToken(token: string): any {
    // if the secret key is not defined throw an error
    if (!JWT_SECRET_KEY) {
      throw new Error('JWT_SECRET_KEY is not defined');
    }
    // verify the token using try catch to handle errors
    try {
      // verify the token using the secret key
      return jwt.verify(token, JWT_SECRET_KEY);
    }
    // if there is an error throw it
    catch (err) {
      // throw the error
      throw err;
    }
  }

  // create a method that will refresh a token using the constructor secret key
  public refreshToken(token: string): string {
    // if the secret key is not defined throw an error
    if (!JWT_SECRET_KEY) {
      throw new Error('JWT_SECRET_KEY is not defined');
    }
    // refresh the token using try catch to handle errors
    try {
      // verify the token using the secret key
      const decoded = jwt.verify(token, JWT_SECRET_KEY);
      // re encode the token and attach it to the request header
      return jwt.sign(decoded, JWT_SECRET_KEY, { expiresIn: '1h' });
    }
    // if there is an error throw it
    catch (err) {
      // throw the error
      throw err;
    }
  }
}
// export the Token class
export default new Token();
