// middlewares/typeguard.middleware.ts
import e, { Request, Response, NextFunction } from "express";

export const validateLoginInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, username } = req.body;

    if (
      typeof password !== "string" ||
      (!email && !username) ||
      (email && typeof email !== "string") ||
      (username && typeof username !== "string")
    ) {
      throw new Error("Invalid input types");
    }

    next();
  } catch (error) {
    next(error);
  }
};
