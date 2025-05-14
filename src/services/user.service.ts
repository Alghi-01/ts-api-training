import prisma from "../prisma/client";
import { CreateUserInput } from "../types/user.type";
import { hashPassword } from "../utils/hash.util";

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
