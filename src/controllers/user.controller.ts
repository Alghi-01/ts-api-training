import { Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";
import { createResponse } from "../utils/response.util";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.getAllUsers();
    res
      .status(200)
      .json(createResponse(true, "Users retrieved successfully", users));
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.findUser({ id: req.params.id });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
