export const generateClamp = (
  expectedMinPx: number,
  expectedMaxPx: number,
  containerMaxPx: number
): string => {
  const minRem = (expectedMinPx / 16).toFixed(2);
  const preferredVw = ((expectedMaxPx / containerMaxPx) * 100).toFixed(2);
  const maxRem = (expectedMaxPx / 16).toFixed(2);

  return `clamp(${minRem}rem, ${preferredVw}vw, ${maxRem}rem)`;
};
