import express, { Router } from 'express';
import basic from '../controllers/basicControllers';
import kyc from '../controllers/kycControllers';

const router: Router = express.Router();

router.get("", basic.login);
router.get("/register", basic.register);
router.get("/verifyphone", basic.verifyPhone);
router.get("/forgot", basic.adminForgot);
router.get("/reset", basic.adminReset);
router.get("/fetchdriver", basic.fetchAdmin);


router.post("/kyc", kyc.kycSub);

export default router;