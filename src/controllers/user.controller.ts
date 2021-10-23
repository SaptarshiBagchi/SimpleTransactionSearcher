import { NextFunction, Request, Response } from "express";
import Controller from "../../baseInterfaces/controller";
import UserService from "../services/user.service";

export class UserController extends Controller {
    constructor() {
        super(UserService)
    }

}

export default new UserController();