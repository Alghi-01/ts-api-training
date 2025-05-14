import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middlewares/error.middleware";

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || "5000", 10);

app.use(cors());
app.use(express.json());

// Middleware untuk route user
app.use("/api/users", userRoutes);

// Middleware untuk error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
