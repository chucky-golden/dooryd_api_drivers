import express, { Router } from 'express';
import basic from '../controllers/basicControllers';

const router: Router = express.Router();

router.get("", basic.login);
router.get("/register", basic.register);

export default router;