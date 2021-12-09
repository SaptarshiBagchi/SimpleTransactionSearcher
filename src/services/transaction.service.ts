import Service from "../../baseInterfaces/service";
import { ITransactionDocument } from "../models/transaction.model";
import TransactionRepository from "../repositories/transaction.repository";

export class UserService extends Service<ITransactionDocument> {
    constructor() {
        super(TransactionRepository)
    }



}

export default new UserService();