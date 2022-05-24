import { sumIfTwoDigits } from "../utils/sums";

export function billetBank(billet: string[]) {
  const numbers = billet.map((e) => parseInt(e));
  const DVS = {
    field1: numbers.splice(9,1)[0],
    field2: numbers.splice(19,1)[0],
    field3: numbers.splice(29,1)[0]
  }
  let init = 1

  function checkFields(){
    const multiplex = numbers.map(() => {
      if ( init === 2){
        init = 1
      } else if ( init === 1){
        init = 2
      }
      return init
    })
    const resultMult = numbers.map((e,i) => e * multiplex[i])
    const field1 = resultMult.slice(0,9).map((e) => sumIfTwoDigits(e))
    const field2 = resultMult.slice(9,19).map((e) => sumIfTwoDigits(e))
    const field3 = resultMult.slice(19,29).map((e) => sumIfTwoDigits(e))

    // field1
    if (!checkFieldNumber(field1, DVS.field1)){
      throw new Error("linha inválida")
    }

    // field2
    if (!checkFieldNumber(field2, DVS.field2)){
      throw new Error("linha inválida")
    }

    // field3
    if (!checkFieldNumber(field3, DVS.field3)){
      throw new Error("linha inválida")
    }
  }

  function checkBilletCode() {
    const billetCode: number[] = [];
    const billetDV = numbers[29];
    billetCode.push(
      ...numbers.slice(0,4),
      ...numbers.slice(30,44),
      ...numbers.slice(4,9),
      ...numbers.slice(9,19),
      ...numbers.slice(19,29)
    )

    let init = 9
    const multiplex = billetCode.map(() => {
      if ( init === 9){
        init = 2
      } else {
        init += 1
      }
      return init
    }).reverse()

    const resultMult = billetCode.map((e,i) => e * multiplex[i])
    
    if(!checkBilletDVNumber(resultMult, billetDV)){
      throw new Error("linha inválida")
    }
  }

  checkFields()
  checkBilletCode()
  return true;
}

function checkFieldNumber(field: number[], dv: number) {
  const sumField = field.reduce((a,b) => a + b);
  const ceilField = Math.ceil(sumField / 10) * 10
  return (ceilField - sumField) === dv
}

function checkBilletDVNumber(billetCode: number[], dv: number) {
  const sumCodes = billetCode.reduce((a,b) => a + b);
  const restDiv = sumCodes % 11
  return (11 - restDiv) === dv
}