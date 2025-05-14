import prisma from "../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  EmailPassword,
  UsernamePassword,
  UserWithToken,
} from "../types/user.type";

// Function Overload Signatures
export const loginUser: {
  (payload: EmailPassword): Promise<UserWithToken>;
  (payload: UsernamePassword): Promise<UserWithToken>;
} = async (
  payload: EmailPassword | UsernamePassword
): Promise<UserWithToken> => {
  let user;

  if ("email" in payload) {
    user = await prisma.user.findUnique({ where: { email: payload.email } });
  } else if ("username" in payload) {
    user = await prisma.user.findFirst({ where: { name: payload.username } });
  }

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(payload.password, user.password);
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
