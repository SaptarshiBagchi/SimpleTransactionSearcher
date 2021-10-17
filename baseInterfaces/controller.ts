import IService from "./IService";

export default class Controller {
    service: IService;
    constructor(service: IService) {
        this.service = service;
    }

    async all() {
        return await this.service.all();
    }
}

