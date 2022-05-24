export function sumIfTwoDigits(value: number) {
  const valueStr = value.toString();
  if (valueStr.length >= 2) {
    return valueStr.split('').map((e) => parseInt(e)).reduce((a,b) => a + b);
  }
  return value
}