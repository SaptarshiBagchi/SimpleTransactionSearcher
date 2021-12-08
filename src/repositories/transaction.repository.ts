import { FilterQuery, Query, Document, Types } from "mongoose"
import transactionModel, { ITransaction } from "../models/transaction.model"

export class TransactionRepository {
    async create(data: ITransaction): Promise<ITransaction> {
        return await transactionModel.create(data)
    }

    async all2(): Promise<ITransaction[]> {
        return await transactionModel.find()
    }

    async findText(text: string): Promise<ITransaction[]> {
        console.log(text)
        return await transactionModel.find({ $text: { $search: text } })


    }

    async all(): Promise<ITransaction[]> {
        const query: Query<(Document<any, any, ITransaction> & ITransaction & {
            _id: Types.ObjectId;
        })[], Document<any, any, ITransaction> & ITransaction & {
            _id: Types.ObjectId;
        }, {}, ITransaction> = transactionModel.find()
        return await query.exec()
    }
}
export default new TransactionRepository()