import mongoose from 'mongoose'

export interface ITransaction extends mongoose.Document {
    transaction_note: string,
    transaction_amount: number,
    transaction_type: ['Default', 'Medical', 'Groceries', 'Electronics']
}

const transactionSchema = new mongoose.Schema({
    transaction_date: { type: Date, default: Date() },
    transaction_note: { type: String },
    transaction_amount: { type: Number, default: 0 },
    transaction_type: { type: String, enum: ['Default', 'Medical', 'Groceries', 'Electronics'], default: 'Default' }
})

transactionSchema.index({ transaction_note: 'text' })

const transactionModel = mongoose.model<ITransaction>('transactions', transactionSchema)
export default transactionModel