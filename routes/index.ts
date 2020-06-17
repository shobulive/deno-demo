// @ts-ignore
import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getAllUsers,
  getUserById,
  updateUser,
  addUser,
  deleteUser,
  // @ts-ignore
} from "../controllers/users.ts";

const router = new Router();

router
  .get("/api/v1/users", getAllUsers)
  .get("/api/v1/users/:id", getUserById)
  .post("/api/v1/users", addUser)
  .put("/api/v1/users/:id", updateUser)
  .delete("/api/v1/users/:id", deleteUser);

export default router;
