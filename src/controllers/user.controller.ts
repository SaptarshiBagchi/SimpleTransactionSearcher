import { NextFunction, Request, Response } from "express";
import Controller from "../../baseInterfaces/controller";
import userService from "../services/user.service";

export class UserController extends Controller {
    constructor() {
        super(userService)
    }
    async me(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const response = await userService.me();
            return res.status(200).json(response)

        } catch (err: any) {
            return next(err)
        }
    }

}

export default new UserController();