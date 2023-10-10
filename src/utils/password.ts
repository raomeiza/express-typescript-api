import crypto from 'crypto';

// create an async function to hash the password using pbkdf2 and sha512
export const hashPassword = async (password: string): Promise<string> => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1024, 512, 'sha512').toString('hex');
  return `${salt}$${hash}`;
}

// create an async function to check if the password is correct
export const checkPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  const [salt, hash] = hashedPassword.split('$');
  const newHash = crypto.pbkdf2Sync(password, salt, 1024, 512, 'sha512').toString('hex');
  return hash === newHash;
}