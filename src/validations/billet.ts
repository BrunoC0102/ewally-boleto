import { billetBankFomatter } from "../formatter/billet-bank";
import { IBillet } from "../models/billet";
import { billetBank } from "./billet-bank";

export function billetCheck(billet: string): IBillet | any {
  const billetNumbers = billet.split('')
  if (billet.length === 47){
    billetBank(billetNumbers)
    const { date, amount, barCode } = billetBankFomatter(billetNumbers);
    return {
      barCode: barCode(),
      amount: amount(),
      expirationDate: date()
    } 
  } else if (billet.length === 48){
    return "boleto concessionárias"
  } else {
    throw new Error("Not implement yet");
  }
}