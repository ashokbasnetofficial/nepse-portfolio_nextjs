export const formatNumber = (num: number, decimalPlaces: number = 2) => {
  return num % 1 === 0 ? num.toString() : num.toFixed(decimalPlaces);
};
