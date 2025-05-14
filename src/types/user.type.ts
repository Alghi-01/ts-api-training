// types/user.type.ts
import { User } from "../../prisma/generated/client";

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
}

// Union Type untuk query user
export type UserIdentifier = { id: string } | { email: string };

// Type untuk payload setelah login berhasil
export type UserWithToken = User & {
  token: string;
};
