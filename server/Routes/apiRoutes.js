import express from 'express';
import { Signup,VerifyOtp,ForgotPassword,Login,ResetPassword } from '../Controllers/authController.js';

const router = express.Router();

router.post('/signup', Signup);
router.post('/verify-otp', VerifyOtp);
router.post('/login', Login);
router.post('/forgot-password', ForgotPassword);
router.post('/reset-password',ResetPassword);

export default router;
