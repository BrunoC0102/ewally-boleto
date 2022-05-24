import { IBillet } from "../models/billet";
import { billetCheck } from "../validations/billet";

export default class BilletService {

  /**
   * getBillets
   */
  public getBillets(billet: string): IBillet {
    return billetCheck(billet);
  }
}