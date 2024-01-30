import express, { Router } from 'express';
import basic from '../controllers/basicControllers';

const router: Router = express.Router();

router.get("", basic.login);
router.get("/register", basic.register);
router.get("/forgot", basic.adminForgot);
router.get("/reset", basic.adminReset);
router.get("/fetchdriver", basic.fetchAdmin);

export default router;