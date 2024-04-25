import express, { Router } from 'express';
import basic from '../controllers/basicControllers';
import kyc from '../controllers/kycControllers';
import multer from 'multer'

const router: Router = express.Router();

router.get("", basic.test);
router.post("", basic.login);
router.post("/register", basic.register);
router.post("/verifyphone", basic.verifyPhone);
router.post("/forgot", basic.adminForgot);
router.post("/verifyotp", basic.verifyOtp);
router.post("/reset", basic.adminReset);
router.get("/fetchdriver", basic.fetchAdmin);


router.post("/kyc", kyc.kycSub);

export default router;