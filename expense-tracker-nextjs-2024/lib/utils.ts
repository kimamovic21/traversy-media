export function addCommas(x: number): string {
  const fixedNumber = x.toFixed(2);
  const withCommas = fixedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return withCommas.replace('.', ',');
};
