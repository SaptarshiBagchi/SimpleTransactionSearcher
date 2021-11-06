import Service from "../../baseInterfaces/service";
import TransactionRepository from "../repositories/transaction.repository";

export class UserService extends Service {
    constructor() {
        super(TransactionRepository)
    }

}

export default new UserService();