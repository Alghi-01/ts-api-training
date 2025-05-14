import e, { NextFunction, Request, Response } from "express";
import { loginUser } from "../services/auth.service";

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userWithToken = await loginUser(req.body);

    const { password, ...safeUser } = userWithToken; // exclude password
    res.status(200).json(safeUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ message: error.message });
    } else {
      next(error);
    }
  }
};
