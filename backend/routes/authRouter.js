import { Router } from 'express';
import * as authController from '../controllers/auth.js';
import verifyToken from '../middleware/verifyToken.js';

const authRouter = Router();
authRouter.post('/register', authController.signUp);
authRouter.post('/login', authController.signIn);
// authRouter.get('/me', verifyToken, authController.getUser);
authRouter.post('/logout', verifyToken, authController.logout);

export default authRouter;
