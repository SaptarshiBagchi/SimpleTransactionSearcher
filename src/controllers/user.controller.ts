import Controller from "../../baseInterfaces/controller";
import { ITransaction } from "../models/transaction.model";
import TransactionService from "../services/transaction.service";

export class UserController extends Controller<ITransaction> {
    constructor() {
        super(TransactionService)
    }

}

export default new UserController();