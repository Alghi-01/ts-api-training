// middlewares/typeguard.middleware.ts
import e, { Request, Response, NextFunction } from "express";

export const validateLoginInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    if (typeof email !== "string" || typeof password !== "string") {
      throw new Error("Invalid input types");
    }
    next();
  } catch (error) {
    next(error);
  }
};
