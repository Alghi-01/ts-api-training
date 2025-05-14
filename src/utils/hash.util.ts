import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (plainPassword: string): Promise<string> => {
  return await bcrypt.hash(plainPassword, SALT_ROUNDS);
};

export const comparePassword = async (
  plainPassword: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hash);
};
