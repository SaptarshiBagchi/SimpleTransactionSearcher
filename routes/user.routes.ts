import express from 'express'
import userController from '../src/controllers/user.controller';
const router = express.Router();

router.get('/me', userController.me)

export default router;