import { calculate } from "../validations/date"

export function billetBankFomatter(billet: string[]) {
  function date() {
    const maturity = parseInt(billet.slice(33,37).join(''));
    return calculate.date(maturity);
  }

  function amount() { 
    return Intl.NumberFormat(
      'pt-BR',
      { 
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      }).format(parseInt(billet.slice(37,48).join('')) / 100);
  }

  function barCode() {
    const numbers = billet.map((e)=> parseInt(e));
    const billetCode: number[] = [];
    billetCode.push(
      ...numbers.slice(0,4),
      numbers[32],
      ...numbers.slice(33,47),
      ...numbers.slice(4,9),
      ...numbers.slice(10,20),
      ...numbers.slice(21,31)
    )
    return billetCode.join('');
  }


  return {
    date,
    amount,
    barCode
  }
}