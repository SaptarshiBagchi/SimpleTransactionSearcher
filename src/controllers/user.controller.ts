import Controller from "../../baseInterfaces/controller";
import TransactionService from "../services/transaction.service";

export class UserController extends Controller {
    constructor() {
        super(TransactionService)
    }

}

export default new UserController();