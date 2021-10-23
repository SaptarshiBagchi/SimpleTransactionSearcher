import mongoose from "mongoose";
import IService from "./IService";

export default class Service implements IService {
    repository: any;
    constructor(repository: any) {
        console.log('Repository getting initialised')
        console.log(repository)
        this.repository = repository
    }

    async all<T extends mongoose.Document>(): Promise<T[]> {
        console.log('This is getting logged')
        return this.repository.all()
    }

    async create<T extends mongoose.Document>(data: T): Promise<T> {
        return this.repository.create(data)
    }
    async findText<T extends mongoose.Document>(data: string): Promise<T[]> {
        return this.repository.findText(data)
    }

}