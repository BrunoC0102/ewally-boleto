import express from 'express';
const router = express.Router();

import BilletController from "../controllers/billet-controller";

const billetController: BilletController = new BilletController();


router.get("/:billet", billetController.getBillets);

export default router;

