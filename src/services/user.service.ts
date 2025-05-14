import prisma from "../prisma/client";
import { CreateUserInput } from "../types/user.type";
import { hashPassword } from "../utils/hash.util";
import { UserIdentifier } from "../types/user.type";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (data: CreateUserInput) => {
  const hashedPassword = await hashPassword(data.password);
  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

export const findUser = async (identifier: UserIdentifier) => {
  if ("id" in identifier) {
    return prisma.user.findUnique({ where: { id: identifier.id } });
  } else if ("email" in identifier) {
    return prisma.user.findUnique({ where: { email: identifier.email } });
  }
};
