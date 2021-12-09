import transactionModel, {
  ITransactionDocument
} from '../models/transaction.model'

export class TransactionRepository {
  async create(data: ITransactionDocument): Promise<ITransactionDocument> {
    // console.log(typeof transactionModel.set)
    // const document: ITransactionDocument = (await transactionModel.find().limit(2))[1]
    // const amount = document.amountINString()
    // console.log(amount)
    // return document
    const todo = await transactionModel.set(data)
    return todo
  }

  async all(): Promise<ITransactionDocument[]> {
    return (await transactionModel.find()) as ITransactionDocument[]
  }

  async findText(text: string): Promise<ITransactionDocument[]> {
    return await transactionModel.find({ $text: { $search: text } })
  }
}
export default new TransactionRepository()
