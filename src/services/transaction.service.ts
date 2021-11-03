import Service from "../../baseInterfaces/service";
import { ITransaction } from "../models/transaction.model";
import TransactionRepository from "../repositories/transaction.repository";

export class UserService extends Service {
    constructor() {
        super(TransactionRepository)
    }

}

export default new UserService();