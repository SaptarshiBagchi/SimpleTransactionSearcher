import IService from "./IService";
import { Request, Response, NextFunction } from 'express'
import { catchAsync } from "../lib/catchAsync";
import { ResponseType } from "../lib/types";

export default class Controller {
    service: IService;
    constructor(service: IService) {
        this.service = service;
    }

    all = catchAsync(async (_1: Request, res: Response, _2: NextFunction): Promise<ResponseType> => {
        const response = await this.service.all();
        return res.status(200).json(response);
    })

    create = catchAsync(async (req: Request, res: Response, _: NextFunction): Promise<ResponseType> => {
        const response = await this.service.create(req.body);
        return res.status(200).json(response);

    })

    findText = catchAsync(async (req: Request, res: Response, _: NextFunction): Promise<ResponseType> => {

        const searchText = req.query.text
        if (typeof searchText === 'string') {
            const response = await this.service.findText(searchText);
            return res.status(200).json(response);
        }
        throw new Error('Undefined Query')
    })
}

