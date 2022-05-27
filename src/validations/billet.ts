import { billetBankFomatter } from "../formatter/billet-bank";
import { billetConcessionaireFomatter } from "../formatter/billet-concessionaire";
import { IBillet } from "../models/billet";
import { billetBank } from "./billet-bank";
import { billetConcessionaire } from "./billet-concessionaire";

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
    billetConcessionaire(billetNumbers);
    const { amount, barCode } = billetConcessionaireFomatter(billetNumbers)
    return {
      barCode: barCode(),
      amount: amount()
    }
  } else {
    throw new Error("Not implement yet");
  }
}