export const toSentenceCase = (value: string) => {
  const lowerCase = value
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/[\s]+/g, " ");
  return lowerCase[0].toUpperCase() + lowerCase.slice(1);
};
export const fixedToSentenceCase = (value: string) => {
  const lowerCase = value;
};
