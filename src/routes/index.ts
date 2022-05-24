import express, { Request, Response } from "express"
const router = express.Router();
import billetRouter from "./billet";


router.use('/boleto', billetRouter);

export default router;