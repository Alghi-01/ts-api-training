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

// Untuk implementasi login dengan email dan password
// atau username dan password
export interface EmailPassword {
  email: string;
  password: string;
}

export interface UsernamePassword {
  username: string;
  password: string;
}
