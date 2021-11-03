import express, { NextFunction, Request, Response } from 'express'
import errorHandler from './lib/errorHandler';
import notFoundHandler from './lib/notfound';
import userRoutes from './routes/user.routes'
import connectDB from './lib/db.conn';
import './src/models/transaction.model'

connectDB();

const app = express();

app.use(express.json())

app.use('/transaction', userRoutes)

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('This is working')
})


/**
 * 404 route
 */

app.use('*', notFoundHandler)

/**
 * Error handling middleware
 */
app.use(errorHandler)
app.listen(3000, () => {
    console.log(`Listening on port 3000`);
})