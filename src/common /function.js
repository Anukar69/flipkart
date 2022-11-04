export const amountParse = (amount) => {
  return Number(amount).toFixed(3);
};

export const amountPrice = (price) => {
  const finalPrice = price - (price * 55) / 100;
  return Number(finalPrice);
};
