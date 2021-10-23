import Service from "../../baseInterfaces/service";
import { ITransaction } from "../models/transaction.model";
import UserRepository from "../repositories/user.repository";

export class UserService extends Service {
    constructor() {
        super(UserRepository)
    }

}

export default new UserService();