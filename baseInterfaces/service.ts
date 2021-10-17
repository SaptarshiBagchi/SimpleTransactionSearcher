import IService from "./IService";

export default class Service implements IService {
    repository: any;
    constructor(repository: any) {
        this.repository = repository
    }

    async all(): Promise<any> {
        return this.repository.all()
    }
}