import { sumIfTwoDigits } from "../utils/sums";

export function billetConcessionaire(billet: string[]) {
  const numbers = billet.map((e) => parseInt(e));
  const DVS = {
    field1: numbers.splice(11,1)[0],
    field2: numbers.splice(22,1)[0],
    field3: numbers.splice(33,1)[0],
    field4: numbers.splice(44,1)[0]
  }
  
  // evi: effective value identifier
  const evi = numbers.slice(2,3)[0];

  function checkFields(){
    const field1 = numbers.slice(0,11).map((e) => e)
    const field2 = numbers.slice(11,22).map((e) => e)
    const field3 = numbers.slice(22,33).map((e) => e)
    const field4 = numbers.slice(33,44).map((e) => e)

    // field1
    if (!checkFieldNumber(field1, DVS.field1, evi)){
      throw new Error("linha inválida")
    }

    // field2
    if (!checkFieldNumber(field2, DVS.field2, evi)){
      throw new Error("linha inválida")
    }

    // field3
    if (!checkFieldNumber(field3, DVS.field3, evi)){
      throw new Error("linha inválida")
    }

    // field4
    if (!checkFieldNumber(field4, DVS.field4, evi)){
      throw new Error("linha inválida")
    }
  }

  function checkBilletCode() {
    const billetDigits = numbers;
    const billetDV = billetDigits.splice(3,1)[0];
    if(!checkBilletDVNumber(billetDigits, billetDV, evi)){
      throw new Error("linha inválida")
    }
  }

  checkFields()
  checkBilletCode()
  return true;
}

// evi: effective value identifier
function checkFieldNumber(field: number[], dv: number, evi: number) {
  if (evi === 6 || evi === 7){
    // Modulo 10
    let init = 1
    const multiplex = field.map(() => {
      if ( init === 2){
        init = 1
      } else if ( init === 1){
        init = 2
      }
      return init
    })
    const resultMult = field.map((e,i) => sumIfTwoDigits(e * multiplex[i]))
    const sumField = resultMult.reduce((a,b) => a + b)
    const restDiv = sumField % 10
    return (10 - restDiv) === dv
  } else if (evi === 8 || evi === 9){
    // Modulo 11
    let init = 9
    const multiplex = field.map(() => {
      if ( init === 9){
        init = 2
      } else {
        init += 1
      }
      return init
    }).reverse()
    const resultMult = field.map((e,i) => e * multiplex[i])
    const sumField = resultMult.reduce((a,b) => a + b)
    const restDiv = sumField % 11
    return (11 - restDiv) === dv
  } else {
    throw new Error("linha inválida")
  }
}

function checkBilletDVNumber(billetCode: number[], dv: number, evi: number) {

  if (evi === 6 || evi == 7){
    let init = 1
    const multiplex = billetCode.map(() => {
      if ( init === 1){
        init = 2
      } else if (init === 2) {
        init = 1
      }
      return init
    })
    const resultMult = billetCode.map((e,i) => sumIfTwoDigits(e * multiplex[i]))
    const sumCodes = resultMult.reduce((a,b) => a + b);
    const restDiv = sumCodes % 10
    return (10 - restDiv) === dv
  } else if (evi === 8 || evi === 9){
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
    const sumCodes = resultMult.reduce((a,b) => a + b);
    const restDiv = sumCodes % 11
    return (11 - restDiv) === dv
  } else {

  }
}