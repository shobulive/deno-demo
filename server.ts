// @ts-ignore
import { Application } from "https://deno.land/x/oak/mod.ts";
// @ts-ignore
import userRouter from "./routes/user.ts";
// @ts-ignore
import baseRouter from "./routes/base.ts";
const port = 8000;

const app = new Application();

app.use(userRouter.routes());
app.use(baseRouter.routes());
app.use(userRouter.allowedMethods());
app.use(baseRouter.allowedMethods());

console.log(`Server running on port ${port}`);

await app.listen({ port });
