import { Request, Response } from "https://deno.land/x/attain/mod.ts";

export class UserController {
    public getUsers = async (req: Request, res: Response) => {
        console.log("In controller ==> getUsers");
        res.status(200).send({ data: 'List of users'});
    }

    public createUser = async (req: Request, res: Response) => {
        console.log("In controller ==> createUser");
        res.status(200).send({ data: 'Create user!'});
    }
}