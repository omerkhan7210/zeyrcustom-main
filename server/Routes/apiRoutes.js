import express from 'express';
import { Signup,VerifyOtp,ForgotPassword,Login,ResetPassword, NewsletterForm } from '../Controllers/authController.js';

const router = express.Router();

router.post('/signup', Signup);
router.post('/verify-otp', VerifyOtp);
router.post('/login', Login);
router.post('/forgot-password', ForgotPassword);
router.post('/reset-password',ResetPassword);
router.post('/newsletter-form',NewsletterForm);

export default router;
