// @ts-ignore
import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  ping,
  healthCheck
  // @ts-ignore
} from "../controllers/base.ts";

const router = new Router();

router
  .get("/health-check", healthCheck)
  .get("/ping", ping);

export default router;
