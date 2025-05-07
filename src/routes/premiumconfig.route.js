import express from 'express';
import { getPremiumConfig } from '../controllers/premiumconfig.controller.js'

const router = express.Router();

router.get('/getPremium', getPremiumConfig);

export default router;