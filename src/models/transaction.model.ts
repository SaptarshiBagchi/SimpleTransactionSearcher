import mongoose from 'mongoose'

export interface ITransaction {
    transaction_note: string,
    transaction_amount: number,
    transaction_type: 'Default' | 'Medical' | 'Groceries' | 'Electronics'

}

const transactionSchema = new mongoose.Schema<ITransaction, mongoose.Model<ITransaction>>({
    transaction_note: { type: String },
    transaction_amount: { type: Number, default: 0 },
    transaction_type: { type: String, enum: ['Default', 'Medical', 'Groceries', 'Electronics'], default: 'Default' }
},
    {
        // toJSON: {
        //     transform: function (doc, ret, options) {
        //         ret.id = ret._id
        //         const d = new Date(ret.transaction_date)
        //         ret.transaction_date = d.toUTCString()
        //         delete ret._id
        //         delete ret.__v
        //         return ret
        //     }
        // },
        timestamps: true
    })

transactionSchema.index({ transaction_note: 'text' })

const transactionModel = mongoose.model<ITransaction>('transactions', transactionSchema)
export default transactionModel