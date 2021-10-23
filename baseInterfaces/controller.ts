import IService from "./IService";
import { Request, Response, NextFunction } from 'express'

export default class Controller {
    service: IService;
    constructor(service: IService) {
        this.service = service;
    }

    all = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {

            const response = await this.service.all();
            return res.status(200).json(response);
        } catch (error: any) {
            return next(error)
        }
    }

    create = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {

            const response = await this.service.create(req.body);
            return res.status(200).json(response);
        } catch (error: any) {
            return next(error)
        }
    }
    findText = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            const searchText = req.query.text
            if (typeof searchText === 'string') {
                const response = await this.service.findText(searchText);
                return res.status(200).json(response);
            }
            throw new Error('Undefined Query')

        } catch (error: any) {
            return next(error)
        }
    }
}

