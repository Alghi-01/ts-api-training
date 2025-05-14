import { Router } from "express";
import {
  getUsers,
  getUserById,
  registerUser,
} from "../controllers/user.controller";

const router: Router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", registerUser);

export default router;
