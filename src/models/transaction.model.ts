import mongoose from 'mongoose'


export interface ITransaction {
    transaction_note: string,
    transaction_amount: number,
    transaction_type: 'Default' | 'Medical' | 'Groceries' | 'Electronics'

}

//default interface
export interface ITransactionDocument extends ITransaction, mongoose.Document {
    amountINString: () => string

}

//interface methods used to define static keywords
export interface ITransactionModel extends mongoose.Model<ITransactionDocument> {
    set: (data: ITransactionDocument) => Promise<ITransactionDocument>
}

const transactionSchema = new mongoose.Schema({
    transaction_note: { type: String },
    transaction_amount: { type: Number, default: 0 },
    transaction_type: { type: String, enum: ['Default', 'Medical', 'Groceries', 'Electronics'], default: 'Default' }
},
    {
        toJSON: {
            transform: function (doc, ret, options) {
                ret.id = ret._id
                const d = new Date(ret.transaction_date)
                ret.transaction_date = d.toUTCString()
                delete ret._id
                delete ret.__v
                return ret
            }
        },
        timestamps: true
    })
transactionSchema.methods.amountINString = function (this: ITransactionDocument): string {

    return `${(this as ITransactionDocument).transaction_amount}`
}

transactionSchema.index({ transaction_note: 'text' })

transactionSchema.statics.set = function (data: ITransactionDocument) {
    return new transactionModel(data)
}
const transactionModel = mongoose.model<ITransactionDocument, ITransactionModel>('transactions', transactionSchema)



export default transactionModel