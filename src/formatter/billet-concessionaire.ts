export function billetConcessionaireFomatter(billet: string[]) {

  function amount() {    
    return Intl.NumberFormat(
      'pt-BR',
      { 
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      }).format(parseInt(billet.slice(4,15).join('')) / 100);
  }

  function barCode() {
    const numbers = billet.map((e)=> e);
    const billetCode: string[] = [];
    billetCode.push(
      ...numbers.slice(0,11),
      ...numbers.slice(12,23),
      ...numbers.slice(24,35),
      ...numbers.slice(36,47)
    )
    return billetCode.join('');
  }


  return {
    amount,
    barCode
  }
}