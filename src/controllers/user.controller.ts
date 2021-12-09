import Controller from '../../baseInterfaces/controller';
import { ITransactionDocument } from '../models/transaction.model';
import TransactionService from '../services/transaction.service';

export class UserController extends Controller<ITransactionDocument> {
  constructor() {
    super(TransactionService)
  }

}

export default new UserController();