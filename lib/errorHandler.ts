import { Request, Response, NextFunction } from 'express'

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        message: 'Internal Error',
        errors: [
            { type: 'Error was thrown', message: err.message, stack: err.stack }
        ]
    })
}

export default errorHandler;
