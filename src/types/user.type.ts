// types/user.type.ts
export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
}

// Union Type untuk query user
export type UserIdentifier = { id: string } | { email: string };
