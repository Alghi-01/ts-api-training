import { Router } from "express";
import {
  getUsers,
  getUserById,
  registerUser,
} from "../controllers/user.controller";
import { loginController } from "../controllers/auth.controller";

const router: Router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", registerUser);
router.post("/login", loginController);

export default router;
