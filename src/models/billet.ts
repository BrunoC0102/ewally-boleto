export interface IBillet {
  readonly barCode: string
  readonly amount: string
  readonly expirationDate: string
}

export default class Billet {
  
  private barCode: string
  private amount: string
  private expirationDate: string

  constructor(
    barCode: string,
    amount: string,
    expirationDate: string
  ) {
    this.barCode = barCode;
    this.amount = amount;
    this.expirationDate = expirationDate;
  }

  public setBarCode(barCode: string) {
    this.barCode = barCode;
  }

  public getBarCode() {
    return this.barCode;
  }

  public setAmount(amount: string) {
    this.amount = amount;
  }

  public getAmount() {
    return this.amount;
  }

  public setExpirationDate(expirationDate: string) {
    this.expirationDate = expirationDate;
  }

  public getExpirationDate() {
    return this.expirationDate;
  }
}
