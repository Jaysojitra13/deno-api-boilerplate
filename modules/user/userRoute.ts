import { Router } from "https://deno.land/x/attain/mod.ts";
import { UserController } from "./userController.ts";

const userRouter = new Router();
const userController: UserController = new UserController();

userRouter.get("/", userController.getUsers);

userRouter.post("/create", userController.createUser);

export default userRouter;