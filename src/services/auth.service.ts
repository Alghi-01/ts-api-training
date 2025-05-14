import prisma from "../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserWithToken } from "../types/user.type";

export const loginUser = async (
  email: string,
  password: string
): Promise<UserWithToken> => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user.id, email: user.email }, "secret-key", {
    expiresIn: "1h",
  });

  // Mengembalikan gabungan user + token (intersection)
  return {
    ...user,
    token,
  };
};
