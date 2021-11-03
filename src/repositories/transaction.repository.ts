import transactionModel, { ITransaction } from "../models/transaction.model"

export class TransactionRepository {
    async create(data: ITransaction): Promise<ITransaction> {
        return await transactionModel.create(data)
    }

    async all(): Promise<ITransaction[]> {
        return await transactionModel.find()
    }

    async findText(text: string): Promise<ITransaction[]> {
        console.log(text)
        return await transactionModel.find({ $text: { $search: text } })
    }
}
export default new TransactionRepository()