import { Document } from "mongoose";

interface IService {
    all<T extends Document>(): Promise<T[]>
    create<T extends Document>(data: T): Promise<T>
    findText<T extends Document>(text: string): Promise<T[]>
}

export default IService;