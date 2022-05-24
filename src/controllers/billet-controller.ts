import BilletService from "../services/billet-service";
import { Request, Response } from "express";

const billetService: BilletService = new BilletService();

export default class BilletController {

  public getBillets(req: Request, res: Response) {
    const { billet } = req.params;
    let result
    try {
      result = billetService.getBillets(billet)
    } catch (error) {
      res.status(400).send({
        message: "linha inválida"
      })
    }
    res.send(result)
  }
}