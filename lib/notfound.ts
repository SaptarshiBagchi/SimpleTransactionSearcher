import { NextFunction, Request, Response } from 'express'
const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {

  res.send(404).json({
    message: 'Not Found',
    errors: [{
      type: 'Invalid URL',
      message: 'Invalid Route provided'
    }]
  })

}

export default notFoundHandler;