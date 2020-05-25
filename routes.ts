import { Router } from "https://deno.land/x/attain/mod.ts";
import userRouter from "./modules/user/userRoute.ts";

const routes = new Router();

routes.use('/user', userRouter);

export default routes;