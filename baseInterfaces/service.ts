import mongoose from "mongoose";
import IService from "./IService";

export default class Service<T> implements IService<T> {
    repository: any;
    constructor(repository: any) {
        console.log('Repository getting initialised')
        console.log(repository)
        this.repository = repository
    }

    async all(): Promise<T[]> {
        console.log('This is getting logged')
        return this.repository.all()
    }

    async create(data: T): Promise<T> {
        return this.repository.create(data)
    }
    async findText(data: string): Promise<T[]> {
        return this.repository.findText(data)
    }

}