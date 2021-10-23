import express from 'express'
import UserController from '../src/controllers/user.controller';
const router = express.Router();

router.route('/').get(UserController.all).post(UserController.create)
router.route('/find').get(UserController.findText)
export default router;